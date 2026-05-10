import ScrollReveal from "./scroll-reveal";

export default function Home() {
  return (
    <>
      {/* ====================== READING PROGRESS ====================== */}
      <div className="reading-progress" aria-hidden="true">
        <div className="reading-progress-bar"></div>
      </div>

      {/* ====================== RAIL ====================== */}
      <nav className="rail" aria-label="Section navigation">
        <a href="#fire" className="rail-item" data-index="0" aria-label="Fire">
          <span className="rail-num">I</span>
          <span className="rail-name">Fire</span>
        </a>
        <a href="#water" className="rail-item" data-index="1" aria-label="Water">
          <span className="rail-num">II</span>
          <span className="rail-name">Water</span>
        </a>
        <a href="#earth" className="rail-item" data-index="2" aria-label="Earth">
          <span className="rail-num">III</span>
          <span className="rail-name">Earth</span>
        </a>
        <a href="#air" className="rail-item" data-index="3" aria-label="Air">
          <span className="rail-num">IV</span>
          <span className="rail-name">Air</span>
        </a>
      </nav>

      {/* ====================== HERO ====================== */}
      <section className="hero container">
        <svg className="sigil" viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.45" />
          <path d="M 16 5 L 26 22 L 6 22 Z" fill="none" stroke="#d68a55" strokeWidth="0.7" strokeOpacity="0.78" strokeLinejoin="round" />
          <path d="M 16 27 L 6 10 L 26 10 Z" fill="none" stroke="#9aacd4" strokeWidth="0.7" strokeOpacity="0.62" strokeLinejoin="round" />
          <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.55" />
        </svg>
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
          Hover each form · hold <span className="key">space</span> to invert
        </div>
      </section>

      {/* ====================== I. FIRE ====================== */}
      <section className="element element-fire" id="fire">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <div className="element-art-parallax">
                <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <radialGradient id="fire-pure-glow" cx="50%" cy="55%" r="55%">
                      <stop offset="0%" stopColor="#d68a55" stopOpacity="0.42" />
                      <stop offset="60%" stopColor="#7a3a1c" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#7a3a1c" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="fire-pure-grad" cx="50%" cy="80%" r="58%">
                      <stop offset="0%" stopColor="#fbe5b8" stopOpacity="0.95" />
                      <stop offset="35%" stopColor="#f4c98a" stopOpacity="0.85" />
                      <stop offset="72%" stopColor="#d68a55" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#7a3a1c" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="fire-pure-core" cx="50%" cy="78%" r="40%">
                      <stop offset="0%" stopColor="#fff4d8" stopOpacity="0.95" />
                      <stop offset="55%" stopColor="#fbe5b8" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#f4c98a" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="fire-corrupt-glow" cx="50%" cy="55%" r="62%">
                      <stop offset="0%" stopColor="#c43a22" stopOpacity="0.5" />
                      <stop offset="55%" stopColor="#3a0a04" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#3a0a04" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="fire-corrupt-grad" cx="50%" cy="82%" r="58%">
                      <stop offset="0%" stopColor="#ffd09a" stopOpacity="1" />
                      <stop offset="32%" stopColor="#ffb87a" stopOpacity="0.92" />
                      <stop offset="68%" stopColor="#c43a22" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#3a0a04" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="fire-corrupt-core" cx="50%" cy="80%" r="36%">
                      <stop offset="0%" stopColor="#fff0d0" stopOpacity="0.95" />
                      <stop offset="60%" stopColor="#ffd09a" stopOpacity="0.55" />
                      <stop offset="100%" stopColor="#ffb87a" stopOpacity="0" />
                    </radialGradient>
                    <filter id="fire-blur-pure" x="-25%" y="-25%" width="150%" height="150%">
                      <feGaussianBlur stdDeviation="2.4" />
                    </filter>
                    <filter id="fire-blur-corrupt" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="1.8" />
                    </filter>
                  </defs>

                  {/* pure: a single calm flame */}
                  <g className="pure-layer">
                    <ellipse className="fire-halo-pure" cx="100" cy="178" rx="62" ry="64" fill="url(#fire-pure-glow)" filter="url(#fire-blur-pure)" />
                    <g className="fire-pure-flame">
                      <path
                        d="M 80 222 C 60 220 44 192 56 156 C 66 130 84 122 86 96 C 86 76 94 58 100 38 C 106 58 114 76 114 96 C 116 122 134 130 144 156 C 156 192 140 220 120 222 L 80 222 Z"
                        fill="url(#fire-pure-grad)"
                      />
                      <path
                        className="fire-flicker"
                        d="M 88 218 C 74 215 62 188 72 158 C 80 134 90 130 90 108 C 90 90 96 76 100 62 C 104 76 110 90 110 108 C 110 130 120 134 128 158 C 138 188 126 215 112 218 L 88 218 Z"
                        fill="url(#fire-pure-core)"
                      />
                      <path
                        className="fire-tip"
                        d="M 100 78 C 96 96 96 130 100 150 C 104 130 104 96 100 78 Z"
                        fill="#fff4d8"
                        fillOpacity="0.7"
                      />
                    </g>
                    <ellipse cx="100" cy="222" rx="42" ry="3" fill="#f4c98a" fillOpacity="0.5" />
                    <circle cx="101" cy="22" r="1.2" fill="#fbe5b8" fillOpacity="0.65" />
                  </g>

                  {/* corrupt: aggressive, taller flame with embers */}
                  <g className="corrupt-layer">
                    <ellipse className="fire-halo-corrupt" cx="100" cy="166" rx="76" ry="82" fill="url(#fire-corrupt-glow)" filter="url(#fire-blur-corrupt)" />
                    <g className="fire-corrupt-flame">
                      <path
                        d="M 76 226 C 48 224 22 192 38 152 C 52 120 78 114 70 86 C 62 56 86 36 94 16 Q 100 6 106 16 C 114 36 138 56 130 86 C 122 114 148 120 162 152 C 178 192 152 224 124 226 L 76 226 Z"
                        fill="url(#fire-corrupt-grad)"
                      />
                      <path
                        className="fire-corrupt-flicker"
                        d="M 86 220 C 64 218 46 192 60 156 C 70 130 86 124 82 100 C 78 78 90 60 96 40 Q 100 30 104 40 C 110 60 122 78 118 100 C 114 124 130 130 140 156 C 154 192 136 218 114 220 L 86 220 Z"
                        fill="url(#fire-corrupt-core)"
                      />
                      <path
                        className="fire-tip-corrupt"
                        d="M 100 50 C 96 90 96 140 100 168 C 104 140 104 90 100 50 Z"
                        fill="#fff0d0"
                        fillOpacity="0.7"
                      />
                    </g>
                    <ellipse cx="100" cy="226" rx="56" ry="4" fill="#c43a22" fillOpacity="0.6" />
                    {/* embers (animated) */}
                    <circle className="ember ember-1" cx="58" cy="48" r="1.3" fill="#ffb87a" fillOpacity="0.8" />
                    <circle className="ember ember-2" cx="148" cy="58" r="1.6" fill="#ffd09a" fillOpacity="0.85" />
                    <circle className="ember ember-3" cx="74" cy="20" r="0.9" fill="#ffb87a" fillOpacity="0.7" />
                    <circle className="ember ember-4" cx="124" cy="32" r="1.1" fill="#ffd09a" fillOpacity="0.75" />
                    <circle className="ember ember-5" cx="100" cy="2" r="1.2" fill="#fff0d0" fillOpacity="0.6" />
                    <circle className="ember ember-6" cx="40" cy="80" r="0.7" fill="#ffd09a" fillOpacity="0.7" />
                    <circle className="ember ember-7" cx="160" cy="100" r="0.9" fill="#ffb87a" fillOpacity="0.65" />
                  </g>
                </svg>
              </div>
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
      <section className="element element-water" id="water">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <div className="element-art-parallax">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <radialGradient id="water-bg" cx="50%" cy="42%" r="55%">
                      <stop offset="0%" stopColor="#6b7ba8" stopOpacity="0.24" />
                      <stop offset="65%" stopColor="#3a466b" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#1f2a4a" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="water-void" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#000" stopOpacity="0.92" />
                      <stop offset="55%" stopColor="#0a0d18" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#1f2a4a" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle cx="100" cy="100" r="92" fill="url(#water-bg)" />
                  <circle cx="100" cy="100" r="92" fill="none" stroke="#6b7ba8" strokeWidth="0.4" strokeOpacity="0.22" />

                  <g className="pure-layer">
                    <circle cx="100" cy="100" r="62" fill="none" stroke="#6b7ba8" strokeWidth="0.3" strokeOpacity="0.14" />
                    <circle cx="100" cy="100" r="40" fill="none" stroke="#6b7ba8" strokeWidth="0.3" strokeOpacity="0.16" />
                    <circle className="ripple-1" cx="100" cy="100" r="8" fill="none" stroke="#9aacd4" strokeWidth="0.9" />
                    <circle className="ripple-2" cx="100" cy="100" r="8" fill="none" stroke="#9aacd4" strokeWidth="0.9" />
                    <circle className="ripple-3" cx="100" cy="100" r="8" fill="none" stroke="#9aacd4" strokeWidth="0.9" />
                    <circle cx="100" cy="100" r="3.4" fill="#9aacd4" fillOpacity="0.85" />
                    <circle cx="100" cy="99" r="1.2" fill="#fff" fillOpacity="0.5" />
                  </g>

                  <g className="corrupt-layer">
                    <path
                      d="M 178 100 C 178 60 140 38 100 58 C 70 73 78 102 100 96"
                      fill="none"
                      stroke="#1f2a4a"
                      strokeWidth="0.8"
                      strokeOpacity="0.55"
                    />
                    <path
                      d="M 22 100 C 22 140 60 162 100 142 C 130 127 122 98 100 104"
                      fill="none"
                      stroke="#1f2a4a"
                      strokeWidth="0.8"
                      strokeOpacity="0.55"
                    />
                    <circle className="pull-1" cx="100" cy="100" r="92" fill="none" stroke="#3a466b" strokeWidth="1" />
                    <circle className="pull-2" cx="100" cy="100" r="92" fill="none" stroke="#3a466b" strokeWidth="1" />
                    <circle className="pull-3" cx="100" cy="100" r="92" fill="none" stroke="#3a466b" strokeWidth="1" />
                    <circle cx="100" cy="100" r="22" fill="url(#water-void)" />
                    <circle cx="100" cy="100" r="22" fill="none" stroke="#1f2a4a" strokeWidth="0.5" strokeOpacity="0.7" />
                    <circle cx="100" cy="100" r="6" fill="#000" />
                  </g>
                </svg>
              </div>
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
      <section className="element element-earth" id="earth">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <div className="element-art-parallax">
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

                  <g className="pure-layer">
                    <path
                      d="M 76 38 L 124 38 L 132 54 L 138 224 L 62 224 L 68 54 Z"
                      fill="url(#earth-stone)"
                    />
                    <path d="M 76 38 L 124 38 L 132 54 L 68 54 Z" fill="#5a4830" fillOpacity="0.55" />
                    <path d="M 100 54 L 132 54 L 138 224 L 100 224 Z" fill="#000" fillOpacity="0.18" />
                    <path d="M 67 96 L 132 95" stroke="#b08a5a" strokeWidth="0.3" strokeOpacity="0.18" fill="none" />
                    <path d="M 67 132 L 133 134" stroke="#b08a5a" strokeWidth="0.3" strokeOpacity="0.18" fill="none" />
                    <path d="M 66 174 L 134 172" stroke="#b08a5a" strokeWidth="0.3" strokeOpacity="0.18" fill="none" />
                    <line x1="76" y1="38" x2="124" y2="38" stroke="#d4a86a" strokeWidth="0.6" strokeOpacity="0.6" />
                    <ellipse cx="100" cy="226" rx="58" ry="3" fill="#000" fillOpacity="0.7" />
                  </g>

                  <g className="corrupt-layer">
                    <path
                      d="M 76 38 L 124 38 L 132 54 L 138 224 L 62 224 L 68 54 Z"
                      fill="url(#earth-stone-corrupt)"
                    />
                    <path d="M 76 38 L 124 38 L 132 54 L 68 54 Z" fill="#1a1208" fillOpacity="0.85" />
                    <path d="M 100 54 L 132 54 L 138 224 L 100 224 Z" fill="#000" fillOpacity="0.32" />
                    <line x1="76" y1="38" x2="124" y2="38" stroke="#4a3520" strokeWidth="0.5" strokeOpacity="0.4" />
                    <ellipse cx="100" cy="226" rx="58" ry="3" fill="#000" fillOpacity="0.85" />

                    <path
                      className="earth-crack earth-crack-1"
                      d="M 100 38 L 96 78 L 104 116 L 96 152 L 102 192 L 99 224"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path
                      className="earth-crack earth-crack-2"
                      d="M 96 78 L 80 92 L 72 116 L 64 130"
                      fill="none"
                      stroke="#000"
                      strokeWidth="0.9"
                      strokeLinecap="round"
                    />
                    <path
                      className="earth-crack earth-crack-3"
                      d="M 104 116 L 122 128 L 130 152 L 136 170"
                      fill="none"
                      stroke="#000"
                      strokeWidth="0.9"
                      strokeLinecap="round"
                    />
                    <path
                      className="earth-crack earth-crack-4"
                      d="M 96 152 L 86 174 L 80 200"
                      fill="none"
                      stroke="#000"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                    />
                    <path
                      className="earth-crack earth-crack-1"
                      d="M 100 38 L 96 78 L 104 116 L 96 152 L 102 192 L 99 224"
                      fill="none"
                      stroke="#7a3a1c"
                      strokeWidth="0.4"
                      strokeOpacity="0.55"
                    />
                  </g>
                </svg>
              </div>
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
      <section className="element element-air" id="air">
        <div className="container">
          <div className="element-grid">
            <div className="element-art-wrap reveal">
              <div className="element-art-parallax">
                <svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <defs>
                    <radialGradient id="air-bg" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#c4cdd0" stopOpacity="0.06" />
                      <stop offset="100%" stopColor="#2a3032" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <rect x="0" y="0" width="200" height="240" fill="url(#air-bg)" />

                  <g className="pure-layer">
                    <path className="breath breath-1" d="M 50 222 Q 47 214 51 206" fill="none" stroke="#c4cdd0" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.7" />
                    <path className="breath breath-2" d="M 78 222 Q 76 215 80 208" fill="none" stroke="#c4cdd0" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.6" />
                    <path className="breath breath-3" d="M 100 222 Q 97 210 101 198" fill="none" stroke="#c4cdd0" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.85" />
                    <path className="breath breath-4" d="M 124 222 Q 122 213 126 204" fill="none" stroke="#c4cdd0" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
                    <path className="breath breath-5" d="M 150 222 Q 148 215 152 208" fill="none" stroke="#c4cdd0" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.6" />
                    <path className="breath breath-6" d="M 64 222 Q 63 217 65 213" fill="none" stroke="#c4cdd0" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.55" />
                    <path className="breath breath-7" d="M 136 222 Q 134 213 138 204" fill="none" stroke="#c4cdd0" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.75" />
                    <line className="air-source" x1="38" y1="223" x2="162" y2="223" stroke="#c4cdd0" strokeWidth="0.4" strokeOpacity="0.3" />
                  </g>

                  <g className="corrupt-layer">
                    <path d="M 50 172 Q 47 164 51 156" fill="none" stroke="#c4cdd0" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M 78 148 Q 76 141 80 134" fill="none" stroke="#c4cdd0" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M 100 156 Q 97 144 101 132" fill="none" stroke="#c4cdd0" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M 124 142 Q 122 133 126 124" fill="none" stroke="#c4cdd0" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M 150 168 Q 148 161 152 154" fill="none" stroke="#c4cdd0" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M 64 190 Q 63 185 65 181" fill="none" stroke="#c4cdd0" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.4" />
                    <path d="M 136 180 Q 134 171 138 162" fill="none" stroke="#c4cdd0" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.45" />
                    <path d="M 44 208 Q 42 203 46 198" fill="none" stroke="#c4cdd0" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.4" />
                    <path d="M 158 210 Q 156 205 160 200" fill="none" stroke="#c4cdd0" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
                    <line x1="38" y1="223" x2="162" y2="223" stroke="#c4cdd0" strokeWidth="0.4" strokeOpacity="0.25" />
                    <line className="air-cut" x1="20" y1="120" x2="180" y2="120" stroke="#c4cdd0" strokeWidth="1" strokeOpacity="0.85" />
                    <line className="air-cut air-tick" x1="20" y1="115" x2="20" y2="125" stroke="#c4cdd0" strokeWidth="1" strokeOpacity="0.85" />
                    <line className="air-cut air-tick" x1="180" y1="115" x2="180" y2="125" stroke="#c4cdd0" strokeWidth="1" strokeOpacity="0.85" />
                  </g>
                </svg>
              </div>
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
