import { getArtists } from "./artistService";
export async function getSongsByArtistId(artistId) { return ((await getArtists()).find((artist) => artist.id === artistId)?.songs) ?? []; }
