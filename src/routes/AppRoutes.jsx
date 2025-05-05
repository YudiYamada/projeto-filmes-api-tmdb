import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Search from "../pages/Search";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;