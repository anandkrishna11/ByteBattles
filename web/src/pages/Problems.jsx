import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = "http://localhost:8000";

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/problems/?page=1&limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setProblems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = problems.filter((p) => {
    const matchesSearch =
      p.title?.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty =
      difficulty === "ALL" || p.difficulty === difficulty;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <main className="problems-page">
      <section className="problems-hero">
        <div className="eyebrow">BYTEBATTLES / CHALLENGES</div>

        <h1>
          Solve.
          <br />
          <span>Compete.</span>
        </h1>

        <p>
          Sharpen your programming skills with algorithmic challenges
          designed for competitive programmers.
        </p>
      </section>

      <section className="problem-container">
        <div className="problem-toolbar">
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="difficulty-buttons">
            {["ALL", "EASY", "MEDIUM", "HARD"].map((level) => (
              <button
                key={level}
                className={difficulty === level ? "active" : ""}
                onClick={() => setDifficulty(level)}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="empty-state">
            <h2>Loading problems...</h2>
          </div>
        ) : filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">&lt;/&gt;</div>
            <h2>No problems found</h2>
            <p>
              Problems will appear here once they are available from the
              ByteBattles API.
            </p>
          </div>
        ) : (
          <div className="problem-list">
            {filtered.map((problem) => (
              <Link
                to={`/problems/${problem.id}`}
                className="problem-card"
                key={problem.id}
              >
                <div className="problem-number">
                  #{problem.id}
                </div>

                <div className="problem-info">
                  <h3>{problem.title}</h3>

                  <div className="problem-meta">
                    <span className={`difficulty ${problem.difficulty}`}>
                      {problem.difficulty}
                    </span>

                    {problem.tags?.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="solved">
                  {problem.accepted_submissions ?? 0} solved
                </div>

                <span className="arrow">→</span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}