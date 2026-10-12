
"use client";

import { useState } from "react";
import type { MenuItemData } from "@/data/menu";

type Props = {
  item: MenuItemData;
};

export default function MenuItem({ item }: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((previous) => !previous);
  };

  return (
    <article
      className={`menu-item${expanded ? " expanded" : ""}`}
      onClick={toggleExpanded}
      onKeyDown={(event) => {
        if (
          event.target === event.currentTarget &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          toggleExpanded();
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
    >
      <button
        className="drink-illustration"
        type="button"
        aria-label={`View details for ${item.name}`}
        onClick={(event) => {
          event.stopPropagation();
          toggleExpanded();
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt=""
            width={62}
            height={68}
            loading="lazy"
          />
        ) : (
          <span aria-hidden="true">☕</span>
        )}
      </button>

      <div className="drink-info">
        <div className="drink-heading">
          <h3>{item.name}</h3>
          <span className="drink-price">₹{item.price}</span>
        </div>

        {!expanded && item.tags && item.tags.length > 0 && (
          <div className="drink-tags">
            {item.tags.join(" · ")}
          </div>
        )}

        {expanded && (item.description || (item.ingredients && item.ingredients.length > 0)) && (
          <div className="drink-details">
            {item.description && <p>{item.description}</p>}

            {item.ingredients && item.ingredients.length > 0 && (
              <p>
                <strong>Ingredients:</strong>{" "}
                {item.ingredients.join(", ")}
              </p>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        className="item-expand"
        aria-label={`${expanded ? "Hide" : "Show"} details for ${item.name}`}
        aria-expanded={expanded}
        onClick={(event) => {
          event.stopPropagation();
          toggleExpanded();
        }}
      >
        {expanded ? "−" : "+"}
      </button>
    </article>
  );
}
