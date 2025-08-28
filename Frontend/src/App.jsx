import './App.css'
import { useEffect, useState } from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import Editor from 'react-simple-code-editor'
import prism from 'prismjs'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

export default function App() {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
}`);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8888/ai/get-review', { code });
      setReview(response.data.response);
    } catch (error) {
      console.error('Error reviewing code:', error);
      setReview('Error getting review');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className='left'>
          <div className='code'>
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            className='review-btn'
            disabled={loading}
          >
            {loading ? 'Reviewing...' : 'Review'}
          </button>
        </div>
        <div className='right'>
          <div className='review-container'>
            <Markdown
              rehypePlugins={[rehypeHighlight]}
            >{review}</Markdown>
          </div>
        </div>
      </main>
    </>
  );
}
