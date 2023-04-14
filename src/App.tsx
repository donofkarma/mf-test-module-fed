import React, { FC } from "react";
import ReactDOM from "react-dom";
import Content from "./components/Content";

const App: FC = () => <Content />;

ReactDOM.render(<App />, document.getElementById("app"));
