function Home({ setPage }) {

    return (

        <section className="hero">

            <div className="hero-content">

                <h1>
                    College Event Management System
                </h1>

                <p>
                    Discover and register for
                    exciting college events.
                </p>

                <button
                    className="primary-btn"
                    onClick={() => setPage("events")}
                >
                    Explore Events
                </button>

            </div>

        </section>
    );
}