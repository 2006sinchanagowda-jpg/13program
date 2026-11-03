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