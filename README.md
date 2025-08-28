# Code Reviewer AI 🤖

An AI-powered code review tool that uses Google's Gemini AI to provide instant code reviews, suggestions, and optimizations for your code.

## Features ✨

- **Real-time Code Analysis**: Get instant feedback on your code
- **Smart Suggestions**: Receive optimization recommendations and best practices
- **Syntax Highlighting**: Built-in support for JavaScript code highlighting
- **Markdown Rendering**: Clean and formatted AI responses with code blocks
- **Responsive Design**: Works seamlessly on different screen sizes

## Tech Stack 🛠️

### Frontend
- React
- Prism.js (for syntax highlighting)
- React Markdown
- Axios
- CSS3

### Backend
- Node.js
- Express
- Google Gemini AI
- CORS

## Getting Started 🚀

### Prerequisites
- Node.js (v20.x or higher)
- npm (v8.x or higher)
- Google Gemini API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/code-reviewer-AI.git
cd code-reviewer-AI
```

2. Install Backend Dependencies
```bash
cd Backend
npm install
```

3. Configure Environment Variables
```bash
# Create a .env file in the Backend directory
GOOGLE_GEMINI_KEY=your_api_key_here
PORT=8888
```

4. Install Frontend Dependencies
```bash
cd ../Frontend
npm install
```

### Running the Application

1. Start the Backend Server
```bash
cd Backend
npm start
```

2. Start the Frontend Development Server
```bash
cd Frontend
npm run dev
```

The application should now be running at `http://localhost:5173`

## Usage 💻

1. Enter your code in the left editor panel
2. Click the "Review" button
3. Wait for the AI to analyze your code
4. Review the suggestions and improvements in the right panel

## API Endpoints 🔌

- `POST /ai/get-review`
  - Body: `{ code: string }`
  - Returns: AI-generated code review and suggestions

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments 🙏

- Google Gemini AI for powering the code analysis
- React Simple Code Editor for the code editing interface
- The open-source community for various tools and libraries used in this project
