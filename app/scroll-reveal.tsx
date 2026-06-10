"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // 1. Reveal-on-scroll
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );
    document
      .querySelectorAll(".reveal, .reveal-stagger, .reveal-coda")
      .forEach((el) => revealIO.observe(el));

    // 2. Rail active-section tracking — center-of-viewport detection
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".element")
    );
    const railItems = Array.from(
      document.querySelectorAll<HTMLElement>(".rail-item")
    );
    // The witness is tinted by what it counts: as a section centers, the
    // reading-progress bar adopts that element's hue. (The rail tints via CSS.)
    const elementAccent = [
      "var(--ember)",
      "var(--indigo)",
      "var(--clay)",
      "var(--pale)",
    ];
    const elementGlow = [
      "rgba(214,138,85,0.4)", // ember
      "rgba(107,123,168,0.4)", // indigo
      "rgba(176,138,90,0.4)", // clay
      "rgba(196,205,208,0.35)", // pale
    ];
    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = sections.indexOf(entry.target as HTMLElement);
          if (idx === -1) return;
          railItems.forEach((item) => {
            item.classList.remove("active");
            item.removeAttribute("aria-current");
          });
          railItems[idx]?.classList.add("active");
          railItems[idx]?.setAttribute("aria-current", "location");
          const root = document.documentElement;
          root.style.setProperty("--active-accent", elementAccent[idx]);
          root.style.setProperty("--active-glow", elementGlow[idx]);
        });
      },
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => sectionIO.observe(s));

    // 3. Rail visibility — fade in once hero leaves view
    const rail = document.querySelector<HTMLElement>(".rail");
    const hero = document.querySelector<HTMLElement>(".hero");
    let heroIO: IntersectionObserver | null = null;
    if (rail && hero) {
      heroIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              rail.classList.remove("visible");
            } else {
              rail.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );
      heroIO.observe(hero);
    }

    // 4. Touch fallback — tap an element to toggle its corrupt state.
    // Ignore taps on the rail nav.
    const cleanups: Array<() => void> = [];
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>(".element").forEach((el) => {
        const onClick = (e: Event) => {
          if ((e.target as HTMLElement).closest(".rail")) return;
          el.classList.toggle("is-corrupt");
        };
        el.addEventListener("click", onClick);
        cleanups.push(() => el.removeEventListener("click", onClick));
      });
    }

    // 5. Reading progress + parallax on scroll, throttled to RAF
    const progressBar = document.querySelector<HTMLElement>(
      ".reading-progress-bar"
    );
    const parallaxTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".element-art-parallax")
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let ticking = false;
    const updateScroll = () => {
      // reading progress
      if (progressBar) {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
        progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
      }
      // parallax (skip if reduced motion). Read the *parent's* rect so
      // the math doesn't feed back on the target's own transform.
      if (!reduceMotion) {
        const vh = window.innerHeight;
        const center = vh / 2;
        // read phase — gather every rect before any write, so a transform
        // write can never force a synchronous style flush for the next read
        const writes: Array<[HTMLElement, number]> = [];
        for (const target of parallaxTargets) {
          const parent = target.parentElement;
          if (!parent) continue;
          const rect = parent.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = elCenter - center;
          writes.push([target, -distance * 0.08]);
        }
        // write phase
        for (const [target, offset] of writes) {
          target.style.transform = `translateY(${offset.toFixed(2)}px)`;
        }
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScroll();

    // 6. Fire leans toward the gaze — the shell turning to face being seen.
    // Skews the flame groups about their wick; eased entirely in RAF so it
    // never fights the scroll parallax. Hover/fine-pointer only, never under
    // reduced motion. Scoped to the art so the flame never reacts while the
    // poem beside it is being read.
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (finePointer && !reduceMotion) {
      const fireWrap = document.querySelector<HTMLElement>(
        ".element-fire .element-art-wrap"
      );
      const leanGroups = Array.from(
        document.querySelectorAll<SVGGElement>(".element-fire .fire-lean")
      );
      if (fireWrap && leanGroups.length) {
        const LEAN_MAX = 2.4; // degrees
        let targetDeg = 0;
        let curDeg = 0;
        let leanRAF = 0;
        const write = (deg: number) => {
          const t = `skewX(${deg.toFixed(3)}deg)`;
          for (const g of leanGroups) g.style.transform = t;
        };
        const step = () => {
          curDeg += (targetDeg - curDeg) * 0.12;
          if (Math.abs(targetDeg - curDeg) <= 0.01) curDeg = targetDeg;
          write(curDeg);
          leanRAF = curDeg === targetDeg ? 0 : requestAnimationFrame(step);
        };
        const kick = () => {
          if (!leanRAF) leanRAF = requestAnimationFrame(step);
        };
        const onMove = (e: PointerEvent) => {
          const r = fireWrap.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / (r.width / 2)));
          // skewX(+) shears the top left; negate so the tip leans toward the cursor.
          targetDeg = -nx * LEAN_MAX;
          kick();
        };
        const onLeave = () => {
          targetDeg = 0;
          kick();
        };
        fireWrap.addEventListener("pointermove", onMove, { passive: true });
        fireWrap.addEventListener("pointerleave", onLeave, { passive: true });
        cleanups.push(() => {
          fireWrap.removeEventListener("pointermove", onMove);
          fireWrap.removeEventListener("pointerleave", onLeave);
          if (leanRAF) cancelAnimationFrame(leanRAF);
          for (const g of leanGroups) g.style.transform = "";
        });
      }
    }

    // 7. Keyboard — hold Space to invert all elements.
    // preventDefault on every keydown (including autorepeats) so the
    // browser doesn't scroll while held; only flip state on the first one.
    const isTextInput = (el: EventTarget | null) => {
      const t = el as HTMLElement | null;
      if (!t) return false;
      return (
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      );
    };
    let releaseTimer: ReturnType<typeof setTimeout> | null = null;
    let releaseSweepTimer: ReturnType<typeof setTimeout> | null = null;
    const clearHoverSuppression = () => {
      document.body.classList.remove("hover-suppressed");
      window.removeEventListener("mousemove", clearHoverSuppression);
      window.removeEventListener("touchstart", clearHoverSuppression);
      if (releaseTimer !== null) {
        clearTimeout(releaseTimer);
        releaseTimer = null;
      }
    };
    // The release "sweep" (is-releasing) withdraws the corruption IV->I. Clear
    // it on a rapid re-press or unmount so the class never strands.
    const clearReleaseSweep = () => {
      if (releaseSweepTimer !== null) {
        clearTimeout(releaseSweepTimer);
        releaseSweepTimer = null;
      }
      document.body.classList.remove("is-releasing");
    };
    // Engaging is deliberate: a short hold (180ms) flips the piece; a quick
    // tap falls through to ordinary paging so Space keeps its native meaning
    // (WCAG 2.1.4 — no single-key hijack). The 180ms is imperceptible inside
    // the invert's own staggered sweep.
    let holdTimer: ReturnType<typeof setTimeout> | null = null;
    const cancelHold = () => {
      if (holdTimer !== null) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
    };
    // Withdraw IV->I. Shared by keyup, window blur, and tab-hide so a lost
    // keyup (Cmd+Tab mid-hold) can never strand the inverted state.
    const release = () => {
      cancelHold();
      if (!document.body.classList.contains("is-corrupt-all")) return;
      // Withdraw in reverse (IV->I): mark releasing, then drop the held state.
      clearReleaseSweep();
      document.body.classList.add("is-releasing");
      document.body.classList.remove("is-corrupt-all");
      // 700ms fade + 330ms last delay, rounded up.
      releaseSweepTimer = setTimeout(() => {
        document.body.classList.remove("is-releasing");
        releaseSweepTimer = null;
      }, 1100);
      // Suppress hover until the user moves the mouse — otherwise the
      // element under the cursor immediately re-engages :hover and
      // stays corrupt while the other three return to pure.
      document.body.classList.add("hover-suppressed");
      window.addEventListener("mousemove", clearHoverSuppression, {
        once: true,
      });
      window.addEventListener("touchstart", clearHoverSuppression, {
        once: true,
      });
      // Safety: never leave hover suppressed for more than 1.5s.
      releaseTimer = setTimeout(clearHoverSuppression, 1500);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      if (isTextInput(e.target)) return;
      // OS chords (Cmd+Space, Ctrl+Space, Alt+Space) belong to the system —
      // their keyup is usually swallowed, which would strand the held state.
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      e.preventDefault();
      if (
        !e.repeat &&
        holdTimer === null &&
        !document.body.classList.contains("is-corrupt-all")
      ) {
        holdTimer = setTimeout(() => {
          holdTimer = null;
          // Cancel any in-flight hover-suppression / withdrawal from a
          // prior release.
          clearHoverSuppression();
          clearReleaseSweep();
          document.body.classList.add("is-corrupt-all");
        }, 180);
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      if (isTextInput(e.target)) return;
      e.preventDefault();
      if (holdTimer !== null) {
        // A tap, not a hold: hand back Space's native meaning — page down
        // (shift pages up) — and engage nothing.
        cancelHold();
        window.scrollBy({
          top: (e.shiftKey ? -1 : 1) * window.innerHeight * 0.85,
          behavior: reduceMotion ? "auto" : "smooth",
        });
        return;
      }
      release();
    };
    const onBlur = () => release();
    const onVisibility = () => {
      if (document.hidden) release();
    };
    // bfcache: a page restored from the back/forward cache keeps whatever
    // classes it was snapshotted with — clear any held/transient state.
    const onPageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      cancelHold();
      clearHoverSuppression();
      clearReleaseSweep();
      document.body.classList.remove("is-corrupt-all");
    };
    // Use capture so we win over any focused element's default handling
    // (e.g., a focused rail anchor).
    window.addEventListener("keydown", onKeyDown, { capture: true });
    window.addEventListener("keyup", onKeyUp, { capture: true });
    window.addEventListener("blur", onBlur);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      revealIO.disconnect();
      sectionIO.disconnect();
      heroIO?.disconnect();
      cleanups.forEach((fn) => fn());
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("keydown", onKeyDown, { capture: true });
      window.removeEventListener("keyup", onKeyUp, { capture: true });
      window.removeEventListener("blur", onBlur);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
      cancelHold();
      clearHoverSuppression();
      clearReleaseSweep();
      document.body.classList.remove("is-corrupt-all");
    };
  }, []);

  return null;
}
