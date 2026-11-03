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