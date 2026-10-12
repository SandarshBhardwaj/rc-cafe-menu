
"use client";

import { useMemo, useState } from "react";
import MenuItem from "@/components/MenuItems";
import BottomDock from "@/components/BottomDock";
import { categories, menuItems } from "@/data/menu";

export default function Home() {
  const [category, setCategory] = useState("coffee");
  const [search, setSearch] = useState("");
  const [dock, setDock] = useState<"menu" | "trails" | "ai">("menu");

  const visibleItems = useMemo(
    () =>
      menuItems.filter(
        (item) =>
          item.category === category &&
          item.name.toLowerCase().includes(search.toLowerCase())
      ),
    [category, search]
  );

  return (
    <main className="journal">
      <header className="topbar">
        <a href="#menu" className="brand" aria-label="Buried Hobbies home">
          <span className="brand-mark" aria-hidden="true">▲</span>
          <span>
            <strong>BURIED HOBBIES</strong>
            <small>RC CLUB & CAFÉ</small>
          </span>
        </a>

        <label className="search-button">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Find a drink"
            aria-label="Search drinks"
          />
        </label>
      </header>

      <nav className="category-bar" aria-label="Menu categories">
        {categories.map((item) => (
          <button
            key={item.id}
            className={`category-tab ${
              category === item.id ? "selected" : ""
            }`}
            onClick={() => setCategory(item.id)}
            type="button"
            aria-pressed={category === item.id}
          >
            <span className="category-number">{item.number}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <section className="chapter" id="menu">
        <div className="chapter-copy">
          <span className="eyebrow">
            BURIED HOBBIES · FIELD NOTES
          </span>
          <span className="chapter-number">
            {categories.find((item) => item.id === category)?.number} /
          </span>
          <h1>{categories.find((item) => item.id === category)?.label}</h1>
          <p>GOOD FOOD. BIGGER TRAILS.</p>
        </div>

        <div className="terrain-art" aria-hidden="true">
          <span>〰</span>
          <span>⌁</span>
          <span>▲</span>
        </div>
      </section>

      <section className="menu-list" aria-label={`${category} menu`}>
        <div className="section-heading">
          <h2>Choose your fuel.</h2>
          <span>{visibleItems.length} ITEMS</span>
        </div>

        {visibleItems.length ? (
          visibleItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))
        ) : (
          <p className="empty-state">
            No matching drinks in this section.
          </p>
        )}

        <p className="page-note">
          GOOD COFFEE · FURTHER ROUTES
        </p>
      </section>

      <BottomDock
        active={dock}
        onNavigate={(destination) => {
          setDock(destination);
          if (destination === "menu") {
            document.getElementById("menu")?.scrollIntoView({
              behavior: "smooth",
            });
          }
        }}
      />
    </main>
  );
}
