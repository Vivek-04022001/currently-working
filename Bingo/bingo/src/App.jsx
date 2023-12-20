import { BrowserRouter as Router, Route, Link } from "react-dom";
function App() {
  return (
    <>
      <section>
        {/* upper section */}
        <header>
          <nav>
            <ul>
              <li>Rules</li>
              <li>Random</li>
              <li>Questions</li>
            </ul>
            <h1>Bible Quest Bingo Challenge</h1>
          </nav>
        </header>

        {/* lower section */}
        <section>
          <main>
            <Router>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Router>
          </main>
        </section>
      </section>
    </>
  );
}

export default App;
