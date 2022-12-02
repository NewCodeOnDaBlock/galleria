import './App.css';
import './style/NFTCard.css'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import NFTCard from './components/NFTCard';


function App() {
  return (
  <div className="main-container">
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <NFTCard />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
