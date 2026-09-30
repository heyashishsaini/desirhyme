let cataloguePromise;

export function getCatalogue() {
  if (!cataloguePromise) cataloguePromise = fetch("/data/catalog.json").then((response) => {
    if (!response.ok) throw new Error("Catalogue data could not be loaded.");
    return response.json();
  });
  return cataloguePromise;
}

export async function getArtists() { return [...(await getCatalogue()).artists].sort((first, second) => Number(second.id) - Number(first.id)); }
export async function getArtistBySlug(slug) { return (await getArtists()).find((artist) => artist.slug === slug) ?? null; }
export async function getArtistsByCategory(category) { return (await getArtists()).filter((artist) => artist.category === category); }
