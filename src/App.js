function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function Bye(props) {
    return <h1>Bye, {props.name}</h1>;
  }
  
  function App() {
    return (
      <div className="app">
        <Welcome name="Elon" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Bye name="Elon" />
      </div>
    );
  }

export default App;