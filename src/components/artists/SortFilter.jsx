/* eslint-disable react/prop-types */
export default function SortFilter({ value, onChange }) {
  const options = [["newest", "Newly added"], ["oldest", "Oldest added"], ["alphabetical", "A–Z"]];
  return <div className="filter-group"><span className="filter-label">Sort by</span><div className="sort-filter" aria-label="Sort artists">{options.map(([key, label]) => <button key={key} type="button" className={value === key ? "active" : ""} onClick={() => onChange(key)}>{label}</button>)}</div></div>;
}
