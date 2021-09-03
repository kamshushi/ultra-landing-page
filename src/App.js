import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./pages/HomePage/Home";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route to="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
