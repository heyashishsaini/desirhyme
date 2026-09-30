/* eslint-disable react/prop-types */
import ArtistCard from "./ArtistCard";
export default function ArtistGrid({ artists }) { return artists.length ? <div className="artist-grid">{artists.map((artist) => <ArtistCard key={artist.id} artist={artist} />)}</div> : <p className="empty-state">No artists match that search yet.</p>; }
