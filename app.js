const { useState } = React;

function App() {

    const [page, setPage] = useState("home");

    return (
        <div>

            <Navbar setPage={setPage} />

            {page === "home" && (
                <Home setPage={setPage} />
            )}

            {page === "events" && (
                <Events setPage={setPage} />
            )}

            {page === "details" && (
                <EventDetails setPage={setPage} />
            )}

            {page === "login" && (
                <Login setPage={setPage} />
            )}

            {page === "register" && (
                <Register setPage={setPage} />
            )}

            {page === "dashboard" && (
                <StudentDashboard setPage={setPage} />
            )}

        </div>
    );
}
const { useState } = React;

function App() {

    const [page, setPage] = useState("home");

    return (
        <div>

            <Navbar setPage={setPage} />

            {page === "home" && (
                <Home setPage={setPage} />
            )}

            {page === "events" && (
                <Events setPage={setPage} />
            )}

            {page === "details" && (
                <EventDetails setPage={setPage} />
            )}

            {page === "login" && (
                <Login setPage={setPage} />
            )}

            {page === "register" && (
                <Register setPage={setPage} />
            )}

            {page === "dashboard" && (
                <StudentDashboard setPage={setPage} />
            )}

        </div>
    );
}
function Navbar({ setPage }) {

    return (

        <header className="navbar">

            <div className="logo">
                College Events
            </div>

            <nav>

                <button
                    onClick={() => setPage("home")}
                >
                    Home
                </button>

                <button
                    onClick={() => setPage("events")}
                >
                    Events
                </button>

                <button
                    onClick={() => setPage("login")}
                >
                    Login
                </button>

                <button
                    onClick={() => setPage("register")}
                >
                    Register
                </button>

            </nav>

        </header>
    );
}
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
ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<App />);