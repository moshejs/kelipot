import ScrollReveal from "./scroll-reveal";

export default function Home() {
  return (
    <>
      {/* ====================== HERO ====================== */}
      <section className="hero container">
        <div className="eyebrow">
          An Inquiry <span className="dot"></span> Four Movements
        </div>
        <h1>
          Klippot.
          <span className="corrupt">Four corruptions.</span>
        </h1>
        <p className="lede">
          What does fire become when it forgets warmth.<br />
          What does the well become <em>when it forgets to give.</em>
        </p>
        <div className="scroll-cue">
          <span className="line"></span>
          Hover each form
        </div>
      </section>

      {/* ====================== I. FIRE ====================== */}
      <section className="element element-fire">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="fire-pure-grad" cx="50%" cy="78%" r="58%">
                    <stop offset="0%" stopColor="#f4c98a" stopOpacity="0.95" />
                    <stop offset="45%" stopColor="#d68a55" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#7a3a1c" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="fire-corrupt-grad" cx="50%" cy="80%" r="58%">
                    <stop offset="0%" stopColor="#ffb87a" stopOpacity="1" />
                    <stop offset="35%" stopColor="#c43a22" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#3a0a04" stopOpacity="0" />
                  </radialGradient>
                  <filter id="fire-blur-pure" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" />
                  </filter>
                  <filter id="fire-blur-corrupt" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.2" />
                  </filter>
                </defs>

                {/* pure flame: graceful, dancing */}
                <g className="pure-layer">
                  <g className="fire-pure-flame">
                    <path
                      d="M100 222 C70 192 76 158 92 132 C98 116 96 96 100 64 C104 96 102 116 108 132 C124 158 130 192 100 222 Z"
                      fill="url(#fire-pure-grad)"
                      filter="url(#fire-blur-pure)"
                    />
                    <path
                      d="M100 220 C82 198 88 174 96 152 C100 138 98 122 100 96 C102 122 100 138 104 152 C112 174 118 198 100 220 Z"
                      fill="#f4c98a"
                      fillOpacity="0.6"
                    />
                  </g>
                  {/* gentle base glow */}
                  <ellipse cx="100" cy="222" rx="44" ry="6" fill="#d68a55" fillOpacity="0.25" />
                </g>

                {/* corrupt flame: jagged, devouring */}
                <g className="corrupt-layer">
                  <g className="fire-corrupt-flame">
                    <path
                      d="M100 224 C58 188 70 144 88 116 C94 96 88 72 100 36 C112 72 106 96 112 116 C130 144 142 188 100 224 Z"
                      fill="url(#fire-corrupt-grad)"
                      filter="url(#fire-blur-corrupt)"
                    />
                    <path
                      d="M100 222 C76 200 82 168 92 142 C96 124 92 102 100 76 C108 102 104 124 108 142 C118 168 124 200 100 222 Z"
                      fill="#ffb87a"
                      fillOpacity="0.55"
                    />
                    {/* dagger tongues */}
                    <path d="M100 36 L96 60 L100 50 L104 60 Z" fill="#ffb87a" fillOpacity="0.9" />
                  </g>
                  <ellipse cx="100" cy="224" rx="60" ry="8" fill="#c43a22" fillOpacity="0.45" />
                </g>
              </svg>
            </div>

            <div className="element-text reveal-stagger">
              <div className="roman">
                <span className="num">I</span>
                <svg className="glyph" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M7 1 L13 13 L1 13 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                </svg>
                <span>Fire</span>
              </div>
              <h2>
                Passion, <span className="verb">turned.</span>
              </h2>
              <p className="pure-line">It was light, once. It was warmth.</p>
              <div className="divider"></div>
              <p className="corrupt-line">
                The same heat — the same source —<br />
                set against the room it once kept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== II. WATER ====================== */}
      <section className="element element-water">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="water-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6b7ba8" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#1f2a4a" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="100" cy="100" r="90" fill="url(#water-bg)" />

                {/* pure: ripples expanding outward */}
                <g className="pure-layer">
                  <circle className="ripple-1" cx="100" cy="100" r="8" fill="none" stroke="#6b7ba8" strokeWidth="0.8" />
                  <circle className="ripple-2" cx="100" cy="100" r="8" fill="none" stroke="#6b7ba8" strokeWidth="0.8" />
                  <circle className="ripple-3" cx="100" cy="100" r="8" fill="none" stroke="#6b7ba8" strokeWidth="0.8" />
                  {/* still center */}
                  <circle cx="100" cy="100" r="3" fill="#6b7ba8" fillOpacity="0.6" />
                </g>

                {/* corrupt: rings collapsing inward */}
                <g className="corrupt-layer">
                  <circle className="pull-1" cx="100" cy="100" r="92" fill="none" stroke="#1f2a4a" strokeWidth="1" />
                  <circle className="pull-2" cx="100" cy="100" r="92" fill="none" stroke="#1f2a4a" strokeWidth="1" />
                  <circle className="pull-3" cx="100" cy="100" r="92" fill="none" stroke="#1f2a4a" strokeWidth="1" />
                  {/* dark vortex eye */}
                  <circle cx="100" cy="100" r="5" fill="#0a0908" />
                  <circle cx="100" cy="100" r="14" fill="none" stroke="#1f2a4a" strokeWidth="0.6" strokeOpacity="0.6" />
                </g>
              </svg>
            </div>

            <div className="element-text reveal-stagger">
              <div className="roman">
                <span className="num">II</span>
                <svg className="glyph" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M1 1 L13 1 L7 13 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                </svg>
                <span>Water</span>
              </div>
              <h2>
                The well, <span className="verb">reversed.</span>
              </h2>
              <p className="pure-line">It rose to meet me. It nourished.</p>
              <div className="divider"></div>
              <p className="corrupt-line">
                What once gave breath<br />
                learned to take it back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== III. EARTH ====================== */}
      <section className="element element-earth">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="earth-stone" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3a3026" />
                    <stop offset="100%" stopColor="#1a1410" />
                  </linearGradient>
                  <linearGradient id="earth-stone-corrupt" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2a2018" />
                    <stop offset="100%" stopColor="#0a0604" />
                  </linearGradient>
                </defs>

                {/* pure: monolith, still and dignified */}
                <g className="pure-layer">
                  <rect x="62" y="40" width="76" height="184" fill="url(#earth-stone)" rx="1" />
                  {/* subtle texture striations */}
                  <line x1="62" y1="80" x2="138" y2="78" stroke="#b08a5a" strokeWidth="0.3" strokeOpacity="0.18" />
                  <line x1="62" y1="124" x2="138" y2="126" stroke="#b08a5a" strokeWidth="0.3" strokeOpacity="0.18" />
                  <line x1="62" y1="170" x2="138" y2="168" stroke="#b08a5a" strokeWidth="0.3" strokeOpacity="0.18" />
                  {/* crown light */}
                  <line x1="62" y1="40" x2="138" y2="40" stroke="#b08a5a" strokeWidth="0.5" strokeOpacity="0.5" />
                  {/* ground shadow */}
                  <ellipse cx="100" cy="226" rx="54" ry="3" fill="#000" fillOpacity="0.6" />
                </g>

                {/* corrupt: same monolith, fractured. cracks reveal as user hovers */}
                <g className="corrupt-layer">
                  <rect x="62" y="40" width="76" height="184" fill="url(#earth-stone-corrupt)" rx="1" />
                  <line x1="62" y1="40" x2="138" y2="40" stroke="#4a3520" strokeWidth="0.5" strokeOpacity="0.5" />
                  <ellipse cx="100" cy="226" rx="54" ry="3" fill="#000" fillOpacity="0.7" />
                  {/* cracks: dashed strokes that draw in */}
                  <path
                    className="earth-crack earth-crack-1"
                    d="M100 40 L96 78 L102 116 L98 154 L100 192 L99 224"
                    fill="none"
                    stroke="#0a0604"
                    strokeWidth="1.2"
                  />
                  <path
                    className="earth-crack earth-crack-2"
                    d="M96 78 L78 92 L72 118 L62 132"
                    fill="none"
                    stroke="#0a0604"
                    strokeWidth="0.8"
                  />
                  <path
                    className="earth-crack earth-crack-3"
                    d="M102 116 L122 128 L128 152 L138 162"
                    fill="none"
                    stroke="#0a0604"
                    strokeWidth="0.8"
                  />
                  <path
                    className="earth-crack earth-crack-4"
                    d="M98 154 L86 178 L82 204"
                    fill="none"
                    stroke="#0a0604"
                    strokeWidth="0.6"
                  />
                  {/* crack inner glow */}
                  <path
                    className="earth-crack earth-crack-1"
                    d="M100 40 L96 78 L102 116 L98 154 L100 192 L99 224"
                    fill="none"
                    stroke="#b08a5a"
                    strokeWidth="0.3"
                    strokeOpacity="0.4"
                  />
                </g>
              </svg>
            </div>

            <div className="element-text reveal-stagger">
              <div className="roman">
                <span className="num">III</span>
                <svg className="glyph" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M1 3 L13 3 L7 13 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="3" y1="9" x2="11" y2="9" stroke="currentColor" strokeWidth="0.6" />
                </svg>
                <span>Earth</span>
              </div>
              <h2>
                Effort, <span className="verb">refusing.</span>
              </h2>
              <p className="pure-line">Stable. Held. A foundation.</p>
              <div className="divider"></div>
              <p className="corrupt-line">
                The ground that held<br />
                has learned the shape of refusing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== IV. AIR ====================== */}
      <section className="element element-air">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <radialGradient id="air-bg" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#c4cdd0" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#2a3032" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect x="0" y="0" width="200" height="240" fill="url(#air-bg)" />

                {/* pure: breath rising, particles drifting up */}
                <g className="pure-layer">
                  <circle className="breath breath-1" cx="50" cy="220" r="1.6" fill="#c4cdd0" />
                  <circle className="breath breath-2" cx="78" cy="220" r="1.2" fill="#c4cdd0" />
                  <circle className="breath breath-3" cx="100" cy="220" r="2" fill="#c4cdd0" />
                  <circle className="breath breath-4" cx="124" cy="220" r="1.4" fill="#c4cdd0" />
                  <circle className="breath breath-5" cx="150" cy="220" r="1.2" fill="#c4cdd0" />
                  <circle className="breath breath-6" cx="64" cy="220" r="1" fill="#c4cdd0" />
                  <circle className="breath breath-7" cx="136" cy="220" r="1.6" fill="#c4cdd0" />
                  {/* source line */}
                  <line x1="38" y1="222" x2="162" y2="222" stroke="#c4cdd0" strokeWidth="0.4" strokeOpacity="0.3" />
                </g>

                {/* corrupt: frozen mid-rise, severed by horizontal cut */}
                <g className="corrupt-layer">
                  <circle cx="50" cy="172" r="1.4" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="78" cy="148" r="1" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="100" cy="156" r="1.8" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="124" cy="142" r="1.2" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="150" cy="168" r="1" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="64" cy="190" r="0.8" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="136" cy="180" r="1.4" fill="#c4cdd0" fillOpacity="0.45" />
                  <circle cx="44" cy="208" r="1" fill="#c4cdd0" fillOpacity="0.4" />
                  <circle cx="158" cy="210" r="1.2" fill="#c4cdd0" fillOpacity="0.4" />
                  <line x1="38" y1="222" x2="162" y2="222" stroke="#c4cdd0" strokeWidth="0.4" strokeOpacity="0.25" />
                  {/* the cut: a dagger of negative space */}
                  <line className="air-cut" x1="20" y1="120" x2="180" y2="120" stroke="#c4cdd0" strokeWidth="1" strokeOpacity="0.85" />
                  {/* emphasis ticks at the cut endpoints */}
                  <line className="air-cut" x1="20" y1="115" x2="20" y2="125" stroke="#c4cdd0" strokeWidth="1" strokeOpacity="0.85" />
                  <line className="air-cut" x1="180" y1="115" x2="180" y2="125" stroke="#c4cdd0" strokeWidth="1" strokeOpacity="0.85" />
                </g>
              </svg>
            </div>

            <div className="element-text reveal-stagger">
              <div className="roman">
                <span className="num">IV</span>
                <svg className="glyph" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M7 1 L13 13 L1 13 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <line x1="3" y1="8" x2="11" y2="8" stroke="currentColor" strokeWidth="0.6" />
                </svg>
                <span>Air</span>
              </div>
              <h2>
                Breath, <span className="verb">withheld.</span>
              </h2>
              <p className="pure-line">It filled the room. It made it a room.</p>
              <div className="divider"></div>
              <p className="corrupt-line">
                The space you used to move<br />
                where you used to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== CODA ====================== */}
      <section className="coda container">
        <div className="mark reveal">— Coda —</div>
        <blockquote className="reveal">
          The shell is not the spark.{" "}
          <span className="dim">
            What was warm is warm still — somewhere<br />a witness keeps the count.
          </span>
        </blockquote>
        <div className="signature reveal">
          Witnessed <span style={{ color: "var(--ember)" }}>·</span> Held{" "}
          <span style={{ color: "var(--ember)" }}>·</span> Released
        </div>
      </section>

      <footer>
        Klippot &nbsp;{" "}
        <span style={{ color: "var(--fg-mute)" }}>·</span>
        {" "}&nbsp; In Four Movements
      </footer>

      <ScrollReveal />
    </>
  );
}
