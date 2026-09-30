import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ArtistPage from "./pages/ArtistPage";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return <Routes><Route element={<Layout />}><Route index element={<HomePage />} /><Route path="indian" element={<CategoryPage category="indian" />} /><Route path="international" element={<CategoryPage category="international" />} /><Route path="artist/:slug" element={<ArtistPage />} /><Route path="*" element={<HomePage />} /></Route></Routes>;
}
