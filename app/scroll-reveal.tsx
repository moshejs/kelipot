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
      .querySelectorAll(".reveal, .reveal-stagger")
      .forEach((el) => revealIO.observe(el));

    // 2. Rail active-section tracking — center-of-viewport detection
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".element")
    );
    const railItems = Array.from(
      document.querySelectorAll<HTMLElement>(".rail-item")
    );
    const sectionIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = sections.indexOf(entry.target as HTMLElement);
          if (idx === -1) return;
          railItems.forEach((item) => item.classList.remove("active"));
          railItems[idx]?.classList.add("active");
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
      // parallax (skip if reduced motion)
      if (!reduceMotion) {
        const vh = window.innerHeight;
        const center = vh / 2;
        for (const target of parallaxTargets) {
          const rect = target.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = elCenter - center;
          const offset = -distance * 0.08;
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

    // 6. Keyboard — hold Space to invert all elements.
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
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      if (isTextInput(e.target)) return;
      e.preventDefault();
      if (!e.repeat) document.body.classList.add("is-corrupt-all");
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code !== "Space") return;
      if (isTextInput(e.target)) return;
      e.preventDefault();
      document.body.classList.remove("is-corrupt-all");
    };
    // Use capture so we win over any focused element's default handling
    // (e.g., a focused rail anchor).
    window.addEventListener("keydown", onKeyDown, { capture: true });
    window.addEventListener("keyup", onKeyUp, { capture: true });

    return () => {
      revealIO.disconnect();
      sectionIO.disconnect();
      heroIO?.disconnect();
      cleanups.forEach((fn) => fn());
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("keydown", onKeyDown, { capture: true });
      window.removeEventListener("keyup", onKeyUp, { capture: true });
    };
  }, []);

  return null;
}
