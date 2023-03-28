import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const SurveyNew = () => {
  return <h2>New Survey!</h2>;
};
const Landing = () => {
  return <h2>Landing page</h2>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/surveys"} component={Dashboard} />
          <Route exact path={"/surveys/new"} component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
