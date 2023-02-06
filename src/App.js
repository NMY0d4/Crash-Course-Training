import { Fragment } from "react";
import CategoryFilter from "./components/Category";
import FactList from "./components/FactList";
import NewFactForm from "./components/NewFactForm";
import "./style.css";

const App = () => {
    const appTitle = "Today I Learned";
    return (
        <Fragment>
            {/* HEADER */}
            <header className="header">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                    <h1>{appTitle}</h1>
                </div>
                <button className="btn btn-large btn-open">Share a fact</button>
            </header>
            <NewFactForm />
            <main className="main">
                <CategoryFilter />
                <FactList />
            </main>
        </Fragment>
    );
};

export default App;
