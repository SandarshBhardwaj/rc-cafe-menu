
"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Destination = "menu" | "trails" | "ai";

type Props = {
  active: Destination;
  onNavigate: (destination: Destination) => void;
};

const destinations = [
  { id: "menu", label: "Menu", icon: "▤" },
  { id: "trails", label: "RC Trails", icon: "⌁" },
  { id: "ai", label: "Ask AI", icon: "···" },
] as const;

export default function BottomDock({
  active,
  onNavigate,
}: Props) {
  const dockRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<
    Partial<Record<Destination, HTMLButtonElement>>
  >({});

  const [slider, setSlider] = useState({
    x: 0,
    width: 0,
    ready: false,
  });

  useLayoutEffect(() => {
    const updatePosition = () => {
      const dock = dockRef.current;
      const button = buttonRefs.current[active];

      if (!dock || !button) return;

      const dockRect = dock.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      setSlider((previous) => ({
        x: buttonRect.left - dockRect.left,
        width: buttonRect.width,
        ready: true,
      }));
    };

    updatePosition();

    const observer = new ResizeObserver(updatePosition);

    if (dockRef.current) {
      observer.observe(dockRef.current);
    }

    Object.values(buttonRefs.current).forEach((button) => {
      if (button) observer.observe(button);
    });

    window.addEventListener("resize", updatePosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePosition);
    };
  }, [active]);

  return (
    <nav
      ref={dockRef}
      className="glass-dock"
      aria-label="Main navigation"
    >
      <span
        className="dock-slider"
        aria-hidden="true"
        style={{
          width: slider.width,
          transform: `translateX(${slider.x}px)`,
          opacity: slider.ready ? 1 : 0,
        }}
      />

      {destinations.map((item) => (
        <button
          key={item.id}
          ref={(node) => {
            if (node) {
              buttonRefs.current[item.id] = node;
            } else {
              delete buttonRefs.current[item.id];
            }
          }}
          type="button"
          className={`dock-item ${
            active === item.id ? "active" : ""
          }`}
          aria-current={active === item.id ? "page" : undefined}
          onClick={() => onNavigate(item.id)}
        >
          <span className="dock-icon" aria-hidden="true">
            {item.icon}
          </span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
