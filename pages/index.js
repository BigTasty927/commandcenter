<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automation Command Center</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
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

        .sidebar {
            background: #111111;
            border-right: 1px solid #333;
            padding: 24px;
        }

        .workspace {
            padding: 24px;
            background: #0f0f0f;
        }

        .tools-panel {
            background: #111111;
            border-left: 1px solid #333;
            padding: 24px;
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

        /* Quick Actions */
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

        .quick-action.secondary {
            background: linear-gradient(135deg, #374151 0%, #6b7280 100%);
        }

        .quick-action.danger {
            background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
        }

        /* AI Idea Generator */
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

        /* Project Grid */
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

        .status-progress {
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

        /* Workflow Builder */
        .workflow-builder {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 20px;
            border: 1px solid #333;
            margin-bottom: 24px;
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

        /* Tools Panel */
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

        /* Search */
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

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }

        .modal.active {
            display: flex;
        }

        .modal-content {
            background: #1a1a1a;
            border-radius: 12px;
            padding: 24px;
            max-width: 500px;
            width: 90%;
            border: 1px solid #333;
        }

        .modal h3 {
            margin-bottom: 16px;
        }

        .form-group {
            margin-bottom: 16px;
        }

        .form-group label {
            display: block;
            margin-bottom: 4px;
            font-size: 14px;
            color: #d1d5db;
        }

        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            background: #0a0a0a;
            border: 1px solid #444;
            border-radius: 6px;
            padding: 10px;
            color: #ffffff;
            font-size: 14px;
        }

        .form-group textarea {
            resize: vertical;
            min-height: 80px;
        }

        .btn-group {
            display: flex;
            gap: 12px;
            justify-content: flex-end;
        }

        .btn {
            padding: 10px 20px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
        }

        .btn-primary {
            background: #3b82f6;
            color: white;
        }

        .btn-secondary {
            background: #374151;
            color: #d1d5db;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 Automation Command Center</h1>
        <p>Unified workspace for automation project management</p>
    </div>

    <div class="main-container">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="section">
                <h3>Quick Actions</h3>
                <button class="quick-action" onclick="openNewProjectModal()">
                    <span>✨</span> New Automation Project
                </button>
                <button class="quick-action secondary" onclick="openAIAssistant()">
                    <span>🤖</span> AI Blueprint Generator
                </button>
                <button class="quick-action secondary" onclick="openCuriosityTracker()">
                    <span>🧠</span> Add Curiosity Entry
                </button>
                <button class="quick-action secondary" onclick="syncNotion()">
                    <span>🔄</span> Sync with Notion
                </button>
                <button class="quick-action danger" onclick="exportAll()">
                    <span>📤</span> Export Everything
                </button>
            </div>

            <div class="section">
                <h3>AI Idea Generator</h3>
                <div class="ai-generator">
                    <textarea class="ai-input" placeholder="Describe what you want to automate..." id="aiIdea"></textarea>
                    <button class="quick-action" onclick="generateBlueprint()">
                        <span>🎯</span> Generate Blueprint
                    </button>
                </div>
            </div>

            <div class="section">
                <h3>Recent Activity</h3>
                <div id="recentActivity">
                    <div style="color: #888; font-size: 12px;">No recent activity</div>
                </div>
            </div>
        </div>

        <!-- Workspace -->
        <div class="workspace">
            <div class="section">
                <input type="text" class="search-box" placeholder="🔍 Search projects, tools, or ideas..." id="searchBox">
                
                <div class="project-grid" id="projectGrid">
                    <!-- Projects will be populated here -->
                    <div class="project-card active">
                        <div class="project-status status-progress">In Progress</div>
                        <div class="project-title">RecipeCard Cataloger</div>
                        <div class="project-meta">
                            <span>Priority: Medium</span>
                            <span>Updated: 2 days ago</span>
                        </div>
                        <p style="font-size: 12px; color: #888; margin-bottom: 12px;">Digitize homemade recipe cards for cooking and planning automation</p>
                        <div class="project-tools">
                            <span class="tool-tag">Make.com</span>
                            <span class="tool-tag">OpenAI</span>
                            <span class="tool-tag">Notion</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-status status-backlog">Backlog</div>
                        <div class="project-title">Viral Vision Factory</div>
                        <div class="project-meta">
                            <span>Priority: High</span>
                            <span>Updated: 1 week ago</span>
                        </div>
                        <p style="font-size: 12px; color: #888; margin-bottom: 12px;">Automated viral content pipeline</p>
                        <div class="project-tools">
                            <span class="tool-tag">YouTube API</span>
                            <span class="tool-tag">Whisper</span>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="project-status status-completed">Completed</div>
                        <div class="project-title">GroomBot</div>
                        <div class="project-meta">
                            <span>Priority: Low</span>
                            <span>Updated: 3 weeks ago</span>
                        </div>
                        <p style="font-size: 12px; color: #888; margin-bottom: 12px;">Brand-aligned chatbot for sales conversion</p>
                        <div class="project-tools">
                            <span class="tool-tag">ChatGPT</span>
                            <span class="tool-tag">Zapier</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h3>Active Workflow</h3>
                <div class="workflow-builder">
                    <div class="workflow-step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <div class="step-title">Idea Capture</div>
                            <div class="step-description">Voice input → Fine-tuned OpenAI model</div>
                        </div>
                    </div>
                    <div class="workflow-step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <div class="step-title">Blueprint Generation</div>
                            <div class="step-description">AI generates structured automation plan</div>
                        </div>
                    </div>
                    <div class="workflow-step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <div class="step-title">Project Creation</div>
                            <div class="step-description">Auto-create Notion page + database entry</div>
                        </div>
                    </div>
                    <div class="workflow-step">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <div class="step-title">File Organization</div>
                            <div class="step-description">Smart folder creation + asset management</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tools Panel -->
        <div class="tools-panel">
            <div class="section">
                <h3>Connected Tools</h3>
                <div class="tool-item">
                    <span>OpenAI API</span>
                    <div class="tool-status"></div>
                </div>
                <div class="tool-item">
                    <span>Notion</span>
                    <div class="tool-status"></div>
                </div>
                <div class="tool-item">
                    <span>Make.com</span>
                    <div class="tool-status"></div>
                </div>
                <div class="tool-item">
                    <span>n8n</span>
                    <div class="tool-status offline"></div>
                </div>
                <div class="tool-item">
                    <span>Zapier</span>
                    <div class="tool-status"></div>
                </div>
            </div>

            <div class="section">
                <h3>Curiosity Tracker</h3>
                <div class="curiosity-item">
                    <div class="curiosity-title">API Rate Limits</div>
                    <div class="curiosity-meta">RecipeCard Project • High Priority</div>
                </div>
                <div class="curiosity-item">
                    <div class="curiosity-title">Image Recognition</div>
                    <div class="curiosity-meta">Viral Vision • Medium Priority</div>
                </div>
                <div class="curiosity-item">
                    <div class="curiosity-title">Webhook Security</div>
                    <div class="curiosity-meta">General • Low Priority</div>
                </div>
            </div>

            <div class="section">
                <h3>File Assets</h3>
                <div style="color: #888; font-size: 12px; margin-bottom: 8px;">
                    📁 Latest downloads auto-organized to current project
                </div>
                <div class="tool-item">
                    <span style="font-size: 12px;">blueprint_v2.md</span>
                    <span style="font-size: 10px; color: #888;">2min ago</span>
                </div>
                <div class="tool-item">
                    <span style="font-size: 12px;">api_docs.pdf</span>
                    <span style="font-size: 10px; color: #888;">1hr ago</span>
                </div>
            </div>

            <div class="section">
                <h3>System Health</h3>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-size: 12px;">API Quota</span>
                    <span style="font-size: 12px; color: #10b981;">78% left</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-size: 12px;">Storage</span>
                    <span style="font-size: 12px; color: #f59e0b;">92% used</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-size: 12px;">Sync Status</span>
                    <span style="font-size: 12px; color: #10b981;">Live</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals -->
    <div class="modal" id="newProjectModal">
        <div class="modal-content">
            <h3>🚀 New Automation Project</h3>
            <form id="newProjectForm">
                <div class="form-group">
                    <label>Project Name</label>
                    <input type="text" id="projectName" placeholder="Enter project name...">
                </div>
                <div class="form-group">
                    <label>Automation Goal</label>
                    <textarea id="projectGoal" placeholder="What do you want to automate?"></textarea>
                </div>
                <div class="form-group">
                    <label>Priority</label>
                    <select id="projectPriority">
                        <option value="low">Low</option>
                        <option value="medium" selected>Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Primary Tools</label>
                    <input type="text" id="projectTools" placeholder="Make.com, OpenAI, Notion...">
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-secondary" onclick="closeModal('newProjectModal')">Cancel</button>
                    <button type="button" class="btn btn-primary" onclick="createProject()">Create Project</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // Modal management
        function openNewProjectModal() {
            document.getElementById('newProjectModal').classList.add('active');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.remove('active');
        }

        function openAIAssistant() {
            alert('AI Assistant integration coming soon! This will connect to your fine-tuned OpenAI model.');
        }

        function openCuriosityTracker() {
            alert('Curiosity Tracker form coming soon! This will add entries directly to your Notion database.');
        }

        function syncNotion() {
            alert('Notion sync starting... This will pull your latest projects and push any changes.');
        }

        function exportAll() {
            alert('Exporting all data... This will create a backup of projects, files, and settings.');
        }

        function generateBlueprint() {
            const idea = document.getElementById('aiIdea').value;
            if (!idea.trim()) {
                alert('Please describe your automation idea first');
                return;
            }
            
            alert(`Generating automation blueprint for: "${idea}"\n\nThis will use your fine-tuned OpenAI model to create a structured plan.`);
            
            // Clear the input
            document.getElementById('aiIdea').value = '';
        }

        function createProject() {
            const name = document.getElementById('projectName').value;
            const goal = document.getElementById('projectGoal').value;
            const priority = document.getElementById('projectPriority').value;
            const tools = document.getElementById('projectTools').value;
            
            if (!name.trim() || !goal.trim()) {
                alert('Please fill in at least the project name and goal');
                return;
            }
            
            alert(`Creating project: "${name}"\n\nThis will:\n1. Create Notion page\n2. Add to database\n3. Set up file folders\n4. Initialize curiosity tracker`);
            
            closeModal('newProjectModal');
            
            // Clear form
            document.getElementById('newProjectForm').reset();
        }

        // Search functionality
        document.getElementById('searchBox').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // Implement search logic here
        });

        // Click outside modal to close
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.metaKey || e.ctrlKey) {
                switch(e.key) {
                    case 'n':
                        e.preventDefault();
                        openNewProjectModal();
                        break;
                    case 'k':
                        e.preventDefault();
                        document.getElementById('searchBox').focus();
                        break;
                }
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Automation Command Center loaded');
        });
    </script>
</body>
</html>
