/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ArtistGrid from "../components/artists/ArtistGrid";
import SortFilter from "../components/artists/SortFilter";
import SearchBar from "../components/search/SearchBar";
import { getArtistsByCategory } from "../services/artistService";
import { searchArtists, sortArtists } from "../utils/search";
export default function CategoryPage({ category }) { const [artists, setArtists] = useState([]); const [query, setQuery] = useState(""); const [order, setOrder] = useState("newest"); useEffect(() => { getArtistsByCategory(category).then(setArtists); }, [category]); const title = category === "indian" ? "Indian hip-hop" : "International hip-hop"; return <section className="content-section category-page"><p className="eyebrow">{category}</p><h1>{title}</h1><p className="page-intro">Artists linked to their official streaming profiles.</p><SearchBar value={query} onChange={setQuery} /><div className="catalogue-controls"><SortFilter value={order} onChange={setOrder} /></div><ArtistGrid artists={sortArtists(searchArtists(artists, query), order)} /></section>; }
