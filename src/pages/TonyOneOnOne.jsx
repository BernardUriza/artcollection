import React from 'react';
import './TonyOneOnOne.css';

function TonyOneOnOne() {
  return (
    <div className="tony-one-on-one">
      <header className="page-header">
        <h1>Tony 1:1 - Bernard Orozco</h1>
        <p className="subtitle">Strategic Discussion & Action Planning</p>
      </header>

      <section className="discussion-section">
        <h2>Developer Tooling</h2>
        <div className="content-card">
          <h3>Current State</h3>
          <ul>
            <li>Limited access to advanced AI development tools</li>
            <li>Relying on basic IDE features and manual code review</li>
            <li>Opportunity to enhance productivity with modern AI assistants</li>
          </ul>

          <h3>Proposed Solution</h3>
          <ul>
            <li>Implement Claude Code for intelligent code assistance</li>
            <li>Enable faster development cycles and better code quality</li>
            <li>Leverage AI for code review, debugging, and documentation</li>
          </ul>

          <h3>Benefits</h3>
          <ul>
            <li>Increased development velocity</li>
            <li>Reduced time on boilerplate and repetitive tasks</li>
            <li>Enhanced code quality through AI-assisted reviews</li>
            <li>Better documentation and knowledge transfer</li>
          </ul>
        </div>
      </section>

      <section className="discussion-section">
        <h2>Team Positioning</h2>
        <div className="content-card">
          <h3>Current Role & Impact</h3>
          <ul>
            <li>Full-stack development contributions</li>
            <li>Cross-functional collaboration</li>
            <li>Technical problem-solving and innovation</li>
          </ul>

          <h3>Growth Opportunities</h3>
          <ul>
            <li>Technical leadership in key projects</li>
            <li>Mentoring junior developers</li>
            <li>Architecture and design decisions</li>
            <li>Process improvement initiatives</li>
          </ul>

          <h3>Strategic Alignment</h3>
          <ul>
            <li>Align personal growth with team objectives</li>
            <li>Identify high-impact projects</li>
            <li>Build expertise in critical technology areas</li>
          </ul>
        </div>
      </section>

      <section className="discussion-section">
        <h2>Operational Rhythm</h2>
        <div className="content-card">
          <h3>Communication Cadence</h3>
          <ul>
            <li>Regular 1:1 meetings for alignment and feedback</li>
            <li>Sprint planning and retrospectives</li>
            <li>Ad-hoc technical discussions as needed</li>
          </ul>

          <h3>Collaboration Framework</h3>
          <ul>
            <li>Clear ownership and accountability</li>
            <li>Transparent progress tracking</li>
            <li>Proactive communication on blockers</li>
          </ul>

          <h3>Work-Life Balance</h3>
          <ul>
            <li>Sustainable pace and workload management</li>
            <li>Flexible scheduling when possible</li>
            <li>Focus on outcomes over hours</li>
          </ul>
        </div>
      </section>

      <section className="discussion-section action-items">
        <h2>Action Items</h2>
        <div className="content-card">
          <div className="action-item">
            <div className="action-header">
              <span className="action-owner">Bernard</span>
              <span className="action-priority priority-high">High Priority</span>
            </div>
            <p className="action-description">
              Research and document Claude Code capabilities and integration requirements
            </p>
            <p className="action-timeline">Timeline: This week</p>
          </div>

          <div className="action-item">
            <div className="action-header">
              <span className="action-owner">Tony</span>
              <span className="action-priority priority-high">High Priority</span>
            </div>
            <p className="action-description">
              Review tooling budget and approval process for AI development tools
            </p>
            <p className="action-timeline">Timeline: Next week</p>
          </div>

          <div className="action-item">
            <div className="action-header">
              <span className="action-owner">Both</span>
              <span className="action-priority priority-medium">Medium Priority</span>
            </div>
            <p className="action-description">
              Define career development goals and create 6-month growth plan
            </p>
            <p className="action-timeline">Timeline: End of month</p>
          </div>

          <div className="action-item">
            <div className="action-header">
              <span className="action-owner">Bernard</span>
              <span className="action-priority priority-medium">Medium Priority</span>
            </div>
            <p className="action-description">
              Identify 2-3 high-impact projects for Q1 leadership opportunities
            </p>
            <p className="action-timeline">Timeline: Next 1:1</p>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <p>Document ID: 22b39bb7-2ba4-41bb-9011-ba5171415bf6</p>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default TonyOneOnOne;
