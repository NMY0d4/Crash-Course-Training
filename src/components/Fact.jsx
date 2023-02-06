const Fact = ({ fact, categories: CATEGORIES }) => {
    return (
        <li className="fact">
            <p>
                {fact.text}
                <a className="source" href={fact.source} target="_blank">
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
                <button>👍 {fact.votesInteresting}</button>
                <button>🤯{fact.votesMindblowing}</button>
                <button>⛔️{fact.votesFalse}</button>
            </div>
        </li>
    );
};

export default Fact;
