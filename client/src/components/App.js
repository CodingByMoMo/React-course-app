import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => {
  return <h2>Header</h2>;
};
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
          <Route path={"/"} component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
