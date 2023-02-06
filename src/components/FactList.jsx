import { CATEGORIES } from "../App";
import Fact from "./Fact";

const FactList = ({ facts }) => {
    // TEMPORARY
    return (
        <section>
            <ul className="facts-list">
                {facts.map((fact) => (
                    <Fact key={fact.id} fact={fact} categories={CATEGORIES} />
                ))}
            </ul>
        </section>
    );
};

export default FactList;
