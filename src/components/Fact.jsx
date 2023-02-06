import { useState } from "react";
import { CATEGORIES } from "../App";
import supabase from "../services/supabase";

const Fact = ({ fact, setFacts }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const isDisputed =
        fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

    async function handleVote(columnName) {
        setIsUpdating(true);
        const { data: updateFact, error } = await supabase
            .from("facts")
            .update({ [columnName]: fact[columnName] + 1 })
            .eq("id", fact.id)
            .select();
        setIsUpdating(false);

        if (!error)
            setFacts((facts) =>
                facts.map((f) => (f.id === fact.id ? updateFact[0] : f))
            );
    }

    return (
        <li className="fact">
            <p>
                {isDisputed ? (
                    <span className="disputed">[⛔DISPUTED]</span>
                ) : null}
                {fact.text}
                <a
                    className="source"
                    href={fact.source}
                    target="_blank"
                    rel="noreferrer"
                >
                    (Source)
                </a>
                <span
                    className="tag"
                    style={{
                        backgroundColor: CATEGORIES.find(
                            (cat) => cat.name === fact.category
                        ).color,
                    }}
                >
                    {fact.category}
                </span>
            </p>
            <div className="vote-buttons">
                <button
                    onClick={() => handleVote("votesInteresting")}
                    disabled={isUpdating}
                >
                    👍 {fact.votesInteresting}
                </button>
                <button
                    onClick={() => handleVote("votesMindblowing")}
                    disabled={isUpdating}
                >
                    🤯{fact.votesMindblowing}
                </button>
                <button
                    onClick={() => handleVote("votesFalse")}
                    disabled={isUpdating}
                >
                    ⛔️{fact.votesFalse}
                </button>
            </div>
        </li>
    );
};

export default Fact;
