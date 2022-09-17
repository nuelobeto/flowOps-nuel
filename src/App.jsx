import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const SignUp = React.lazy(() => import("./auth/SignUp"));
const Login = React.lazy(() => import("./auth/Login"));
const Confirm = React.lazy(() => import("./auth/RegisterSuccess"));
const Deck = React.lazy(() => import("./dashboard/deck/Deck"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/success"
          element={
            <Suspense fallback={<h1>Loading</h1>}>
              <Confirm />
            </Suspense>
          }
        />
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
