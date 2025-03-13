import "./App.css";

function App({ state, actions }) {
  return (
    <div className="App">
      <header className="App-header">{state?.microfrontendTitle}</header>
    </div>
  );
}

export default App;
