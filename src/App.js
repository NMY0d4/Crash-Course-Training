import { Fragment, useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import Counter from "./components/Counter";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";
import "./style.css";

const App = () => {
    const [showForm, setShowForm] = useState(false);
    const appTitle = "Today I Learned";
    return (
        <Fragment>
            {/* HEADER */}
            <header className="header">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                    <h1>{appTitle}</h1>
                </div>
                <button
                    className="btn btn-large btn-open"
                    onClick={() => setShowForm((show) => !show)}
                >
                    Share a fact
                </button>
            </header>
            {showForm ? <NewFactForm /> : null}
            <main className="main">
                <CategoryFilter />
                <FactList />
            </main>
        </Fragment>
    );
};

export default App;
