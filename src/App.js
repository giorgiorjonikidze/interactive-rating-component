import "./App.css";
import CardWrapper from "./components/cardWrapper";
import SubmitComponent from "./components/submit";
import SuccessComponent from "./components/success";

function App() {
  return (
    <CardWrapper>
      <SubmitComponent />
      {/* <SuccessComponent /> */}
    </CardWrapper>
  );
}

export default App;
