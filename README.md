# desiRhyme

A static React/Vite artist-discovery site for Indian and international hip-hop.

## Development

```bash
npm install
npm run dev
```

Use `npm run lint` and `npm run build` before deploying. Vercel is configured to serve the React single-page application, including artist profile URLs.

## Content model

The public UI reads through the service layer in `src/services/`; it does not import data files directly. The current static source is:

- `public/data/catalog.json`

`catalog.json` holds the artist catalogue. Add songs inside the matching artist object:

```json
{
  "id": "stable-id",
  "slug": "artist-name",
  "name": "Artist Name",
  "category": "indian",
  "bio": "Short artist biography.",
  "imageUrl": "https://example.com/artist-image.jpg",
  "spotifyUrl": "https://open.spotify.com/artist/...",
  "youtubeUrl": "https://www.youtube.com/@officialartist",
  "instagramUrl": "https://www.instagram.com/officialartist/",
  "songs": [
    {
      "id": "unique-song-id",
      "title": "Song title",
      "url": "https://open.spotify.com/track/..."
    }
  ]
}
```

Use `category: "indian"` or `category: "international"`. Slugs must be unique because profiles use `/artist/<slug>` URLs.

`youtubeUrl` and `instagramUrl` are optional. Add only verified official channel/profile URLs; the buttons appear automatically on the artist profile.

Artist IDs are sequential strings. For a new artist, use the next number (for example, after `"57"`, use `"58"`). The catalogue sorts IDs in descending order, so a new artist automatically appears first on the home page and in its category.

Songs are intentionally empty until verified details are available. A song's `url` can be an official Spotify, YouTube, Apple Music, SoundCloud, or other destination; its Listen button opens that link in a new tab. The app does not download, scrape, proxy, or host music.

## Deployment

Push the repository to GitHub and import it in Vercel. No Appwrite environment variables or backend service are required; changes to the JSON files deploy with the app.
