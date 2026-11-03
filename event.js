function Events({ setPage }) {

    const events = [
        {
            id: 1,
            title: "Annual Cultural Fest",
            date: "20 October 2026",
            location: "College Auditorium",
            category: "Cultural"
        },

        {
            id: 2,
            title: "Coding Competition",
            date: "25 October 2026",
            location: "Computer Lab",
            category: "Technical"
        },

        {
            id: 3,
            title: "Sports Day",
            date: "30 October 2026",
            location: "College Ground",
            category: "Sports"
        }
    ];

    return (

        <section className="events-section">

            <h2>Upcoming Events</h2>

            <div className="event-grid">

                {events.map((event) => (

                    <div
                        className="event-card"
                        key={event.id}
                    >

                        <span className="category">
                            {event.category}
                        </span>

                        <h3>
                            {event.title}
                        </h3>

                        <p>
                            📅 {event.date}
                        </p>

                        <p>
                            📍 {event.location}
                        </p>

                        <button
                            className="primary-btn"
                            onClick={() => setPage("details")}
                        >
                            View Details
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
}
function EventDetails({ setPage }) {

    return (

        <section className="details-section">

            <div className="details-card">

                <h2>
                    Annual Cultural Fest
                </h2>

                <p>
                    📅 Date: 20 October 2026
                </p>

                <p>
                    📍 Location: College Auditorium
                </p>

                <p>
                    🎭 Category: Cultural
                </p>

                <p>
                    Join us for the annual college
                    cultural festival featuring
                    music, dance and other activities.
                </p>

                <button
                    className="primary-btn"
                    onClick={() => setPage("login")}
                >
                    Register for Event
                </button>

            </div>

        </section>
    );
}