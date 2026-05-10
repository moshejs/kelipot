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

    // 2. Rail active-section tracking
    // A 1px-tall band at the vertical center of the viewport — whichever
    // section overlaps it is the active one.
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

    // 4. Touch fallback: tap an element to toggle its corrupt state.
    // Ignore clicks that originate inside the rail nav.
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

    return () => {
      revealIO.disconnect();
      sectionIO.disconnect();
      heroIO?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
