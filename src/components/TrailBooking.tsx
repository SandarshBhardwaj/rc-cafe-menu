"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Track = "training" | "racing";
type TimeWindow = "morning" | "afternoon" | "evening";

function localDateString(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function TrailBooking() {
  const [track, setTrack] = useState<Track>("training");
  const [date, setDate] = useState("");
  const [timeWindow, setTimeWindow] = useState<TimeWindow | "">("");
  const [guestName, setGuestName] = useState("");
  const [guestContact, setGuestContact] = useState("");
  const [reviewOpen, setReviewOpen] = useState(false);

  const [today, setToday] = useState("");
  const trackName = track === "training" ? "Training Track" : "Racing Track";
 useEffect(() => {
  const currentDate = localDateString(new Date());
  setDate(currentDate);
  setToday(currentDate);
}, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReviewOpen(true);
  }

  return (
    <section className="trail-booking" aria-labelledby="trails-title">
      <div className="trail-cover">
        <span className="eyebrow">BURIED HOBBIES · TRACK BOOKING</span>
        <span className="trail-index">FIELD NOTE 02 / RC TRAILS</span>
        <h1 id="trails-title">Choose your trail.</h1>
        <p>Two tracks. Different ways to play. Pick your route and request a session.</p>
        <div className="trail-cover-mark" aria-hidden="true">⌁</div>
      </div>

      <div className="trail-content">
        <div className="trail-section-heading">
          <span className="eyebrow">01 / PICK A TRACK</span>
          <p>Where do you want to drive?</p>
        </div>

        <div className="trail-track-grid" role="group" aria-label="Choose an RC track">
          <button
            type="button"
            className={`trail-track-card training-track${track === "training" ? " is-selected" : ""}`}
            aria-pressed={track === "training"}
            onClick={() => {
              setTrack("training");
              setReviewOpen(false);
            }}
          >
            <span className="trail-card-index">01 / LEARN THE LINES</span>
            <span className="trail-track-symbol" aria-hidden="true">⌁</span>
            <strong>Training Track</strong>
            <span className="trail-track-description">A place to learn the controls, practise turns, and build confidence.</span>
            <span className="trail-card-foot">BEGINNER FRIENDLY · DETAILS TO CONFIRM</span>
            <span className="trail-select-mark" aria-hidden="true">{track === "training" ? "✓" : "+"}</span>
          </button>

          <button
            type="button"
            className={`trail-track-card racing-track${track === "racing" ? " is-selected" : ""}`}
            aria-pressed={track === "racing"}
            onClick={() => {
              setTrack("racing");
              setReviewOpen(false);
            }}
          >
            <span className="trail-card-index">02 / TAKE THE FAST LINE</span>
            <span className="trail-track-symbol" aria-hidden="true">↗</span>
            <strong>Racing Track</strong>
            <span className="trail-track-description">The larger circuit for faster runs, sharper turns, and race-day energy.</span>
            <span className="trail-card-foot">LARGER CIRCUIT · DETAILS TO CONFIRM</span>
            <span className="trail-select-mark" aria-hidden="true">{track === "racing" ? "✓" : "+"}</span>
          </button>
        </div>

        <form className="trail-form" onSubmit={handleSubmit}>
          <div className="trail-section-heading">
            <span className="eyebrow">02 / FIND YOUR TIME</span>
            <p>When should we save you a spot?</p>
          </div>

          <label className="trail-field">
            <span>Preferred day</span>
            <input
              type="date"
              value={date}
              min={today}
              onChange={(event) => {
                setDate(event.target.value);
                setReviewOpen(false);
              }}
              required
            />
          </label>

          <fieldset className="trail-time-fieldset">
            <legend>Preferred time window</legend>
            <div className="trail-time-options">
              {([
                ["morning", "Morning", "EARLIER IN THE DAY"],
                ["afternoon", "Afternoon", "MIDDAY SESSION"],
                ["evening", "Evening", "LATER IN THE DAY"],
              ] as const).map(([value, label, note]) => (
                <button
                  key={value}
                  type="button"
                  className={`trail-time-option${timeWindow === value ? " is-selected" : ""}`}
                  aria-pressed={timeWindow === value}
                  onClick={() => {
                    setTimeWindow(value);
                    setReviewOpen(false);
                  }}
                >
                  <strong>{label}</strong>
                  <small>{note}</small>
                </button>
              ))}
            </div>
            <p className="trail-note">Exact opening hours and session slots will be added when the cafe confirms them. These are preferred time windows, not live availability.</p>
          </fieldset>

          <div className="trail-section-heading trail-guest-heading">
            <span className="eyebrow">03 / YOUR DETAILS</span>
            <p>Who are we expecting?</p>
          </div>

          <label className="trail-field">
            <span>Name</span>
            <input
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={guestName}
              onChange={(event) => {
                setGuestName(event.target.value);
                setReviewOpen(false);
              }}
              required
            />
          </label>

          <label className="trail-field">
            <span>Phone or email</span>
            <input
              type="text"
              autoComplete="tel"
              placeholder="How can the team reach you?"
              value={guestContact}
              onChange={(event) => {
                setGuestContact(event.target.value);
                setReviewOpen(false);
              }}
              required
            />
          </label>

          <button className="trail-submit" type="submit">
            Review session <span aria-hidden="true">↗</span>
          </button>
        </form>

        {reviewOpen && (
          <div className="trail-review" role="status" aria-live="polite">
            <span className="eyebrow">YOUR SESSION SUMMARY</span>
            <h2>{trackName}</h2>
            <p><strong>Day:</strong> {new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
            <p><strong>Preferred time:</strong> {timeWindow ? timeWindow.charAt(0).toUpperCase() + timeWindow.slice(1) : "Not selected yet"}</p>
            <p><strong>Name:</strong> {guestName}</p>
            <p><strong>Contact:</strong> {guestContact}</p>
            <p className="trail-note">This is a front-end preview only. No booking request has been sent and no slot is confirmed yet.</p>
          </div>
        )}

        <p className="trail-footer-note">GOOD DRIVES · GOOD COMPANY · FURTHER ROUTES</p>
      </div>
    </section>
  );
}
