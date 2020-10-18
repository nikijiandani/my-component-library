import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";

const App = () => {
  return (
    <div>
      <PrimaryButton>Hello world</PrimaryButton>
      <SecondaryButton>Hey world</SecondaryButton>
      <TertiaryButton>Goodbye world</TertiaryButton>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
