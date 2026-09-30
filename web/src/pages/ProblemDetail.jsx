import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = "http://localhost:8000";

export default function ProblemDetail() {
  const { id } = useParams();

  const [problem, setProblem] = useState(null);
  const [code, setCode] = useState(
`#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write your solution here

    return 0;
}`
  );

  const [language, setLanguage] = useState("cpp");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${API}/problems/${id}`)
      .then((res) => res.json())
      .then((data) => setProblem(data))
      .catch(() => setProblem(null));
  }, [id]);

  const submitCode = async () => {
    setMessage("Submitting...");

    try {
      const response = await fetch(`${API}/submissions/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem_id: id,
          language,
          code,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setMessage("✓ Submission queued successfully!");
    } catch (error) {
      setMessage("Submission could not be sent.");
    }
  };

  if (!problem) {
    return (
      <div className="empty-state">
        <h2>Problem #{id}</h2>
        <p>Problem data is not available yet.</p>
      </div>
    );
  }

  return (
    <main className="problem-detail">
      <section className="problem-description">
        <span className="eyebrow">PROBLEM #{id}</span>

        <h1>{problem.title}</h1>

        <div className="problem-meta">
          <span className={`difficulty ${problem.difficulty}`}>
            {problem.difficulty}
          </span>
        </div>

        <div className="description">
          {problem.description || "Solve this programming challenge."}
        </div>
      </section>

      <section className="editor-section">
        <div className="editor-header">
          <span>YOUR SOLUTION</span>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="c">C</option>
          </select>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck="false"
        />

        <div className="submit-row">
          <span>{message}</span>

          <button onClick={submitCode}>
            Submit →
          </button>
        </div>
      </section>
    </main>
  );
}