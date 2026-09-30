import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Trophy,
  Zap,
  ShieldCheck,
  Users,
  Terminal,
  ChevronRight,
} from "lucide-react";

const problems = [
  { title: "Two Sum", difficulty: "Easy", tag: "Array", solved: "82%" },
  { title: "Binary Search", difficulty: "Easy", tag: "Searching", solved: "76%" },
  { title: "Longest Substring", difficulty: "Medium", tag: "Hash Table", solved: "61%" },
  { title: "Merge Intervals", difficulty: "Medium", tag: "Sorting", solved: "48%" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse-dot" />
            THE NEXT GENERATION CODING ARENA
          </div>

          <h1>
            MASTER THE CODE.
            <br />
            <span>WIN THE BATTLE.</span>
          </h1>

          <p>
            Solve challenging problems, sharpen your algorithms,
            compete with other developers and climb the ByteBattles
            leaderboard.
          </p>

          <div className="hero-actions">
            <Link to="/problems" className="primary-btn">
              Start Coding
              <ArrowRight size={18} />
            </Link>

            <a href="#features" className="secondary-btn">
              Explore Platform
            </a>
          </div>

          <div className="hero-terminal">
            <div className="terminal-top">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <span>bytebattles.cpp</span>
            </div>

            <div className="terminal-code">
              <div>
                <span className="line-number">01</span>
                <span className="purple">class</span>{" "}
                <span className="blue">Solution</span> {"{"}
              </div>
              <div>
                <span className="line-number">02</span>
                &nbsp;&nbsp;vector&lt;int&gt;{" "}
                <span className="blue">solve</span>() {"{"}
              </div>
              <div>
                <span className="line-number">03</span>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">return</span>{" "}
                victory;
              </div>
              <div>
                <span className="line-number">04</span>
                &nbsp;&nbsp;{"}"}
              </div>
              <div>
                <span className="line-number">05</span>
                {"}"};
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>120+</strong>
          <span>Problems</span>
        </div>
        <div>
          <strong>4.2K</strong>
          <span>Solutions</span>
        </div>
        <div>
          <strong>850+</strong>
          <span>Developers</span>
        </div>
        <div>
          <strong>99.9%</strong>
          <span>Judge Uptime</span>
        </div>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <div>
            <span className="section-label">WHY BYTEBATTLES</span>
            <h2>Built for people who love to code.</h2>
          </div>
          <p>
            Everything you need to practice competitive programming
            and become a better problem solver.
          </p>
        </div>

        <div className="feature-grid">
          <Feature
            icon={<Code2 />}
            title="Real Coding Problems"
            text="Practice carefully designed algorithmic problems across multiple difficulty levels."
          />

          <Feature
            icon={<Zap />}
            title="Instant Judging"
            text="Submit your solution and get results through our isolated code execution system."
          />

          <Feature
            icon={<ShieldCheck />}
            title="Secure Sandbox"
            text="Every submission runs inside an isolated execution environment."
          />

          <Feature
            icon={<Trophy />}
            title="Compete & Rank"
            text="Track your progress and compete with developers on the leaderboard."
          />
        </div>
      </section>

      <section className="section problems-preview">
        <div className="section-heading">
          <div>
            <span className="section-label">CHALLENGES</span>
            <h2>Featured Problems</h2>
          </div>

          <Link to="/problems" className="view-all">
            View all <ChevronRight size={17} />
          </Link>
        </div>

        <div className="problem-table">
          <div className="problem-header">
            <span>Problem</span>
            <span>Difficulty</span>
            <span>Topic</span>
            <span>Acceptance</span>
          </div>

          {problems.map((problem) => (
            <Link
              to="/problems"
              className="problem-row"
              key={problem.title}
            >
              <div className="problem-name">
                <Terminal size={17} />
                {problem.title}
              </div>

              <span
                className={`difficulty ${problem.difficulty.toLowerCase()}`}
              >
                {problem.difficulty}
              </span>

              <span className="tag">{problem.tag}</span>

              <span>{problem.solved}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <Users size={42} />
          <h2>Ready to enter the arena?</h2>
          <p>Start solving problems and build your coding reputation.</p>
        </div>

        <Link to="/problems" className="primary-btn">
          Enter ByteBattles
          <ArrowRight size={18} />
        </Link>
      </section>

      <footer>
        <div className="logo">
          <div className="logo-icon">
            <Code2 size={18} />
          </div>
          BYTEBATTLES
        </div>

        <span>Built for developers who refuse to stop learning.</span>
      </footer>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}