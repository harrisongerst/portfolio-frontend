import "./App.css";


import { Outlet } from "react-router";


function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "https://harrisongerst.herokuapp.com/";

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;