/* eslint-disable react/prop-types */
export default function SearchBar({ value, onChange }) { return <label className="search-bar"><span aria-hidden="true">⌕</span><span className="sr-only">Search artists</span><input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search artists, scenes or lyrics…" type="search" /></label>; }
