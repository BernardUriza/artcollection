import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DecemberJLLGPTSystem.css';

function DecemberJLLGPTSystem() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "TrackingJLL Full System",
      subtitle: "December 2024 - Bernard Orozco",
      content: (
        <div className="title-slide-content">
          <div className="tagline">Moving from Silent Blockers to Visible Progress</div>
          <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', color: '#64748b' }}>
            Leveraging JLLGPT's existing AI endpoints for intelligent development tracking
          </p>
        </div>
      )
    },
    {
      title: "The Reality Check",
      subtitle: "What's Actually Happening",
      content: (
        <div className="problem-section">
          <div className="problem-box critical">
            <h3>🚨 Critical Blocker: Code Review Delays</h3>
            <p className="problem-stat">Multi-week waits on PR reviews for JLLGPT development</p>
            <p className="problem-impact">Can't move forward. Can't deliver. Can't prove value.</p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: '#7f1d1d' }}>
              We have working JLLGPT AI endpoints at 100%, but no organized system to track our own development process.
            </p>
          </div>

          <div className="problem-box warning">
            <h3>⚠️ Team Dynamics</h3>
            <p>Sensing discomfort and evasion in the team</p>
            <p className="subtle-note">(Just an observation - people seem stretched thin, feeling unseen)</p>
          </div>

          <div className="problem-box info">
            <h3>📊 Visibility Gap</h3>
            <p>No clear tracking of:</p>
            <ul>
              <li>Which PRs are waiting (and for how long)</li>
              <li>Learning hours vs. sprint contributions</li>
              <li>What's blocking whom</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Recognition First",
      subtitle: "Natnael's Growth as Manager",
      content: (
        <div className="recognition-section">
          <div className="recognition-box positive">
            <h3>✅ What's Working Better</h3>
            <ul>
              <li><strong>Openness to casual 1:1s</strong> - Less rigid, more productive</li>
              <li><strong>Written feedback approach</strong> - Time to reflect, better quality responses</li>
              <li><strong>Learning time proposals</strong> - 4-6 hours/week for cloud, design patterns, AI</li>
            </ul>
          </div>

          <div className="recognition-box context">
            <p className="quote-text">
              "Appreciate the flexibility and willingness to adapt communication style.
              This proposal builds on that foundation."
            </p>
          </div>

          <div className="recognition-box opportunity">
            <h3>🎯 Opportunity</h3>
            <p>With the team transition (William, Steven), you're stepping into an expanded role.
            A tracking system could give you objective data to support team growth without micromanagement.</p>
          </div>
        </div>
      )
    },
    {
      title: "The Proposal: TrackingJLL",
      subtitle: "Development Tracking System",
      content: (
        <div className="proposal-section">
          <div className="proposal-header">
            <h3>Personal Kanban + Team Accountability + AI Intelligence</h3>
            <p className="proposal-tagline">Making work visible, removing silent blockers, powered by JLLGPT endpoints</p>
          </div>

          <div className="proposal-grid">
            <div className="proposal-card purple">
              <h4>🎯 Core Purpose</h4>
              <p>Lightweight tracking system for JLLGPT development that addresses interconnected workflow needs</p>
            </div>

            <div className="proposal-card blue">
              <h4>🔧 Technical Approach</h4>
              <p>React dashboard + Jira-CLI integration + GitHub API + JLLGPT AI endpoints</p>
              <p className="tech-detail">Local-first, optional cloud sync, AI-powered insights</p>
            </div>

            <div className="proposal-card green">
              <h4>📈 Key Metrics</h4>
              <ul>
                <li>PR review age (visual thresholds)</li>
                <li>Learning hours categorized</li>
                <li>Sprint correlation tracking</li>
                <li>AI-generated insights from JLLGPT</li>
              </ul>
            </div>

            <div className="proposal-card orange">
              <h4>🚀 Quick Win</h4>
              <p>Dashboard showing: "PR assigned to [person] for [X days]"</p>
              <p className="benefit">Creates visibility without finger-pointing, uses existing JLLGPT infrastructure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Problem #1: Code Review Hell",
      subtitle: "The Bottleneck Killing Momentum",
      content: (
        <div className="deep-dive-section">
          <div className="problem-deep critical">
            <h3>Current State: Unacceptable</h3>
            <p className="stat-large">Weeks of waiting</p>
            <p>No accountability. No visibility. No progress.</p>
          </div>

          <div className="solution-box">
            <h3>Proposed Solution: Jira Kanban + WIP Limits</h3>
            <div className="solution-grid">
              <div className="solution-step">
                <strong>1. Add "Code Review" Column</strong>
                <p>Standard Atlassian methodology</p>
              </div>
              <div className="solution-step">
                <strong>2. WIP Limits</strong>
                <p>Max 3 PRs in review per person</p>
              </div>
              <div className="solution-step">
                <strong>3. GitHub Assignment = Accountability</strong>
                <p>24-48 hour SLA, not weeks</p>
              </div>
              <div className="solution-step">
                <strong>4. Visual Thresholds</strong>
                <p>🟢 {`<`}2 days | 🟡 2-5 days | 🔴 {`>`}5 days</p>
              </div>
            </div>
          </div>

          <div className="impact-box">
            <h4>Why This Matters</h4>
            <p>If my PR sits unreviewed, I can't move forward. If someone else's does, same problem.
            This isn't about blame - it's about removing silent blockers that hurt everyone.</p>
          </div>
        </div>
      )
    },
    {
      title: "Problem #2: Learning in the Dark",
      subtitle: "Hours Invested, Progress Unknown",
      content: (
        <div className="learning-section">
          <div className="learning-box challenge">
            <h3>The Challenge</h3>
            <p>Dedicating 4-6 hours/week to learning (cloud, design patterns, prompt engineering)</p>
            <p className="question">But how do we prove it translates to better delivery?</p>
          </div>

          <div className="learning-box solution">
            <h3>JLLGPT Solution: Evidence Trail</h3>
            <div className="evidence-grid">
              <div className="evidence-item">
                <strong>Log Learning Hours</strong>
                <p>Categorized by topic (Azure, Patterns, AI)</p>
              </div>
              <div className="evidence-item">
                <strong>Link to Sprint Work</strong>
                <p>"Completed Azure Functions course → delivered feature X in half the time"</p>
              </div>
              <div className="evidence-item">
                <strong>Retrospective Data</strong>
                <p>Show velocity improvements correlated with learning investment</p>
              </div>
              <div className="evidence-item">
                <strong>Codebase Growth</strong>
                <p>Personal repo that evolves with skills - living portfolio</p>
              </div>
            </div>
          </div>

          <div className="learning-box initiative">
            <h3>📚 Pluralsight Initiative</h3>
            <p>Starting targeted courses this month - JLLGPT tracks completion + application</p>
          </div>
        </div>
      )
    },
    {
      title: "TrackingJLL Architecture",
      subtitle: "Technical Blueprint - Leveraging JLLGPT",
      content: (
        <div className="architecture-section">
          <div className="arch-layer frontend">
            <h4>Frontend Layer</h4>
            <ul>
              <li>React dashboard (similar to this presentation)</li>
              <li>Kanban board visualization</li>
              <li>PR aging heatmap</li>
              <li>Learning hours charts</li>
              <li>AI insights panel powered by JLLGPT</li>
            </ul>
          </div>

          <div className="arch-layer integration">
            <h4>Integration Layer</h4>
            <ul>
              <li><strong>Jira-CLI:</strong> Automated task status sync</li>
              <li><strong>GitHub API:</strong> PR tracking, reviewer assignment monitoring</li>
              <li><strong>JLLGPT Endpoints:</strong> AI-powered analysis, recommendations, pattern detection</li>
              <li><strong>Azure DevOps (optional):</strong> Pipeline status, deployment tracking</li>
            </ul>
          </div>

          <div className="arch-layer data">
            <h4>Data Layer</h4>
            <ul>
              <li>SQLite (local-first, privacy-preserving)</li>
              <li>Optional cloud sync for team dashboards</li>
              <li>Historical metrics for retrospectives</li>
              <li>JLLGPT endpoint responses cached locally</li>
            </ul>
          </div>

          <div className="arch-benefits">
            <h4>Key Benefits</h4>
            <div className="benefit-grid">
              <span className="benefit-tag">🚀 Quick to build (2-3 weeks)</span>
              <span className="benefit-tag">🔒 Privacy-first (your data, your control)</span>
              <span className="benefit-tag">📊 Actionable insights for standups</span>
              <span className="benefit-tag">🎯 Removes manual tracking overhead</span>
              <span className="benefit-tag">🤖 AI-powered by existing JLLGPT infrastructure</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Standup Transformation",
      subtitle: "From Status Updates to Blocker Resolution",
      content: (
        <div className="standup-section">
          <div className="standup-comparison">
            <div className="standup-before">
              <h3>❌ Current Standups</h3>
              <p className="standup-quote">"Working on task XYZ, waiting on review..."</p>
              <p className="standup-problem">Vague. No urgency. Blockers stay silent.</p>
            </div>

            <div className="standup-after">
              <h3>✅ With JLLGPT</h3>
              <p className="standup-quote">
                "Task XYZ PR has been waiting 8 days for review from [person].
                This is blocking features ABC. Can we prioritize?"
              </p>
              <p className="standup-benefit">Specific. Data-driven. Actionable.</p>
            </div>
          </div>

          <div className="standup-dashboard-preview">
            <h4>Dashboard Would Show:</h4>
            <div className="dashboard-mockup">
              <div className="dashboard-row red">
                <span className="pr-name">PR #123: Azure Function Migration</span>
                <span className="pr-age">12 days</span>
                <span className="pr-reviewer">Assigned: John</span>
              </div>
              <div className="dashboard-row yellow">
                <span className="pr-name">PR #124: API Refactor</span>
                <span className="pr-age">4 days</span>
                <span className="pr-reviewer">Assigned: Sarah</span>
              </div>
              <div className="dashboard-row green">
                <span className="pr-name">PR #125: Bug Fix</span>
                <span className="pr-age">1 day</span>
                <span className="pr-reviewer">Assigned: Mike</span>
              </div>
            </div>
          </div>

          <div className="standup-result">
            <p><strong>Result:</strong> Standups become blocker-clearing sessions, not just status reports.</p>
          </div>
        </div>
      )
    },
    {
      title: "Team Impact",
      subtitle: "Making Contributions Visible",
      content: (
        <div className="team-impact-section">
          <div className="impact-observation">
            <h3>What I've Noticed</h3>
            <p>"People stretched thin, feeling unseen"</p>
          </div>

          <div className="impact-solution">
            <h3>How JLLGPT Helps</h3>
            <div className="impact-grid">
              <div className="impact-card">
                <h4>🔍 Visibility</h4>
                <p>Everyone's work becomes visible, not just the loudest voices</p>
              </div>
              <div className="impact-card">
                <h4>⚖️ Fair Accountability</h4>
                <p>Objective data replaces subjective perception</p>
              </div>
              <div className="impact-card">
                <h4>📈 Growth Documentation</h4>
                <p>Each dev builds evidence of continuous improvement</p>
              </div>
              <div className="impact-card">
                <h4>🎯 Manager Support</h4>
                <p>Natnael gets data to advocate for team needs without micromanaging</p>
              </div>
            </div>
          </div>

          <div className="impact-philosophy">
            <h4>Philosophy</h4>
            <p className="philosophy-text">
              This isn't surveillance. It's self-advocacy.
              When our work is invisible, we can't prove our value.
              When it's visible, we can have honest conversations about capacity, blockers, and growth.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Implementation Plan",
      subtitle: "Prototype to Production",
      content: (
        <div className="implementation-section">
          <div className="phase-container">
            <div className="phase phase1">
              <h4>Phase 1: Prototype (Week 1-2)</h4>
              <ul>
                <li>Basic React dashboard with mock data</li>
                <li>Jira-CLI integration proof-of-concept</li>
                <li>GitHub API PR tracking</li>
                <li>SQLite setup</li>
              </ul>
              <p className="phase-deliverable">Deliverable: Working demo for team feedback</p>
            </div>

            <div className="phase phase2">
              <h4>Phase 2: Core Features (Week 3-4)</h4>
              <ul>
                <li>Kanban board visualization</li>
                <li>Learning hours logging UI</li>
                <li>PR aging alerts</li>
                <li>Basic reporting</li>
              </ul>
              <p className="phase-deliverable">Deliverable: Usable for personal tracking</p>
            </div>

            <div className="phase phase3">
              <h4>Phase 3: Team Expansion (Week 5-6)</h4>
              <ul>
                <li>Multi-user support (optional)</li>
                <li>Cloud sync for shared dashboards</li>
                <li>Retrospective data exports</li>
                <li>Automation (Slack/Teams notifications)</li>
              </ul>
              <p className="phase-deliverable">Deliverable: Team-wide adoption</p>
            </div>
          </div>

          <div className="implementation-ask">
            <h4>What I'm Asking</h4>
            <p>✅ Permission to dedicate learning hours to building this (aligns with learning goals)</p>
            <p>✅ Team feedback on MVP before expanding features</p>
            <p>✅ Agreement on 24-48 hour PR review SLA once tracking is live</p>
          </div>
        </div>
      )
    },
    {
      title: "Expected Outcomes",
      subtitle: "What Success Looks Like",
      content: (
        <div className="outcomes-section">
          <div className="outcome-timeline">
            <div className="outcome-milestone">
              <h4>Month 1</h4>
              <ul>
                <li>✅ PR review delays reduced from weeks to days</li>
                <li>✅ 100% visibility into blocked work</li>
                <li>✅ Learning hours tracked and categorized</li>
              </ul>
            </div>

            <div className="outcome-milestone">
              <h4>Month 2-3</h4>
              <ul>
                <li>✅ Retrospective data shows velocity improvements</li>
                <li>✅ Team uses JLLGPT for standup preparation</li>
                <li>✅ Codebase grows with documented experiments</li>
              </ul>
            </div>

            <div className="outcome-milestone">
              <h4>Month 4+</h4>
              <ul>
                <li>✅ System becomes team standard (if adopted)</li>
                <li>✅ Historical data enables better sprint planning</li>
                <li>✅ Continuous evidence of individual growth</li>
              </ul>
            </div>
          </div>

          <div className="outcome-metrics">
            <h4>Measurable Success Criteria</h4>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-label">Avg PR Review Time</span>
                <span className="metric-before">14+ days</span>
                <span className="metric-arrow">→</span>
                <span className="metric-after">{`<`}48 hours</span>
              </div>
              <div className="metric">
                <span className="metric-label">Learning Hours/Week</span>
                <span className="metric-before">Unknown</span>
                <span className="metric-arrow">→</span>
                <span className="metric-after">4-6 tracked</span>
              </div>
              <div className="metric">
                <span className="metric-label">Blocked Tasks Visibility</span>
                <span className="metric-before">0%</span>
                <span className="metric-arrow">→</span>
                <span className="metric-after">100%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Final Thoughts",
      subtitle: "Building Together",
      content: (
        <div className="closing-section">
          <div className="closing-quote">
            <p className="quote-large">
              "TrackingJLL isn't just a tracking tool. It's a commitment to making our work visible,
              our blockers addressable, and our growth undeniable - powered by the JLLGPT AI we've already built."
            </p>
          </div>

          <div className="closing-asks">
            <h4>Concrete Asks</h4>
            <div className="ask-list">
              <div className="ask-item">✅ Approve prototype development as learning project</div>
              <div className="ask-item">✅ Commit to 24-48hr PR review SLA once system is live</div>
              <div className="ask-item">✅ Monthly check-in on system effectiveness</div>
              <div className="ask-item">✅ Open feedback - if this doesn't solve real problems, we pivot</div>
            </div>
          </div>

          <div className="closing-appreciation">
            <p>Appreciate your openness to new approaches, Natnael. Let's build something that helps everyone ship better, faster.</p>
          </div>

          <div className="closing-cta">
            <h4>Ready to discuss?</h4>
            <p>Happy to walk through details, answer questions, or start prototyping.</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="nov-presentation-container">
      <div className="nov-slide-wrapper">
        <div className="nov-slide-content">
          <h1 className="nov-slide-title">{slides[currentSlide].title}</h1>
          <h2 className="nov-slide-subtitle">{slides[currentSlide].subtitle}</h2>
          <div className="nov-slide-body">
            {slides[currentSlide].content}
          </div>
        </div>

        <div className="nov-navigation">
          <button
            className="nov-nav-button nov-prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={24} />
            Previous
          </button>

          <div className="nov-slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`nov-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="nov-slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>

          <button
            className="nov-nav-button nov-next"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DecemberJLLGPTSystem;
