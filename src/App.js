import About from "./pages/About";
import Home from "./pages/Home";
import CustomerPage from "./pages/CustomerPage";
import Route from "./components/Route";

function App() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/customer">
        <CustomerPage />
      </Route>
    </div>
  );
}

export default App;
