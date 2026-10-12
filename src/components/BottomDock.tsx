
"use client";

type Props = {
  active: "menu" | "trails" | "ai";
  onNavigate: (destination: "menu" | "trails" | "ai") => void;
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
  return (
    <nav className="glass-dock" aria-label="Main navigation">
      {destinations.map((item) => (
        <button
          key={item.id}
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
