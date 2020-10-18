import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers={["small", "error", "primaryButtonError"]}>
        Hello world
      </PrimaryButton>
      <SecondaryButton
        modifiers={["large", "warning", "secondaryButtonWarning"]}
      >
        Goodbye world
      </SecondaryButton>
      <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
        Goodbye world
      </TertiaryButton>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
