import './App.css';
import Header from './components/header'
import Meme from './components/meme'
import MemeContent from './components/memeContent'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <Meme />
          <MemeContent />
        </div>
      </div>
    </div>
  );
}

export default App;
