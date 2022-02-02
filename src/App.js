import './App.css';
import Header from './components/header'
import Meme from './components/meme'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="content">
          <Meme />
        </div>
      </div>
    </div>
  );
}

export default App;
