import React from "react";
import events from "../data/Events";

const Events = () => {
  return (
    <div id="events" className="flex flex-col items-center mt-10 px-4 md:px-0">
      <p className="text-4xl font-bold mt-2">Events</p>
      <div className="flex flex-col items-center space-y-16 py-16 bg-black w-full">
        {events.map(event =>
          <div key={event.id} className="w-full max-w-4xl">
            <a
              href={event.proofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full bg-[#f2f8f9] rounded-2xl p-6 overflow-hidden group hover:cursor-pointer shadow-lg"
            >
              {/* Expanding circle background effect */}
              <div className="absolute z-0 -top-4 -right-4 w-8 h-8 bg-[#331b58] rounded-full scale-110 group-hover:scale-[110] transition-transform duration-500 ease-out origin-center" />

              {/* Go corner button */}
              <div className="absolute -top-2 -right-2 w-11 h-11 bg-[#331b58] rounded-full flex items-center justify-center overflow-hidden z-10">
                <div className="text-white text-2xl">→</div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row items-center text-center md:text-left px-3">
                <div className="relative z-[1] flex-1">
                  <h3 className="text-sm font-bold text-purple-600 group-hover:text-white transition-colors duration-300">
                    Hosted Event
                  </h3>
                  <h2 className="mt-2 text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {event.title}
                  </h2>

                  {/* Date and Venue */}
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                      <span className="font-semibold">Date:</span> {event.date}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                      <span className="font-semibold">Venue:</span>{" "}
                      {event.venue}
                    </p>
                  </div>

                  <p className="mt-4 mr-4 text-sm leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                    {event.description}
                  </p>

                  {/* Button */}
                  <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-[#8b5ee3] transition">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-[1] mt-8 md:mt-0 flex justify-center w-full md:w-auto">
                  <img
                    src={event.imageUrl}
                    alt={`${event.title} Event`}
                    className="w-full max-w-xs rounded-lg h-[200px] object-cover"
                  />
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
