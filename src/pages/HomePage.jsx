import { useEffect, useMemo, useState } from "react";
import ArtistGrid from "../components/artists/ArtistGrid";
import CategoryFilter from "../components/artists/CategoryFilter";
import SortFilter from "../components/artists/SortFilter";
import SearchBar from "../components/search/SearchBar";
import { getArtists } from "../services/artistService";
import { searchArtists, sortArtists } from "../utils/search";

export default function HomePage() {
  const [artists, setArtists] = useState([]); const [query, setQuery] = useState(""); const [category, setCategory] = useState("all"); const [order, setOrder] = useState("newest"); const [error, setError] = useState("");
  useEffect(() => { getArtists().then(setArtists).catch(() => setError("We could not load the artist catalogue.")); }, []);
  const results = useMemo(() => sortArtists(searchArtists(category === "all" ? artists : artists.filter((artist) => artist.category === category), query), order), [artists, category, query, order]);
  return <><section className="hero"><p className="eyebrow">Desi hip-hop discovery</p><h1>No Limits,<br /><em>Just Lyrics.</em></h1><p>Explore artists shaping Indian and international hip-hop, one voice at a time.</p><SearchBar value={query} onChange={setQuery} /></section><section className="content-section"><div className="section-heading"><div><p className="eyebrow">Artist catalogue</p><h2>{query ? `Results for “${query}”` : "Discover the scene"}</h2></div><p>{artists.length ? `${results.length} artists` : "Loading artists…"}</p></div><div className="catalogue-controls"><CategoryFilter value={category} onChange={setCategory} /><SortFilter value={order} onChange={setOrder} /></div>{error ? <p className="empty-state">{error}</p> : <ArtistGrid artists={results} />}</section></>;
}
