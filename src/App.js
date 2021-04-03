import './assets/main.css'
import Main from './components/main'
import { BrowserRouter,Route,Switch} from "react-router-dom"
import Shop from './components/layouts/shop';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shop" component={Shop} />
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
