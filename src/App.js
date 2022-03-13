import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MovieList from "./Components/MovieList";
import { BsFillBugFill } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/admin" component={MovieList}  />
          <BsFillBugFill path="/admin" component={MovieList}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;