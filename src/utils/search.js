export function searchArtists(artists, query) {
  const term = query.trim().toLocaleLowerCase();
  return term ? artists.filter(({ name, bio, category }) => [name, bio, category].some((value) => value.toLocaleLowerCase().includes(term))) : artists;
}

export function sortArtists(artists, order) {
  const sorted = [...artists];
  if (order === "alphabetical") return sorted.sort((first, second) => first.name.localeCompare(second.name));
  if (order === "oldest") return sorted.sort((first, second) => Number(first.id) - Number(second.id));
  return sorted.sort((first, second) => Number(second.id) - Number(first.id));
}
