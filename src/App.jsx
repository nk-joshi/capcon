import Body from "./components/Body";
import HeaderIcon from "./assets/header.svg";

function App() {
  return (
    <>
      <img fetchPriority="high" src={HeaderIcon} alt="header image" />
      <Body />
    </>
  );
}

export default App;
