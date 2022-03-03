import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Coins from './pages/coins';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <RecoilRoot>
          <Coins></Coins>
        </RecoilRoot>
      </div>
    </Router>
  );
}

export default App;
