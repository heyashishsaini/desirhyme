/* eslint-disable react/prop-types */
export default function CategoryFilter({ value, onChange }) {
  const options = [["all", "All artists"], ["indian", "Indian"], ["international", "International"]];
  return <div className="filter-group"><span className="filter-label">Scene</span><div className="category-filter" aria-label="Filter artists by category">{options.map(([key, label]) => <button key={key} type="button" className={value === key ? "active" : ""} onClick={() => onChange(key)}>{label}</button>)}</div></div>;
}
