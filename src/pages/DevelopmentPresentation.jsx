import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DevelopmentPresentation.css';

const DevelopmentPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Development Discussion Framework",
      subtitle: "Bernard Orozco - Oct 2024",
      content: (
        <div className="text-center">
          <div className="emoji-large">🎯</div>
          <p className="text-xl text-gray-600">Establishing Clear Technical Growth Path</p>
        </div>
      )
    },
    {
      title: "Agenda",
      content: (
        <div className="slide-body">
          <div className="agenda-item">
            <span className="agenda-icon">1️⃣</span>
            <div className="agenda-content">
              <h3>Reconnection & Context</h3>
              <p>Clarifying our previous conversation</p>
            </div>
          </div>
          <div className="agenda-item">
            <span className="agenda-icon">2️⃣</span>
            <div className="agenda-content">
              <h3>Technical Growth Areas</h3>
              <p>Specific skills I want to develop</p>
            </div>
          </div>
          <div className="agenda-item">
            <span className="agenda-icon">3️⃣</span>
            <div className="agenda-content">
              <h3>Working Relationship</h3>
              <p>Communication channels & expectations</p>
            </div>
          </div>
          <div className="agenda-item">
            <span className="agenda-icon">4️⃣</span>
            <div className="agenda-content">
              <h3>Action Items</h3>
              <p>Clear next steps</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Opening: Reconnection & Appreciation",
      content: (
        <div className="slide-body">
          <div className="info-box green">
            <p className="quote-text">
              "Natnael, before we start I want to acknowledge something: you've been receptive to what I've asked for - the casual 1:1s without rigid agendas, coordination via email, respecting timing. I appreciate that flexibility and want you to know we can work well together."
            </p>
          </div>
          <div className="info-box blue">
            <p className="quote-text">
              "I've reflected on our last conversation and I'm ready to be clearer about where I could use your guidance and how we can collaborate effectively."
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Technical Growth Areas",
      subtitle: "Where I Need Development",
      content: (
        <div className="slide-body">
          <div className="info-box purple">
            <h3>☁️ Cloud Infrastructure & Architecture</h3>
            <ul>
              <li>Azure services beyond current usage</li>
              <li>Deployment strategies & DR patterns</li>
              <li>Infrastructure as code practices</li>
            </ul>
          </div>

          <div className="info-box orange">
            <h3>🏗️ Design Patterns & Architecture</h3>
            <ul>
              <li>Enterprise-scale architectural patterns</li>
              <li>Microservices best practices</li>
              <li>Scalability & performance optimization</li>
            </ul>
          </div>

          <div className="info-box teal">
            <h3>🤖 Prompt Engineering & AI Integration</h3>
            <ul>
              <li>Advanced prompt design techniques</li>
              <li>AI model integration patterns</li>
              <li>Production AI application architecture</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Learning Approach",
      subtitle: "How I Work Best",
      content: (
        <div className="space-y-6">
          <div className="bg-green-50 p-5 rounded-lg">
            <h3 className="font-bold mb-3 text-green-800">✅ What Works for Me</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Dedicated learning time blocks (4-6 hours/week)</li>
              <li>• Hands-on project-based learning</li>
              <li>• Clear technical documentation</li>
              <li>• Real production examples</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <h3 className="font-bold mb-2">📚 Proposed Learning Schedule</h3>
            <p className="text-gray-700">4-6 hours per week dedicated to technical growth, separate from sprint delivery work. This keeps learning focused without impacting current commitments.</p>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <p className="text-gray-700 italic">
              "I want to make sure this aligns with team capacity and sprint planning. What do you think is realistic?"
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Key Question",
      content: (
        <div className="flex items-center justify-center h-full">
          <div className="bg-yellow-50 p-8 rounded-lg border-2 border-yellow-400 max-w-2xl">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              "Given the team transition with William and Steven, where do you see the most critical knowledge gaps that I could help address?"
            </p>
            <p className="text-lg text-gray-600">
              I want to focus my learning time on what actually moves the needle for our deliverables, not just theoretical knowledge.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Mini-Process Proposal",
      subtitle: "Azure Stories for Clarity",
      content: (
        <div className="space-y-5">
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <h3 className="font-bold mb-3 text-yellow-800">🎯 The Challenge</h3>
            <p className="text-gray-700">Sometimes tasks assigned verbally or via Teams can lose clarity in translation. We've had a few delays recently because of misalignment on requirements.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold mb-3 text-green-800">✨ Proposed Solution</h3>
            <p className="text-gray-700 mb-3"><strong>When you assign me work:</strong></p>
            <ol className="ml-5 space-y-2 text-gray-700 list-decimal">
              <li>I create the Azure Story with acceptance criteria</li>
              <li>I send it to you for validation</li>
              <li>You approve/adjust before I start development</li>
              <li>We're aligned from day one</li>
            </ol>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-blue-800">💪 Benefits</h3>
            <ul className="ml-5 space-y-1 text-gray-700">
              <li>• Clear documentation from the start</li>
              <li>• Reduces back-and-forth during development</li>
              <li>• I can help with Scrum process - you focus on priorities</li>
              <li>• Avoids misunderstandings</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-5 rounded-lg">
            <p className="text-gray-700 italic">
              "Does this workflow make sense for how you'd like to assign work going forward?"
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Our 1:1 Working Model",
      subtitle: "Casual & Response-Driven",
      content: (
        <div className="space-y-5">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-blue-800">📅 Meeting Format</h3>
            <p className="text-gray-700">Casual check-ins without rigid agendas - as you suggested. These work great for me.</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-purple-800">💭 Decision Process</h3>
            <p className="text-gray-700 mb-3">When you ask me something or assign new work:</p>
            <ul className="ml-5 space-y-2 text-gray-700">
              <li>• I'll take time to think it through properly</li>
              <li>• Respond via email with details, OR</li>
              <li>• Discuss in our next 1:1</li>
              <li>• Avoid immediate commitments unless it's urgent</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold mb-3 text-green-800">✅ Why This Works</h3>
            <p className="text-gray-700">Gives me space to provide thoughtful responses instead of reactive ones. Better quality outcomes for both of us.</p>
          </div>
        </div>
      )
    },
    {
      title: "Action Items & Next Steps",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">📚 Learning Focus (Next 2-3 Months)</h3>
            <p className="text-gray-700">Cloud, Design Patterns, Prompt Engineering - based on your input and team needs</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">🎫 Mini-Process for Stories</h3>
            <p className="text-gray-700">I'll create Azure Stories for assigned work and send for your validation before starting</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">💬 Communication Model</h3>
            <p className="text-gray-700">Casual 1:1s for check-ins, thoughtful responses via email or next meeting (no immediate commitments)</p>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">📅 Next Check-in</h3>
            <p className="text-gray-700">Monthly cadence works well - keeps us aligned without over-meeting</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">📝 Documentation</h3>
            <p className="text-gray-700">I'll follow up via email to confirm discussion points and agreed actions</p>
          </div>
        </div>
      )
    },
    {
      title: "Summary",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <p className="text-2xl font-bold text-gray-800">Key Agreements</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded">
              <span className="text-xl">✓</span>
              <p className="text-gray-700"><strong>Technical growth areas:</strong> Cloud, Design Patterns, Prompt Engineering with 4-6 hours/week learning time</p>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded">
              <span className="text-xl">✓</span>
              <p className="text-gray-700"><strong>Work assignment process:</strong> I create Azure Stories for validation before starting development</p>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded">
              <span className="text-xl">✓</span>
              <p className="text-gray-700"><strong>1:1 model:</strong> Casual check-ins, thoughtful responses (email or next meeting), no immediate commitments</p>
            </div>

            <div className="flex items-start space-x-3 bg-gray-50 p-4 rounded">
              <span className="text-xl">✓</span>
              <p className="text-gray-700"><strong>Cadence:</strong> Monthly check-ins, email follow-ups to document agreements</p>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p className="italic">"I appreciate your flexibility and looking forward to productive collaboration"</p>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="presentation-container">
      <div className="slide-card">
        <div className="slide-content">
          <div className="slide-header">
            <h1 className="slide-title">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="slide-subtitle">{slides[currentSlide].subtitle}</p>
            )}
          </div>
          <div className="slide-body">{slides[currentSlide].content}</div>
        </div>

        <div className="slide-navigation">
          <button
            onClick={prevSlide}
            className="nav-button prev"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} />
            <span>Previous</span>
          </button>

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="nav-button next"
            disabled={currentSlide === slides.length - 1}
          >
            <span>Next</span>
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="slide-counter">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPresentation;
