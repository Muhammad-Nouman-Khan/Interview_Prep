import React from "react";
import SignUp from "./pages/SignUp";
import { Routes, Route, Navigate } from "react-router";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import useAuthUser from "./hooks/useAuthUser";
import PageLoader from "./components/PageLoader";

const App = () => {
  const { isLoading, authUser } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div className="min-h-screen" data-theme="synthwave">
      <Routes>
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/signin" />}
        />
      </Routes>
    </div>
  );
};

export default App;
