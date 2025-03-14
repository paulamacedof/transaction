interface AppProps {
  state: {
    home: string;
    statement: string;
  };
  actions: {
    setState: (newState: { home: string; statement: string }) => void;
  };
}

function App({ state, actions }: AppProps | any) {
  const handleClick = () => {
    actions.setState({
      ...state,
      statement: "statement",
    });
  };

  return (
    <div className="bg-black text-white">
      <p>statement: {state?.statement}</p>
      <p>home: {state?.home}</p>
      <button onClick={handleClick}>state statement</button>
    </div>
  );
}

export default App;
