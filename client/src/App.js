import logo from './logo.svg';
import './App.css';
import { ChatGPTAPI } from 'chatgpt'

function App() {

  async function chatplease() {
    const api = new ChatGPTAPI({ apiKey: "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" })
    let res = await api.sendMessage('What is OpenAI?');
    console.log(res.text);
  }
  return (
    <div className="App">
      {chatplease}
    </div>
  );
}

export default App;
