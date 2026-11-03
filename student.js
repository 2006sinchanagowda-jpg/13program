function StudentDashboard({ setPage }) {

    return (

        <section className="dashboard">

            <h2>
                Student Dashboard
            </h2>

            <div className="dashboard-grid">

                <div className="dashboard-card">

                    <h3>My Events</h3>

                    <p>
                        View events you have registered for.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => setPage("events")}
                    >
                        View My Events
                    </button>

                </div>


                <div className="dashboard-card">

                    <h3>Register Event</h3>

                    <p>
                        Explore and register for events.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => setPage("events")}
                    >
                        Register Event
                    </button>

                </div>

            </div>

        </section>
    );
}