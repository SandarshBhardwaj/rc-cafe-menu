"use client";

import type { MenuItemData } from "@/data/menu";

export type CartLine = {
  item: MenuItemData;
  quantity: number;
};

type Props = {
  items: CartLine[];
  open: boolean;
  dockExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
  onIncrease: (item: MenuItemData) => void;
  onDecrease: (itemId: string) => void;
};

export default function CartPanel({
  items,
  open,
  dockExpanded,
  onToggle,
  onClose,
  onIncrease,
  onDecrease,
}: Props) {
  const count = items.reduce((sum, line) => sum + line.quantity, 0);
  const total = items.reduce(
    (sum, line) => sum + line.item.price * line.quantity,
    0,
  );
  const bottom = dockExpanded ? 106 : 82;

  if (count === 0 && !open) return null;

  return (
    <>
      <button
        type="button"
        className="cart-fab"
        style={{ bottom: `calc(${bottom}px + env(safe-area-inset-bottom))` }}
        onClick={onToggle}
        aria-expanded={open}
        aria-label={`Open cart, ${count} items, total ₹${total}`}
      >
        <span className="cart-fab-icon" aria-hidden="true">▣</span>
        <span className="cart-fab-copy">
          <strong>Cart</strong>
          <small>{count} {count === 1 ? "item" : "items"} · ₹{total}</small>
        </span>
        <span className="cart-count">{count}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            className="cart-backdrop"
            aria-label="Close cart"
            onClick={onClose}
          />
          <section
            className="cart-panel"
            style={{ bottom: `calc(${bottom + 68}px + env(safe-area-inset-bottom))` }}
            aria-label="Your order"
          >
            <header className="cart-header">
              <div>
                <span className="cart-eyebrow">THE CLUBHOUSE ORDER</span>
                <h2>Your cart <span>({count})</span></h2>
              </div>
              <button type="button" className="cart-close" onClick={onClose} aria-label="Close cart">×</button>
            </header>

            <div className="cart-lines">
              {items.length === 0 ? (
                <p className="cart-empty">Your cart is waiting for something good.</p>
              ) : items.map(({ item, quantity }) => (
                <article className="cart-line" key={item.id}>
                  <div className="cart-line-info">
                    <strong>{item.name}</strong>
                    <span>₹{item.price} each</span>
                  </div>
                  <div className="cart-quantity">
                    <button type="button" onClick={() => onDecrease(item.id)} aria-label={`Remove one ${item.name}`}>−</button>
                    <span>{quantity}</span>
                    <button type="button" onClick={() => onIncrease(item)} aria-label={`Add one ${item.name}`}>+</button>
                  </div>
                  <strong className="cart-line-total">₹{item.price * quantity}</strong>
                </article>
              ))}
            </div>

            <div className="cart-total-row">
              <span>Subtotal</span>
              <strong>₹{total}</strong>
            </div>
            <p className="cart-tax-note">Final bill and applicable taxes will be confirmed at the counter.</p>

            <div className="cart-actions">
              <button
                type="button"
                className="cart-print-button"
                disabled={!items.length}
                onClick={() => window.print()}
              >
                Print bill
              </button>
              <button
                type="button"
                className="cart-pay-button"
                disabled={!items.length}
                onClick={() => window.alert("Your order summary is ready. Please show this cart at the counter to complete payment.")}
              >
                Pay at counter
              </button>
            </div>

            <div className="cart-print-area">
              <h1>Buried Hobbies</h1>
              <p>RC CLUB & CAFÉ · ORDER SUMMARY</p>
              <hr />
              {items.map(({ item, quantity }) => (
                <div className="print-line" key={item.id}>
                  <span>{item.name} × {quantity}</span>
                  <strong>₹{item.price * quantity}</strong>
                </div>
              ))}
              <hr />
              <div className="print-line print-total"><strong>Total</strong><strong>₹{total}</strong></div>
              <p className="print-footer">Thank you for visiting Buried Hobbies.</p>
            </div>
          </section>
        </>
      )}
    </>
  );
}
