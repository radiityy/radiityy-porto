"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TARGET = "welcome.";
const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";
const SCRAMBLE_MS = 900;
const HOLD_MS = 350;
const STORAGE_KEY = "radiityy-intro-seen";

export default function IntroScreen() {
  const [visible, setVisible] = useState(false);
  const [display, setDisplay] = useState(TARGET);

  useEffect(() => {
    let alreadySeen = true;

    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      return;
    }

    setVisible(true);

    const start = performance.now();
    let frame;

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / SCRAMBLE_MS, 1);
      const revealCount = Math.floor(progress * TARGET.length);

      const next = TARGET.split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
        })
        .join("");

      setDisplay(next);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(TARGET);
        window.setTimeout(() => {
          setVisible(false);
          try {
            sessionStorage.setItem(STORAGE_KEY, "1");
          } catch {
            // ignore storage errors (private mode, etc.)
          }
        }, HOLD_MS);
      }
    }

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f3ea]"
        >
          <p className="font-black tracking-[-0.04em] text-[#262017] text-4xl sm:text-5xl">
            {display.split("").map((char, i) => (
              <span
                key={i}
                className={
                  char === TARGET[i] ? "text-[#262017]" : "text-[#b3672c]"
                }
              >
                {char}
              </span>
            ))}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
