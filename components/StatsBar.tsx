"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ target, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const stats = [
  {
    target: 300,
    suffix: "+",
    staticValue: null,
    label: "zufriedene Schüler",
  },
  {
    target: 100,
    suffix: "%",
    staticValue: null,
    label: "positive Reviews",
  },
  {
    target: 0,
    suffix: "",
    staticValue: "Immortal+",
    label: "Coaches",
  },
];

export default function StatsBar() {
  return (
    <section className="relative bg-[#0c0c0c] border-y border-white/5 py-14">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6EE800]/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/8" : ""
              }`}
            >
              <div
                className="text-4xl md:text-5xl font-black"
                style={{
                  fontFamily: "Rajdhani, sans-serif",
                  background: "linear-gradient(135deg, #6EE800, #A3F000)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.staticValue ? (
                  <span>{stat.staticValue}</span>
                ) : (
                  <Counter target={stat.target} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-white font-semibold mt-2 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
