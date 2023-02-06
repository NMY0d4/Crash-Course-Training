import { Fragment, useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import "./style.css";

const App = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <Fragment>
            <Header showForm={showForm} setShowForm={setShowForm} />
            {showForm ? <NewFactForm /> : null}

            <main className="main">
                <CategoryFilter />
                <FactList />
            </main>
        </Fragment>
    );
};

export default App;
