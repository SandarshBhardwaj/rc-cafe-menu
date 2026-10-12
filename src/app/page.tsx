"use client";

import { useMemo, useState } from "react";
import MenuItem from "@/components/MenuItems";
import BottomDock from "@/components/BottomDock";
import { categories, menuItems } from "@/data/menu";
import type { MenuCategory } from "@/data/menu";

type MenuGroup = "beverages" | "food";
type Screen = "home" | "menu";

const beverageCategories: MenuCategory[] = [
  "coffee",
  "ice-tea",
  "frappe",
  "shakes",
  "mocktails",
  "aerated-drinks",
];

const foodCategories: MenuCategory[] = [
  "salad",
  "munching",
  "rice-noodle-bowl",
  "wrap-roll",
  "china-town",
  "pizza",
  "pasta",
  "desserts",
];

const categoryDescriptions: Partial<Record<MenuCategory, string>> = {
  coffee: "CLASSIC BREWS FOR EVERY TRAIL",
  "ice-tea": "A COOLER WAY TO TAKE THE LONG WAY",
  frappe: "BLENDED FOR THE DETOUR",
  shakes: "A LITTLE INDULGENCE OFF-ROAD",
  mocktails: "BRIGHT SIPS, BOLDER ROUTES",
  "aerated-drinks": "THE EVERYDAY PIT STOP",
  salad: "FRESH FINDS FROM THE KITCHEN",
  munching: "SMALL BITES. BIG APPETITE.",
  "rice-noodle-bowl": "BOWLS WORTH PULLING OVER FOR",
  "wrap-roll": "WRAPPED UP AND READY TO GO",
  "china-town": "WOK-FIRED FAVOURITES",
  pizza: "A SLICE OF THE GOOD LIFE",
  pasta: "COMFORT, TWIRLED TO PERFECTION",
  desserts: "SAVE ROOM FOR THE SWEET FINISH",
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [menuGroup, setMenuGroup] = useState<MenuGroup>("beverages");
  const [category, setCategory] = useState<MenuCategory>("coffee");
  const [search, setSearch] = useState("");
  const [dock, setDock] = useState<"menu" | "trails" | "ai">("menu");

  const activeCategories = menuGroup === "beverages"
    ? beverageCategories
    : foodCategories;

  const activeCategory = categories.find((item) => item.id === category);
  const normalizedSearch = search.trim().toLowerCase();

  const visibleItems = useMemo(() => {
    if (normalizedSearch) {
      return menuItems.filter((item) => {
        const categoryLabel =
          categories.find((entry) => entry.id === item.category)?.label ?? "";
        return (
          item.name.toLowerCase().includes(normalizedSearch) ||
          categoryLabel.toLowerCase().includes(normalizedSearch)
        );
      });
    }

    return menuItems.filter((item) => item.category === category);
  }, [category, normalizedSearch]);

  const openGroup = (group: MenuGroup) => {
    setMenuGroup(group);
    setSearch("");
    setScreen("menu");
    setDock("menu");
    setCategory(group === "beverages" ? "coffee" : "salad");
  };

  const openCategory = (nextCategory: MenuCategory) => {
    setCategory(nextCategory);
    setSearch("");
    setScreen("menu");
    document.getElementById("menu-content")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goHome = () => {
    setScreen("home");
    setSearch("");
    setDock("menu");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="journal">
      <header className="topbar">
        

<button
  type="button"
  className="brand-home"
  aria-label="Back to home"
  onClick={goHome}
>

  <svg
    viewBox="0 0 24 24"
    width="25"
    height="25"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.8 1.8 11h2.7v10h6v-6.2h3V21h6V11h2.7L12 2.8z" />
  </svg>
</button>


        <label className="search-button">
          <span aria-hidden="true">⌕</span>
          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              if (event.target.value.trim()) setScreen("menu");
            }}
            onFocus={() => {
              if (search.trim()) setScreen("menu");
            }}
            placeholder="Search menu"
            aria-label="Search all food and drinks"
          />
          {search && (
            <button
              type="button"
              className="search-clear"
              aria-label="Clear search"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </label>
      </header>

      {screen === "home" && !search.trim() ? (
        <section className="menu-home" aria-labelledby="cover-title">
          <div className="cover-art">
            <span className="cover-kicker">THE CLUBHOUSE MENU · EST. FOR THE ADVENTUROUS</span>
            <div className="cover-brand">
              <span className="cover-brand-top">BURIED</span>
              <span className="cover-brand-main">HOBBIES</span>
              <span className="cover-brand-sub">RC CLUB & CAFÉ</span>
            </div>
            <div className="cover-rule"><span>♥</span></div>
            <h1 id="cover-title">MENU</h1>
            <p>GOOD FOOD. BIGGER TRAILS.</p>
            <div className="cover-footnote">FIELD NOTES · EST. FOR THE ADVENTUROUS</div>
            <div className="cover-trail-marks" aria-hidden="true">
              <span>♣</span><i>✦</i><span>♣</span>
            </div>
          </div>

          <div className="home-intro">
            <span className="eyebrow">THE CLUBHOUSE TABLE</span>
            <h2>What are we craving?</h2>
            <p>Something to sip. Something to share. Find your next favourite.</p>
          </div>

          <div className="menu-entry-grid">
            <button
              type="button"
              className="menu-entry beverage-entry"
              onClick={() => openGroup("beverages")}
            >
              <span className="entry-index">01 / THE BAR</span>
              <span className="entry-illustration" aria-hidden="true">☕</span>
              <strong>Beverage Menu</strong>
              <small>Coffee, tea, frappes & coolers</small>
              <span className="entry-arrow" aria-hidden="true">↘</span>
            </button>

            <button
              type="button"
              className="menu-entry food-entry"
              onClick={() => openGroup("food")}
            >
              <span className="entry-index">02 / THE KITCHEN</span>
              <span className="entry-illustration food-symbol" aria-hidden="true">♨</span>
              <strong>Food Menu</strong>
              <small>Small bites, hearty plates & sweets</small>
              <span className="entry-arrow" aria-hidden="true">↘</span>
            </button>
          </div>
          <p className="home-signoff">PICK A PATH. WE’LL HANDLE THE FLAVOUR.</p>
        </section>
      ) : (
        <>
          <nav className="menu-switcher" aria-label="Menu type">
            <button
              type="button"
              className={`menu-switch ${menuGroup === "beverages" ? "active" : ""}`}
              onClick={() => openGroup("beverages")}
              aria-pressed={menuGroup === "beverages"}
            >
              <span>01</span> Beverage Menu
            </button>
            <button
              type="button"
              className={`menu-switch ${menuGroup === "food" ? "active" : ""}`}
              onClick={() => openGroup("food")}
              aria-pressed={menuGroup === "food"}
            >
              <span>02</span> Food Menu
            </button>
          </nav>

          <nav className="category-bar" aria-label={`${menuGroup} categories`}>
            {activeCategories.map((id) => {
              const item = categories.find((entry) => entry.id === id);
              if (!item) return null;

              return (
                <button
                  key={item.id}
                  className={`category-tab ${category === item.id && !normalizedSearch ? "selected" : ""}`}
                  onClick={() => openCategory(item.id)}
                  type="button"
                  aria-pressed={category === item.id && !normalizedSearch}
                >
                  <span className="category-number">{item.number}</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          <section className="chapter" id="menu-content">
            <div className="chapter-copy">
              <span className="eyebrow">
                BURIED HOBBIES · FIELD NOTES
              </span>
              <span className="chapter-number">
                {normalizedSearch ? "⌕ /" : `${activeCategory?.number ?? "01"} /`}
              </span>
              <h1>{normalizedSearch ? "Search" : activeCategory?.label}</h1>
              <p>
                {normalizedSearch
                  ? `MATCHES ACROSS THE ${"ENTIRE MENU"}`
                  : categoryDescriptions[category] ?? "GOOD FOOD. BIGGER TRAILS."}
              </p>
            </div>
            <div className="terrain-art" aria-hidden="true">
              <span>〰</span>
              <span>⌁</span>
              <span>▲</span>
            </div>
          </section>

          <section
            className="menu-list"
            aria-label={normalizedSearch ? "Search results across the full menu" : `${activeCategory?.label ?? "Selected"} menu`}
          >
            <div className="section-heading">
              
              <span>{visibleItems.length} ITEMS</span>
            </div>

            {visibleItems.length ? (
              visibleItems.map((item) => {
                const itemCategory = categories.find((entry) => entry.id === item.category);
                const showGroupLabel = normalizedSearch;

                return (
                  <div className="search-result-wrap" key={item.id}>
                    {showGroupLabel && (
                      <button
                        type="button"
                        className="result-category"
                        onClick={() => {
                          setMenuGroup(beverageCategories.includes(item.category) ? "beverages" : "food");
                          setCategory(item.category);
                          setSearch("");
                        }}
                      >
                        {itemCategory?.label ?? "Menu"} <span>↗</span>
                      </button>
                    )}
                    <MenuItem item={item} />
                  </div>
                );
              })
            ) : (
              <p className="empty-state">
                No matches yet. Try another name or browse a category.
              </p>
            )}

            <p className="page-note">
              GOOD COFFEE · FURTHER ROUTES
            </p>
          </section>
        </>
      )}

      <BottomDock
        active={dock}
        onNavigate={(destination) => {
          setDock(destination);
          if (destination === "menu") {
            goHome();
          }
        }}
      />
    </main>
  );
}
