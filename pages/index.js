import { useState, useEffect } from 'react'
import Head from 'next/head'

export default function CommandCenter() {
  const [projects, setProjects] = useState([])
  const [activeProject, setActiveProject] = useState(null)
  const [aiInput, setAiInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  useEffect(() => {
    // Sample projects for demo
    const sampleProjects = [
      {
        id: 1,
        name: "RecipeCard Cataloger",
        status: "In Progress",
        priority: "Medium",
        goal: "Digitize homemade recipe cards for cooking and planning automation",
        tools: ["Make.com", "OpenAI", "Notion"],
        lastUpdated: "2 days ago"
      },
      {
        id: 2,
        name: "Viral Vision Factory", 
        status: "Backlog",
        priority: "High",
        goal: "Automated viral content pipeline",
        tools: ["YouTube API", "Whisper"],
        lastUpdated: "1 week ago"
      },
      {
        id: 3,
        name: "GroomBot",
        status: "Completed",
        priority: "Low",
        goal: "Brand-aligned chatbot for sales conversion",
        tools: ["ChatGPT", "Zapier"],
        lastUpdated: "3 weeks ago"
      }
    ]
    setProjects(sampleProjects)
  }, [])

  const generateBlueprint = async () => {
    if (!aiInput.trim()) {
      alert('Please describe your automation idea first')
      return
    }
    
    setIsGenerating(true)
    try {
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert(`Generating automation blueprint for: "${aiInput}"\n\nThis will use your fine-tuned OpenAI model to create a structured plan.`)
      setAiInput('')
    } catch (error) {
      console.error('Error generating blueprint:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const createProject = () => {
    alert('Project creation modal would open here')
  }

  const openCuriosityTracker = () => {
    alert('Curiosity Tracker form coming soon!')
  }

  const syncNotion = () => {
    alert('Notion sync starting...')
  }

  const exportAll = () => {
    alert('Exporting all data...')
  }

  return (
    <>
      <Head>
        <title>Automation Command Center</title>
        <meta name="description" content="Unified automation project management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="command-center">
        <div className="header">
          <h1>🚀 Automation Command Center</h1>
          <p>Unified workspace for automation project management</p>
        </div>

        <div className="main-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div className="section">
              <h3>Quick Actions</h3>
              <button className="quick-action" onClick={createProject}>
                <span>✨</span> New Automation Project
              </button>
              <button className="quick-action secondary" onClick={generateBlueprint}>
                <span>🤖</span> AI Blueprint Generator
              </button>
              <button className="quick-action secondary" onClick={openCuriosityTracker}>
                <span>🧠</span> Add Curiosity Entry
              </button>
              <button className="quick-action secondary" onClick={syncNotion}>
                <span>🔄</span> Sync with Notion
              </button>
              <button className="quick-action danger" onClick={exportAll}>
                <span>📤</span> Export Everything
              </button>
            </div>

            <div className="section">
              <h3>AI Idea Generator</h3>
              <div className="ai-generator">
                <textarea 
                  className="ai-input" 
                  placeholder="Describe what you want to automate..."
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                />
                <button 
                  className="quick-action" 
                  onClick={generateBlueprint}
                  disabled={isGenerating}
                >
                  <span>🎯</span> 
                  {isGenerating ? 'Generating...' : 'Generate Blueprint'}
                </button>
              </div>
            </div>

            <div className="section">
              <h3>Recent Activity</h3>
              <div style={{color: '#888', fontSize: '12px'}}>No recent activity</div>
            </div>
          </div>

          {/* Workspace */}
          <div className="workspace">
            <div className="section">
              <input 
                type="text" 
                className="search-box" 
                placeholder="🔍 Search projects, tools, or ideas..."
              />
              
              <div className="project-grid">
                {projects.map(project => (
                  <div 
                    key={project.id} 
                    className={`project-card ${activeProject?.id === project.id ? 'active' : ''}`}
                    onClick={() => setActiveProject(project)}
                  >
                    <div className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </div>
                    <div className="project-title">{project.name}</div>
                    <div className="project-meta">
                      <span>Priority: {project.priority}</span>
                      <span>Updated: {project.lastUpdated}</span>
                    </div>
                    <p style={{fontSize: '12px', color: '#888', marginBottom: '12px'}}>
                      {project.goal}
                    </p>
                    <div className="project-tools">
                      {project.tools.map(tool => (
                        <span key={tool} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section">
              <h3>Active Workflow</h3>
              <div className="workflow-builder">
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <div className="step-title">Idea Capture</div>
                    <div className="step-description">Voice input → Fine-tuned OpenAI model</div>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <div className="step-title">Blueprint Generation</div>
                    <div className="step-description">AI generates structured automation plan</div>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <div className="step-title">Project Creation</div>
                    <div className="step-description">Auto-create Notion page + database entry</div>
                  </div>
                </div>
                <div className="workflow-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <div className="step-title">File Organization</div>
                    <div className="step-description">Smart folder creation + asset management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Panel */}
          <div className="tools-panel">
            <div className="section">
              <h3>Connected Tools</h3>
              <div className="tool-item">
                <span>OpenAI API</span>
                <div className="tool-status"></div>
              </div>
              <div className="tool-item">
                <span>Notion</span>
                <div className="tool-status"></div>
              </div>
              <div className="tool-item">
                <span>Make.com</span>
                <div className="tool-status"></div>
              </div>
              <div className="tool-item">
                <span>n8n</span>
                <div className="tool-status offline"></div>
              </div>
              <div className="tool-item">
                <span>Zapier</span>
                <div className="tool-status"></div>
              </div>
            </div>

            <div className="section">
              <h3>Curiosity Tracker</h3>
              <div className="curiosity-item">
                <div className="curiosity-title">API Rate Limits</div>
                <div className="curiosity-meta">RecipeCard Project • High Priority</div>
              </div>
              <div className="curiosity-item">
                <div className="curiosity-title">Image Recognition</div>
                <div className="curiosity-meta">Viral Vision • Medium Priority</div>
              </div>
              <div className="curiosity-item">
                <div className="curiosity-title">Webhook Security</div>
                <div className="curiosity-meta">General • Low Priority</div>
              </div>
            </div>

            <div className="section">
              <h3>File Assets</h3>
              <div style={{color: '#888', fontSize: '12px', marginBottom: '8px'}}>
                📁 Latest downloads auto-organized to current project
              </div>
              <div className="tool-item">
                <span style={{fontSize: '12px'}}>blueprint_v2.md</span>
                <span style={{fontSize: '10px', color: '#888'}}>2min ago</span>
              </div>
              <div className="tool-item">
                <span style={{fontSize: '12px'}}>api_docs.pdf</span>
                <span style={{fontSize: '10px', color: '#888'}}>1hr ago</span>
              </div>
            </div>

            <div className="section">
              <h3>System Health</h3>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                <span style={{fontSize: '12px'}}>API Quota</span>
                <span style={{fontSize: '12px', color: '#10b981'}}>78% left</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '8px'}}>
                <span style={{fontSize: '12px'}}>Storage</span>
                <span style={{fontSize: '12px', color: '#f59e0b'}}>92% used</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontSize: '12px'}}>Sync Status</span>
                <span style={{fontSize: '12px', color: '#10b981'}}>Live</span>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .command-center {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            background: #0a0a0a;
            color: #ffffff;
            min-height: 100vh;
          }

          .header {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
            padding: 20px 40px;
            border-bottom: 1px solid #333;
          }

          .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
          }

          .header p {
            color: #888;
            font-size: 14px;
          }

          .main-container {
            display: grid;
            grid-template-columns: 320px 1fr 280px;
            min-height: calc(100vh - 80px);
          }

          .sidebar, .tools-panel {
            background: #111111;
            padding: 24px;
          }

          .sidebar {
            border-right: 1px solid #333;
          }

          .tools-panel {
            border-left: 1px solid #333;
          }

          .workspace {
            padding: 24px;
            background: #0f0f0f;
          }

          .section {
            margin-bottom: 24px;
          }

          .section h3 {
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .quick-action {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            border: none;
            color: white;
            padding: 12px 16px;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .quick-action:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
          }

          .quick-action:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .quick-action.secondary {
            background: linear-gradient(135deg, #374151 0%, #6b7280 100%);
          }

          .quick-action.danger {
            background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
          }

          .ai-generator {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #333;
          }

          .ai-input {
            width: 100%;
            background: #0a0a0a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 12px;
            color: #ffffff;
            font-size: 14px;
            resize: vertical;
            min-height: 80px;
            margin-bottom: 12px;
          }

          .ai-input:focus {
            outline: none;
            border-color: #3b82f6;
          }

          .search-box {
            width: 100%;
            background: #0a0a0a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 12px;
            color: #ffffff;
            font-size: 14px;
            margin-bottom: 16px;
          }

          .search-box:focus {
            outline: none;
            border-color: #3b82f6;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
          }

          .project-card {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #333;
            cursor: pointer;
            transition: all 0.2s;
          }

          .project-card:hover {
            border-color: #3b82f6;
            transform: translateY(-2px);
          }

          .project-card.active {
            border-color: #3b82f6;
            background: #1e3a8a20;
          }

          .project-status {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 8px;
          }

          .status-backlog {
            background: #374151;
            color: #d1d5db;
          }

          .status-in-progress {
            background: #f59e0b;
            color: #000000;
          }

          .status-completed {
            background: #059669;
            color: #ffffff;
          }

          .project-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
            color: #ffffff;
          }

          .project-meta {
            font-size: 12px;
            color: #888;
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
          }

          .project-tools {
            display: flex;
            gap: 4px;
            flex-wrap: wrap;
          }

          .tool-tag {
            background: #374151;
            color: #d1d5db;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 10px;
          }

          .workflow-builder {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #333;
          }

          .workflow-step {
            background: #0a0a0a;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .step-number {
            background: #3b82f6;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 600;
          }

          .step-content {
            flex: 1;
          }

          .step-title {
            font-weight: 600;
            margin-bottom: 4px;
          }

          .step-description {
            font-size: 12px;
            color: #888;
          }

          .tool-item {
            background: #1a1a1a;
            border: 1px solid #333;
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .tool-status {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10b981;
          }

          .tool-status.offline {
            background: #ef4444;
          }

          .curiosity-item {
            background: #1a1a1a;
            border-left: 3px solid #f59e0b;
            padding: 12px;
            margin-bottom: 8px;
            border-radius: 0 8px 8px 0;
          }

          .curiosity-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 4px;
          }

          .curiosity-meta {
            font-size: 12px;
            color: #888;
          }

          @media (max-width: 1024px) {
            .main-container {
              grid-template-columns: 1fr;
            }
            
            .sidebar, .tools-panel {
              padding: 16px;
            }
          }
        `}</style>
      </div>
    </>
  )
}
