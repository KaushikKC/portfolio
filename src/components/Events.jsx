import React from "react";
import events from "../data/Events";

const Events = () => {
  return (
    <div
      id="events"
      className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
    >
      <h2 className="text-2xl font-bold mb-5">Events</h2>
      <ul className="space-y-4 list-none pl-0">
        {events.map((event) => (
          <li
            key={event.id}
            className="border-b border-black/10 pb-4 last:border-0"
          >
            <a
              href={event.proofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <span className="font-semibold text-black group-hover:underline">
                {event.title}
              </span>
              <span className="text-black/60 text-sm block mt-1">
                {event.date} · {event.venue}
              </span>
              <p className="text-black/80 text-sm mt-1">{event.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
