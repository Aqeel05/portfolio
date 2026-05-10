import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/firstimage.jpg";
import cosmosImage from "@assets/secondimage.jpg";

const BRUSH_MIN = 8;
const BRUSH_MAX = 80;
const FADE_SPEED = 0.04;
const SCALE = 0.5;

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function ContentLayer() {
  return (
    <div className="flex flex-col h-full p-6 sm:p-10 md:p-14">
      <div className="flex items-start justify-between flex-wrap gap-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-serif leading-[0.9] tracking-tight text-white/70 transition-colors duration-300">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light opacity-70">S.A.</span>
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mt-1">Aljunied</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-4 sm:gap-5"
        >
          <Link href="/accolades">
            <span
              className="inline-block text-sm sm:text-base md:text-lg font-sans tracking-widest uppercase border-b pb-1 transition-colors duration-300 text-white border-white/50"
              data-testid="link-accolades"
            >
              Accolades
            </span>
          </Link>
          <Link href="/contact">
            <span
              className="inline-flex items-center gap-1.5 text-white/60 transition-colors duration-300"
              data-testid="link-contact"
              aria-label="Send a message"
            >
              <EmailIcon />
            </span>
          </Link>
        </motion.div>
      </div>
      <div className="mt-auto flex flex-col items-center gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg font-sans tracking-[0.3em] uppercase transition-colors duration-300 text-white/40"
          data-testid="text-tagline"
        >
          Engineer &middot; Investor &middot; Economist
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 right-6 sm:bottom-14 sm:right-10 md:bottom-20 md:right-14 flex items-center gap-5"
      >
        <a
          href="https://www.instagram.com/aqeel._.05"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 text-white/40"
          data-testid="link-instagram"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://x.com/aqeel_thepro"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 text-white/40"
          data-testid="link-twitter"
          aria-label="X / Twitter"
        >
          <TwitterIcon />
        </a>
      </motion.div>
    </div>
  );
}

