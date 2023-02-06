import { Fragment } from "react";
import CategoryFilter from "./components/Category";
import NewFactForm from "./components/NewFactForm";
import "./style.css";

const App = () => {
    return (
        <Fragment>
            {/* HEADER */}
            <header className="header">
                <div className="logo">
                    <img src="logo.png" alt="logo" />
                    <h1>Today I Learned</h1>
                </div>
                <button className="btn btn-large btn-open">Share a fact</button>
            </header>

            <NewFactForm />
            <CategoryFilter />
        </Fragment>
    );
};

export default App;
