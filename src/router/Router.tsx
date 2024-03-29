import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { GraphQLFetch } from "../components/pages/GraphQLFetch";
import { GraphQLFetchCSV } from "../components/pages/GraphQLFetchCSV";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetch" element={<GraphQLFetch />} />
        <Route path="/fetchcsv" element={<GraphQLFetchCSV />} />
      </Routes>
    </BrowserRouter>
  );
});
