import React, { useEffect, useRef } from "react";

const Loader = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      leftRef.current.classList.add("open");
      rightRef.current.classList.add("open");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="maharani-loader">

      {/* ✅ CSS HERE */}
     <style>{`
  #maharani-loader {
    position: fixed;
    inset: 0;
    background: #000;
    overflow: hidden;
    z-index: 9999;
    font-family: 'Cormorant Garamond', serif;
  }

  /* CURTAINS */
  .curtain-left,
  .curtain-right {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 2;

    background: linear-gradient(
      to right,
      #3b0000,
      #7a0000 20%,
      #a30000 40%,
      #7a0000 60%,
      #3b0000
    );

    transition: all 1.8s ease-in-out;
  }

  /* Fold texture */
  .curtain-left::before,
  .curtain-right::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to right,
      rgba(0,0,0,0.25) 0px,
      rgba(0,0,0,0.25) 8px,
      transparent 8px,
      transparent 18px
    );
    opacity: 0.4;
  }

  .curtain-left {
    left: 0;
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }

  .curtain-right {
    right: 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  }

  /* OPEN ANIMATION */
  .curtain-left.open {
    transform: translateX(-100%) scaleX(0.65) skewY(-5deg);
    clip-path: polygon(0 0, 100% 0, 60% 100%, 0% 100%);
  }

  .curtain-right.open {
    transform: translateX(100%) scaleX(0.65) skewY(5deg);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 100%);
  }

  /* TOP ARC (responsive height) */
  #maharani-loader::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 14vh; /* responsive */
    width: 100%;
    background: radial-gradient(circle at 50% 0%, #a30000 40%, #3b0000 100%);
    border-bottom-left-radius: 50% 100%;
    border-bottom-right-radius: 50% 100%;
    z-index: 3;
  }

  /* CENTER CONTENT */
  .loader-emblem {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #d4b483;
    z-index: 5;
    width: 90%;
    max-width: 400px;
  }

  /* RESPONSIVE TEXT */
  .loader-crown {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    display: block;
    margin-bottom: 10px;
    animation: fadeUp 1s ease forwards;
  }

  .loader-line {
    width: clamp(40px, 8vw, 80px);
    height: 1px;
    background: #d4b483;
    margin: 10px auto;
    opacity: 0;
    animation: fadeUp 1s ease forwards;
  }

  .loader-line.delay {
    animation-delay: 1s;
  }

  .loader-welcome {
    font-size: clamp(0.7rem, 2vw, 1rem);
    letter-spacing: 0.25em;
    opacity: 0;
    animation: fadeUp 1s ease 0.3s forwards;
  }

  .loader-name {
    font-size: clamp(1.2rem, 5vw, 2rem);
    letter-spacing: 0.3em;
    font-weight: 600;
    opacity: 0;
    animation: fadeUp 1s ease 0.6s forwards;
  }

  .loader-sub {
    font-size: clamp(0.65rem, 2vw, 0.9rem);
    font-style: italic;
    margin-top: 8px;
    opacity: 0;
    animation: fadeUp 1s ease 1.2s forwards;
  }

  /* SMALL SCREEN FIXES */
  @media (max-width: 480px) {
    .curtain-left.open {
      transform: translateX(-100%) scaleX(0.7) skewY(-4deg);
    }

    .curtain-right.open {
      transform: translateX(100%) scaleX(0.7) skewY(4deg);
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

      {/* Curtains */}
      <div ref={leftRef} className="curtain-left"></div>
      <div ref={rightRef} className="curtain-right"></div>

      {/* Center Content */}
      <div className="loader-emblem">
        <span className="loader-crown">👑</span>

        <div className="loader-line" />
        <div className="loader-welcome">Welcome to</div>
        <div className="loader-name">Zephyr 2026</div>
        <div className="loader-line delay" />

        <div className="loader-sub">
          Pritilata Chhatrinibas
        </div>
      </div>
    </div>
  );
};

export default Loader;