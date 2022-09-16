import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Deck = React.lazy(() => import("./dashboard/deck/Deck"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Deck />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
