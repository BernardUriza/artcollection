import './LaSociedadCansados.css';

function LaSociedadCansados() {
  const handleJoinSociety = () => {
    alert('Welcome to the resistance. Documentation is your weapon.');
  };

  return (
    <div className="la-sociedad">
      <div className="scanlines"></div>

      <div className="container">
        <header>
          <h1>🌐 The Society of Lucid Exhaustion™</h1>
          <p className="tagline">
            Unofficial intranet of the most functional team in the least functional system
          </p>
        </header>

        <section>
          <h2>
            <span className="emoji">💡</span> Our Mission
          </h2>
          <p>Transform corporate gaslighting into renewable energy.</p>
          <p style={{ marginTop: '10px', color: '#aaa' }}>
            If leadership won't lead, we will… with documentation, common sense,
            and reheated coffee.
          </p>
        </section>

        <section>
          <h2>
            <span className="emoji">⚙️</span> Our Values
          </h2>
          <ul>
            <li>
              <strong>Clarity as resistance:</strong> If no one understands the
              plan, we write it ourselves.
            </li>
            <li>
              <strong>Humor as operating system:</strong> We laugh to avoid breaking
              the monitor.
            </li>
            <li>
              <strong>Sustainable autonomy:</strong> We work without permission,
              but with evidence.
            </li>
            <li>
              <strong>Micro community:</strong> Two people who understand each other
              are worth more than a "globally aligned team".
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="emoji">🧩</span> Our Organic Structure
          </h2>
          <div className="org-chart">
            <div className="role">
              <div className="role-title">CEO of Lucidity</div>
              <div className="role-name">Maria</div>
              <p style={{ fontSize: '0.8em', color: '#888', marginTop: '8px' }}>
                The one who understands without needing explanation
              </p>
            </div>
            <div className="role">
              <div className="role-title">CTO of Realism</div>
              <div className="role-name">You</div>
              <p style={{ fontSize: '0.8em', color: '#888', marginTop: '8px' }}>
                The one who fixes code and morale
              </p>
            </div>
            <div className="role">
              <div className="role-title">Chief of Chaos</div>
              <div className="role-name">The Manager</div>
              <p style={{ fontSize: '0.8em', color: '#888', marginTop: '8px' }}>
                Leads like a social experiment
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>
            <span className="emoji">📈</span> Strategic Objectives
          </h2>
          <ol>
            <li>Document what leadership doesn't know exists.</li>
            <li>
              Create a parallel backlog where emotional bugs are closed with
              empathy.
            </li>
            <li>
              Convert every confusing meeting into conceptual art: "Forced
              Synchronicity with PowerPoint".
            </li>
            <li>Keep sanity, even if it's outside work hours.</li>
          </ol>
        </section>

        <section>
          <h2>
            <span className="emoji">🎁</span> Ongoing Initiatives
          </h2>
          <ul>
            <li>
              <strong>Operation "Refactor Sanity":</strong> Identify circular
              dependencies between stress and coffee.
            </li>
            <li>
              <strong>Project "Plural Fight":</strong> Request Pluralsight
              access without begging the IT oracle.
            </li>
            <li>
              <strong>Sprint of Hope:</strong> 4 hours of learning per week…
              hopefully someday.
            </li>
          </ul>
        </section>

        <section>
          <h2>
            <span className="emoji">💬</span> Manifesto of Lucid Exhaustion
          </h2>
          <div className="manifest">
            <p>
              "When leadership says <strong>ownership</strong>, we respond{' '}
              <strong>boundaries</strong>.
            </p>
            <p style={{ marginTop: '10px' }}>
              When they ask for <strong>agility</strong>, we deliver{' '}
              <strong>clarity</strong>.
            </p>
            <p style={{ marginTop: '10px' }}>
              When they talk about <strong>360° vision</strong>, we see the
              infinite loop and take a tangent."
            </p>
          </div>
        </section>

        <section>
          <h2>
            <span className="emoji">🧠</span> Survival Plan
          </h2>
          <div className="survival-plan">
            <ul style={{ marginLeft: '15px' }}>
              <li>Document everything in writing.</li>
              <li>Don't argue with PowerPoints, argue with evidence.</li>
              <li>Remember that chaos is a bug, not a culture.</li>
              <li>Keep a playlist for meetings where everything repeats.</li>
            </ul>
          </div>
        </section>

        <div className="cta">
          <div className="cta-text">
            If you ever feel alone in the multiverse of shifting priorities, join{' '}
            <strong>The Society of Lucid Exhaustion™</strong>.
            <br />
            <br />
            We don't promise promotions, but we offer sarcasm, lucidity, and
            shared documentation.
            <br />
            <br />
            <em>
              Because in this sprint called work life, true deployment is
              surviving with dignity.
            </em>
          </div>
          <button onClick={handleJoinSociety}>Join the Society</button>
        </div>

        <footer>
          <p>
            © The Society of Lucid Exhaustion™ | Unofficial Intranet |
            Made with ☕ and lucidity
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LaSociedadCansados;
