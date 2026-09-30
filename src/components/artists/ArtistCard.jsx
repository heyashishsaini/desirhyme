/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export default function ArtistCard({ artist }) { return <article className="artist-card"><Link to={`/artist/${artist.slug}`}><img src={artist.imageUrl} alt={artist.name} loading="lazy" /></Link><div><p className="eyebrow">{artist.category}</p><h2><Link to={`/artist/${artist.slug}`}>{artist.name}</Link></h2><p>{artist.bio}</p></div><Link className="text-link" to={`/artist/${artist.slug}`}>View profile →</Link></article>; }
