import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './NovemberRetrospective.css';

function NovemberRetrospective() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Implementing Your Predictability Vision",
      subtitle: "November 2024 - Operationalizing the Framework",
      content: (
        <div className="retro-title-slide">
          <div className="retro-tagline">Turning Your End-to-End Visibility Concept Into Measurable Reality</div>
          <p style={{ marginTop: '1.5rem', fontSize: '1rem', color: '#94a3b8', fontStyle: 'italic' }}>
            In alignment with your stated goals for team predictability and architectural transparency
          </p>
        </div>
      )
    },
    {
      title: "Your Vision",
      subtitle: "The Framework You've Articulated",
      content: (
        <div className="retro-content">
          <div className="retro-proposal-box" style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', borderColor: '#3b82f6', textAlign: 'center', padding: '3rem 2rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: '#1e40af' }}>Your Stated Objectives</h3>
            <p className="problem-statement" style={{ fontSize: '1.25rem', lineHeight: 1.7, fontStyle: 'italic', color: '#1e293b' }}>
              "Everyone at the same level of knowledge...
              <br/>predictability...
              <br/>end-to-end visibility...
              <br/>understanding cloud, architecture, DR, regions...
              <br/>plug-and-play like Spotify."
            </p>
            <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: '#64748b', fontWeight: 600 }}>
              These are the right north star goals.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Question",
      subtitle: "Vision Without Measurement",
      content: (
        <div className="retro-content">
          <div className="retro-problem-box" style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderColor: '#f59e0b', textAlign: 'center', padding: '3rem 2rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#92400e' }}>How do we measure progress?</h3>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#475569' }}>
              Without metrics, "predictability" remains aspirational.
              <br/>Without data, "end-to-end visibility" is just a concept.
              <br/>Without checkpoints, we can't prove we're executing your framework.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Current Reality: Invisible Blockers",
      subtitle: "What's Preventing Your Vision",
      content: (
        <div className="retro-content">
          <div className="retro-proposal-box" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', borderColor: '#dc2626' }}>
            <h3>The Gaps</h3>
            <ul className="proposal-features" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              <li><strong>Multi-week PR review delays</strong> - No visibility into queue status, blockers stay silent</li>
              <li><strong>Knowledge gaps unclear</strong> - Can't track what we're learning vs. what we're shipping</li>
              <li><strong>Blockers emerge in standups, disappear afterward</strong> - No persistence, no accountability</li>
              <li><strong>No baseline metrics</strong> - Can't quantify if we're getting more "predictable"</li>
            </ul>
          </div>

          <div className="retro-philosophy-box" style={{ marginTop: '1.5rem', background: '#f8fafc', borderColor: '#475569' }}>
            <p style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 600 }}>
              Problem: Your vision exists in PowerPoints and standups. It doesn't exist in dashboards and tickets.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Cost of Invisibility",
      subtitle: "What This Actually Means",
      content: (
        <div className="retro-content">
          <div className="retro-problem-box" style={{ background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', borderColor: '#dc2626' }}>
            <h3>Real Impact (Quantifiable)</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', borderLeft: '4px solid #dc2626' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#dc2626', fontSize: '2rem' }}>14+ days</h4>
                <p style={{ margin: 0, color: '#64748b' }}>Average PR review wait time</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#f59e0b', fontSize: '2rem' }}>0 hours</h4>
                <p style={{ margin: 0, color: '#64748b' }}>Tracked learning time (you proposed 4-6hrs/week)</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '8px', borderLeft: '4px solid #7e22ce' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#7e22ce', fontSize: '2rem' }}>$0</h4>
                <p style={{ margin: 0, color: '#64748b' }}>ROI you can report on "predictability initiatives"</p>
              </div>
            </div>
          </div>

          <div className="retro-philosophy-box" style={{ marginTop: '1.5rem' }}>
            <p style={{ fontSize: '1.05rem', color: '#475569', fontWeight: 600 }}>
              <strong>Translation:</strong> You can't report progress on your framework because we have no data layer.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "The Bridge: TrackingJLL",
      subtitle: "Operationalizing Your Vision",
      content: (
        <div className="retro-content">
          <div className="retro-benefit-box">
            <h3>Your Framework + Measurement Layer</h3>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', color: '#475569' }}>
              Simple React dashboard that translates your concepts into quantifiable reality:
            </p>
            <ul className="proposal-features" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
              <li><strong>PR Review Tracker</strong> - Makes blockers visible in real-time (addresses 14-day delays)</li>
              <li><strong>Learning Hours Log</strong> - Tracks knowledge-building aligned with your 4-6hrs/week proposal</li>
              <li><strong>Backlog Integration</strong> - Connects architecture goals to actual tickets</li>
              <li><strong>Standup Metrics</strong> - Quantifies "predictability" for upward reporting</li>
            </ul>
            <p className="benefit-highlight" style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
              This isn't a new idea. It's <strong>your predictability concept</strong>, with a data layer you can show leadership.
            </p>
          </div>

          <div className="retro-benefit-box" style={{ marginTop: '1.5rem', background: 'linear-gradient(135deg, #dbeafe, #eff6ff)', borderColor: '#3b82f6' }}>
            <h3 style={{ color: '#1e40af' }}>🐍 Modern Tech Stack Already Mastered</h3>
            <p style={{ marginBottom: '1rem', fontSize: '1.05rem', color: '#475569' }}>
              <strong>Key capability unlocked:</strong> jira-cli integration with Python for workflow automation
            </p>
            <div style={{ background: 'white', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
              <p style={{ fontSize: '0.95rem', color: '#1e293b', margin: 0 }}>
                ✅ Already operational with <strong>Python-based jira-cli</strong> for modern, constructive workflow enhancement
                <br/>✅ Enables seamless card movement tracking, status updates, and automation
                <br/>✅ Foundation for future AI-powered analytics using JLLGPT endpoints
              </p>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#64748b', fontStyle: 'italic' }}>
              This means we can start instrumenting your framework <strong>immediately</strong> - no tech learning curve required.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Your Predictability Vision - Visualized",
      subtitle: "What You'll Be Able to Show Leadership",
      content: (
        <div className="retro-mockup-section">
          <h3>Dashboard That Operationalizes Your Framework</h3>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#64748b', fontSize: '0.95rem' }}>
            This gives you <strong>quantifiable metrics</strong> to demonstrate progress on your stated objectives
          </p>

          <div className="spreadsheet-mockup">
            <div className="spreadsheet-header">
              <div className="col-title">PR Title</div>
              <div className="col-reviewer">Assigned To</div>
              <div className="col-days">Days Waiting</div>
              <div className="col-status">Status</div>
            </div>

            <div className="spreadsheet-row urgent">
              <div className="col-title">
                <a href="#" className="pr-link">feat: Azure Function Migration #423</a>
              </div>
              <div className="col-reviewer">John D.</div>
              <div className="col-days urgent-number">12</div>
              <div className="col-status">
                <span className="status-badge waiting">Waiting</span>
              </div>
            </div>

            <div className="spreadsheet-row warning">
              <div className="col-title">
                <a href="#" className="pr-link">refactor: API Authentication Layer #418</a>
              </div>
              <div className="col-reviewer">Sarah M.</div>
              <div className="col-days warning-number">6</div>
              <div className="col-status">
                <span className="status-badge waiting">Waiting</span>
              </div>
            </div>

            <div className="spreadsheet-row normal">
              <div className="col-title">
                <a href="#" className="pr-link">fix: Memory leak in cache service #425</a>
              </div>
              <div className="col-reviewer">Mike L.</div>
              <div className="col-days normal-number">3</div>
              <div className="col-status">
                <span className="status-badge in-review">In Review</span>
              </div>
            </div>

            <div className="spreadsheet-row good">
              <div className="col-title">
                <a href="#" className="pr-link">docs: Update API documentation #420</a>
              </div>
              <div className="col-reviewer">Emily R.</div>
              <div className="col-days good-number">1</div>
              <div className="col-status">
                <span className="status-badge waiting">Waiting</span>
              </div>
            </div>

            <div className="spreadsheet-row completed">
              <div className="col-title">
                <a href="#" className="pr-link">test: Add integration tests for auth #419</a>
              </div>
              <div className="col-reviewer">Tony S.</div>
              <div className="col-days completed-number">—</div>
              <div className="col-status">
                <span className="status-badge done">Done</span>
              </div>
            </div>
          </div>

          <div className="mockup-legend">
            <h4>Visual Thresholds</h4>
            <div className="legend-grid">
              <div className="legend-item">
                <span className="legend-dot red"></span>
                <span>{`>`}7 days = Urgent</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot yellow"></span>
                <span>4-7 days = Warning</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot blue"></span>
                <span>2-3 days = Normal</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot green"></span>
                <span>{`<`}2 days = Good</span>
              </div>
            </div>
          </div>

          <div className="mockup-tech-note">
            <p><strong>Technical Approach:</strong> Simple React component + GitHub REST API polling every 5 minutes</p>
            <p><strong>Time to Build:</strong> 1-2 days for working prototype</p>
          </div>
        </div>
      )
    },
    {
      title: "Use Case: How You Drive Predictability in Standups",
      subtitle: "From Narrative to Metrics",
      content: (
        <div className="retro-usecase-section">
          <div className="usecase-before">
            <h3>❌ Current State (Invisible Blockers)</h3>
            <div className="dialogue-box">
              <p className="dialogue-text">"I'm waiting on code review... it's been a while..."</p>
              <p className="dialogue-problem">Vague. No accountability. You can't manage what you can't measure.</p>
            </div>
          </div>

          <div className="usecase-arrow">→</div>

          <div className="usecase-after">
            <h3>✅ With Your Predictability Dashboard</h3>
            <div className="dialogue-box success">
              <p className="dialogue-text">
                <strong>Natnael:</strong> "Looking at our tracker, PR #423 has been blocked for 12 days. This directly impacts our cloud migration timeline.
                Let's apply the WIP limit we discussed - reassign or commit to review today."
              </p>
              <p className="dialogue-benefit">Specific. Data-driven. Leadership-visible.</p>
            </div>
          </div>

          <div className="usecase-result">
            <h4>What This Gives You</h4>
            <p><strong>Upward reporting:</strong> "We reduced PR review time from 14 days to 48 hours using our new predictability framework."</p>
            <p><strong>Team accountability:</strong> Objective data replaces subjective feelings.</p>
            <p><strong>Your vision, quantified:</strong> Proof that your framework is working.</p>
          </div>
        </div>
      )
    },
    {
      title: "Why Simple Works",
      subtitle: "Keeping It Minimal",
      content: (
        <div className="retro-simple-section">
          <div className="simple-principle">
            <h3>✨ Principles</h3>
            <ul className="simple-list">
              <li><strong>No new processes</strong> - Uses existing GitHub PR assignments</li>
              <li><strong>No manual entry</strong> - Auto-pulls from GitHub API</li>
              <li><strong>No complex features</strong> - Just a spreadsheet with colors</li>
              <li><strong>No integrations needed</strong> - Standalone React app</li>
            </ul>
          </div>

          <div className="simple-benefits">
            <h3>🎯 Benefits</h3>
            <div className="benefit-grid">
              <div className="benefit-card">
                <h4>Quick to Build</h4>
                <p>1-2 days for prototype</p>
              </div>
              <div className="benefit-card">
                <h4>Easy to Adopt</h4>
                <p>Just open a URL in standup</p>
              </div>
              <div className="benefit-card">
                <h4>Low Maintenance</h4>
                <p>Auto-updates, no manual work</p>
              </div>
              <div className="benefit-card">
                <h4>Immediate Value</h4>
                <p>See blockers at a glance</p>
              </div>
            </div>
          </div>

          <div className="simple-scope">
            <h3>📦 What's NOT Included (For Now)</h3>
            <p className="scope-note">Keeping it simple means deliberately avoiding scope creep:</p>
            <ul className="not-included-list">
              <li>No Jira integration</li>
              <li>No learning hours tracking</li>
              <li>No notifications/alerts</li>
              <li>No user accounts/auth</li>
              <li>No historical analytics</li>
              <li>No JLLGPT AI endpoint integration (yet)</li>
            </ul>
            <p className="scope-philosophy">If the simple version proves valuable, we can expand later with JLLGPT's existing AI capabilities. Start small.</p>
          </div>
        </div>
      )
    },
    {
      title: "Next Steps",
      subtitle: "What I'm Asking",
      content: (
        <div className="retro-nextsteps-section">
          <div className="ask-primary">
            <h3>Primary Ask</h3>
            <p className="ask-text">Permission to build a basic prototype this sprint (1-2 days of learning time)</p>
          </div>

          <div className="ask-timeline">
            <h3>Timeline</h3>
            <div className="timeline-steps">
              <div className="timeline-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>This Week</h4>
                  <p>Build basic prototype with mock data</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Next Sprint</h4>
                  <p>Connect to GitHub API, test with real PRs</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Trial Run</h4>
                  <p>Use in 2-3 standups, gather feedback</p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Decide</h4>
                  <p>Keep, modify, or scrap based on actual value</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ask-success">
            <h3>Success Criteria</h3>
            <ul className="success-list">
              <li>✅ PRs waiting {`>`}7 days drop to zero</li>
              <li>✅ Average review time reduces from weeks to days</li>
              <li>✅ Standups identify and clear blockers faster</li>
              <li>✅ Team finds it actually useful (not just another tool)</li>
            </ul>
          </div>

          <div className="ask-exit">
            <h4>Exit Strategy</h4>
            <p>If after 2 weeks it's not solving the problem or adding overhead, we kill it. No sunk cost fallacy.</p>
          </div>
        </div>
      )
    },
    {
      title: "Summary: What You're Approving",
      subtitle: "Concrete Deliverables (What You Asked For)",
      content: (
        <div className="retro-summary-section">
          <div className="summary-main">
            <h3>Your Vision</h3>
            <p className="summary-problem">"Predictability, end-to-end visibility, everyone at the same level, plug-and-play like Spotify"</p>
          </div>

          <div className="summary-arrow">↓</div>

          <div className="summary-main">
            <h3>The Implementation</h3>
            <p className="summary-solution">TrackingJLL Phase 1 - PR Review Tracker with measurable KPIs</p>
          </div>

          <div className="summary-arrow">↓</div>

          <div className="summary-main">
            <h3>What You Can Report Upward</h3>
            <p className="summary-outcome">"Implemented predictability framework - reduced PR delays from 14 days to {`<`}48hrs, quantifiable progress toward architectural literacy goals"</p>
          </div>

          <div className="summary-cta">
            <h4>Concrete Action Items (The Tickets You Need)</h4>
            <div style={{ textAlign: 'left', marginTop: '1rem' }}>
              <p><strong>Epic:</strong> "Predictability Framework - Phase 1"</p>
              <p><strong>Story 1:</strong> Build PR Review Tracker MVP (2 days, assigned to BO)</p>
              <p><strong>Story 2:</strong> GitHub API Integration (1 day)</p>
              <p><strong>Story 3:</strong> Trial run in standups (1 sprint)</p>
              <p><strong>Story 4:</strong> Retrospective on effectiveness (1 meeting)</p>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '0.95rem', opacity: 0.9, fontStyle: 'italic' }}>
              <strong>Timeline:</strong> Sprint N (prototype), Sprint N+1 (trial), Sprint N+2 (evaluate)
            </p>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', opacity: 0.9 }}>
              <strong>Your role:</strong> Approve epic, assign stories, report progress to leadership
            </p>
          </div>

          <div className="summary-philosophy">
            <p className="philosophy-quote">
              "You set the vision. I execute the implementation. We both benefit: you get measurable progress to report, I get clarity instead of ambiguity."
            </p>
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
    <div className="retro-presentation-container">
      <div className="retro-slide-wrapper">
        <div className="retro-slide-content">
          <h1 className="retro-slide-title">{slides[currentSlide].title}</h1>
          <h2 className="retro-slide-subtitle">{slides[currentSlide].subtitle}</h2>
          <div className="retro-slide-body">
            {slides[currentSlide].content}
          </div>
        </div>

        <div className="retro-navigation">
          <button
            className="retro-nav-button retro-prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={24} />
            Previous
          </button>

          <div className="retro-slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`retro-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="retro-slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>

          <button
            className="retro-nav-button retro-next"
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

export default NovemberRetrospective;
