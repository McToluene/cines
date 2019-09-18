import React from "react";

import Movies from "./components/movies/Movies";
import "./App.css";

const App: React.FC = () => {
  return (
    <main className="ui container">
      <Movies />
    </main>
  );
};

export default App;