function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const check = () => {
      setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    check();
    window.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch") setIsTouch(true);
    }, { once: true });
  }, []);
  return isTouch;
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridCanvasRef = useRef<HTMLCanvasElement>(null);
  const brushCanvasRef = useRef<HTMLCanvasElement>(null);
  const revealCanvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: -300, y: -300 });
  const smoothPos = useRef({ x: -300, y: -300 });
  const prevPos = useRef({ x: -300, y: -300 });
  const animFrameRef = useRef<number>(0);
  const ringOpacity = useRef(0);
  const hasContent = useRef(false);
  const cosmosImg = useRef<HTMLImageElement | null>(null);
  const staleFrames = useRef(0);
  const isTouchActive = useRef(false);
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    document.title = "S.A. Aljunied - Engineer, Investor, Economist";
    const img = new Image();
    img.src = cosmosImage;
    img.onload = () => { cosmosImg.current = img; };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      cursorPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      cursorPos.current = { x: -300, y: -300 };
    };
    const handleTouchStart = (e: TouchEvent) => {
      isTouchActive.current = true;
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      cursorPos.current = { x, y };
      smoothPos.current = { x, y };
      prevPos.current = { x, y };
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const rect = container.getBoundingClientRect();
      cursorPos.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    };
    const handleTouchEnd = () => {
      isTouchActive.current = false;
      cursorPos.current = { x: -300, y: -300 };
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);
    container.addEventListener("touchcancel", handleTouchEnd);

    let lastTime = performance.now();
    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.667, 3);
      lastTime = time;

      const lerpVal = isTouchActive.current ? 0.15 : 0.07;
      smoothPos.current.x += (cursorPos.current.x - smoothPos.current.x) * lerpVal;
      smoothPos.current.y += (cursorPos.current.y - smoothPos.current.y) * lerpVal;
      const sx = smoothPos.current.x;
      const sy = smoothPos.current.y;
      const dx = sx - prevPos.current.x;
      const dy = sy - prevPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const isMoving = speed > 1.5;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${sx - 3}px, ${sy - 3}px)`;
      }
      const targetRingOpacity = isMoving ? 1 : 0;
      ringOpacity.current += (targetRingOpacity - ringOpacity.current) * 0.08 * dt;
      if (ringOpacity.current < 0.01) ringOpacity.current = 0;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate(${sx - 16}px, ${sy - 16}px)`;
        cursorRingRef.current.style.opacity = String(ringOpacity.current);
      }

      const rect = container.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const parallaxX = (sx - cx) * 0.008;
      const parallaxY = (sy - cy) * 0.008;

      const contentEls = container.querySelectorAll("[data-parallax-content]") as NodeListOf<HTMLElement>;
      contentEls.forEach((el) => {
        el.style.transform = `translate(${-parallaxX}px, ${-parallaxY}px)`;
      });
      const bgEl = container.querySelector("[data-parallax-bg]") as HTMLElement | null;
      if (bgEl) {
        bgEl.style.transform = `translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px) scale(1.02)`;
      }

      const brushCanvas = brushCanvasRef.current;
      const revealCanvas = revealCanvasRef.current;
      const bw = Math.round(rect.width * SCALE);
      const bh = Math.round(rect.height * SCALE);

      if (brushCanvas && revealCanvas) {
        const bctx = brushCanvas.getContext("2d");
        const rctx = revealCanvas.getContext("2d");
        if (bctx && rctx) {
          if (brushCanvas.width !== bw || brushCanvas.height !== bh) {
            brushCanvas.width = bw;
            brushCanvas.height = bh;
          }
          if (revealCanvas.width !== rect.width || revealCanvas.height !== rect.height) {
            revealCanvas.width = rect.width;
            revealCanvas.height = rect.height;
          }

          if (hasContent.current) {
            bctx.globalCompositeOperation = "destination-out";
            bctx.fillStyle = `rgba(0, 0, 0, ${FADE_SPEED * dt})`;
            bctx.fillRect(0, 0, bw, bh);
            bctx.globalCompositeOperation = "source-over";
            staleFrames.current++;
            if (staleFrames.current % 60 === 0) {
              const imgData = bctx.getImageData(0, 0, bw, bh);
              const d = imgData.data;
              let anyVisible = false;
              for (let i = 3; i < d.length; i += 4) {
                if (d[i] > 0 && d[i] < 8) {
                  d[i] = 0;
                } else if (d[i] >= 8) {
                  anyVisible = true;
                }
              }
              bctx.putImageData(imgData, 0, 0);
              if (!anyVisible) {
                hasContent.current = false;
                staleFrames.current = 0;
              }
            }
          }

          if (isMoving && sx > 0 && sy > 0) {
            const brushSize = BRUSH_MIN + (BRUSH_MAX - BRUSH_MIN) * Math.min(1, speed / 12);
            const psx = prevPos.current.x * SCALE;
            const psy = prevPos.current.y * SCALE;
            const csx = sx * SCALE;
            const csy = sy * SCALE;
            const sdx = csx - psx;
            const sdy = csy - psy;
            const dist = Math.sqrt(sdx * sdx + sdy * sdy);
            const baseR = brushSize * SCALE;
            const steps = Math.max(1, Math.floor(dist / Math.max(1, baseR * 0.25)));
            bctx.fillStyle = "white";
            for (let i = 0; i <= steps; i++) {
              const t = steps === 0 ? 1 : i / steps;
              const px = psx + sdx * t;
              const py = psy + sdy * t;
              const variation = 0.5 + Math.random() * 1.0;
              const r = baseR * variation;
              bctx.beginPath();
              bctx.arc(px, py, r, 0, Math.PI * 2);
              bctx.fill();
            }
            hasContent.current = true;
            staleFrames.current = 0;
          }

          if (hasContent.current && cosmosImg.current) {
            rctx.clearRect(0, 0, revealCanvas.width, revealCanvas.height);
            rctx.save();
            rctx.translate(parallaxX * 0.3, parallaxY * 0.3);
            rctx.scale(1.02, 1.02);
            const imgW = cosmosImg.current.naturalWidth;
            const imgH = cosmosImg.current.naturalHeight;
            const canW = revealCanvas.width;
            const canH = revealCanvas.height;
            const imgAspect = imgW / imgH;
            const canAspect = canW / canH;
            let dw: number, dh: number, dxOff: number, dyOff: number;
            if (canAspect > imgAspect) {
              dw = canW;
              dh = canW / imgAspect;
              dxOff = 0;
              dyOff = (canH - dh) / 2;
            } else {
              dh = canH;
              dw = canH * imgAspect;
              dxOff = (canW - dw) / 2;
              dyOff = 0;
            }
            rctx.drawImage(cosmosImg.current, dxOff, dyOff, dw, dh);
            rctx.restore();
            rctx.globalCompositeOperation = "destination-in";
            rctx.drawImage(brushCanvas, 0, 0, bw, bh, 0, 0, canW, canH);
            rctx.globalCompositeOperation = "source-over";
            revealCanvas.style.visibility = "visible";
          } else {
            revealCanvas.style.visibility = "hidden";
          }
        }
      }

      prevPos.current = { x: sx, y: sy };

      const gridCanvas = gridCanvasRef.current;
      if (gridCanvas) {
        const ctx = gridCanvas.getContext("2d");
        if (ctx) {
          if (gridCanvas.width !== rect.width || gridCanvas.height !== rect.height) {
            gridCanvas.width = rect.width;
            gridCanvas.height = rect.height;
          }
          ctx.clearRect(0, 0, rect.width, rect.height);
          const spacing = 60;
          const maxDist = 300;
          for (let gx = 0; gx < rect.width; gx += spacing) {
            for (let gy = 0; gy < rect.height; gy += spacing) {
              const gdx = gx - sx;
              const gdy = gy - sy;
              const dist = Math.sqrt(gdx * gdx + gdy * gdy);
              const influence = Math.max(0, 1 - dist / maxDist);
              const ox = gdx * influence * 0.03;
              const oy = gdy * influence * 0.03;
              const alpha = 0.04 + influence * 0.08;
              ctx.beginPath();
              ctx.arc(gx + ox, gy + oy, 1 + influence * 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.fill();
            }
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("touchcancel", handleTouchEnd);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none ${isTouch ? "" : "cursor-none"}`}
      style={{ height: "100dvh" }}
      data-testid="hero-section"
    >
      <div
        data-parallax-bg
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <canvas ref={brushCanvasRef} style={{ display: "none" }} />
      <canvas
        ref={revealCanvasRef}
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ visibility: "hidden", width: "100%", height: "100%" }}
      />
      <canvas
        ref={gridCanvasRef}
        className="absolute inset-0 pointer-events-none z-[3]"
      />
      <div
        data-parallax-content
        className="absolute inset-0 z-[5] will-change-transform"
        data-testid="text-name"
      >
        <ContentLayer />
      </div>
      {!isTouch && (
        <>
          <div
            ref={cursorDotRef}
            className="absolute pointer-events-none z-[8] will-change-transform mix-blend-difference"
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "white",
              transform: "translate(-300px, -300px)",
            }}
          />
          <div
            ref={cursorRingRef}
            className="absolute pointer-events-none z-[8] will-change-transform mix-blend-difference"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.6)",
              transform: "translate(-300px, -300px)",
              opacity: 0,
            }}
          />
        </>
      )}
    </div>
  );
}
