# Brazilian Tourist Guide

A personal, front-end-only travel guide for exploring Brazil, the state of
Ceará, and the city of Fortaleza — built with Angular, Leaflet, and
OpenStreetMap. There is no backend: all content lives in editable
TypeScript data files, and all maps use the free OpenStreetMap tile layer
(no API key required).

This is a personal project, not an official or verified source. See the
disclaimer in the site footer.

## 1. Install dependencies

```bash
npm install
```

## 2. Run the development server

```bash
npm start
```

Then open `http://localhost:4200/`. The app reloads automatically as you edit files.

## 3. Create a production build

```bash
npm run build
```

Output is written to `dist/brazilian-tourist-guide/browser/`. This is a fully static site — every file in that folder can be uploaded as-is to any static host.

---

## Where to edit content

Everything visible on the site is driven by data files under `src/app/data/` and model interfaces under `src/app/shared/models/`. You should never need to edit a component's `.ts`/`.html` file just to change text, add a destination, or update a tip.

### Homepage text

`src/app/data/page-content.data.ts`

- `HOME_HERO` — the homepage hero (eyebrow, heading, description, image).
- `BRAZIL_HERO`, `CEARA_HERO`, `FORTALEZA_HERO` — hero content for each guide page.
- `GUIDE_SECTION_CARDS` — the three large "Brazil / Ceará / Fortaleza" cards on the homepage.
- `HOW_TO_USE_STEPS` — the "How to use this guide" steps.
- `CEARA_COAST_COMPARISON` — the West Coast vs East Coast comparison cards on the Ceará page.
- `DISCLAIMER_TEXT` — the disclaimer shown in the footer.

### General travel tips (shown on the homepage)

`src/app/data/general-tips.data.ts` — an array of `TravelTip` objects. Add a new object to the `GENERAL_TIPS` array to add a new tip card. Each tip supports `title`, `summary`, `details` (a bullet list), an `icon` (see the icon list below), and an optional `lastUpdated` date.

### Page-specific tips

- `src/app/data/brazil-tips.data.ts` → `BRAZIL_TIPS`
- `src/app/data/ceara-tips.data.ts` → `CEARA_TIPS`
- `src/app/data/fortaleza-tips.data.ts` → `FORTALEZA_TIPS`

Same `TravelTip` shape as above.

### Adding Brazil destinations

`src/app/data/brazil-destinations.data.ts` — append an object to the `BRAZIL_DESTINATIONS` array. Look at the existing entries for the expected shape (see "Destination fields" below). `region` should be one of `North`, `Northeast`, `Central-West`, `Southeast`, `South` to work with the existing filters, but the filters actually read whatever values are present in the data — introducing a new region or category string will make it show up as a new filter option automatically.

### Adding Ceará destinations

`src/app/data/ceara-destinations.data.ts` — append to `CEARA_DESTINATIONS`. Use `region` set to `"West Coast"`, `"East Coast"`, or `"Other Ceará Destinations"` to control which group/coast selector a destination appears under.

### Adding Fortaleza attractions

`src/app/data/fortaleza-destinations.data.ts` — append to `FORTALEZA_DESTINATIONS`. Use `region` for the neighborhood name (e.g. `"Praia de Iracema"`) and `category` for the activity type (e.g. `"Beaches"`, `"Culture"`, `"Food"`, `"Nightlife"`, `"Nature"`, `"Shopping"`, `"Daytime activities"`, `"Evening activities"`). Set `suggestedTimeOfDay` (e.g. `"Morning"`, `"Evening"`) to show a time-of-day note on the detail page. Set `featured: true` to have a destination appear in the "Featured experiences" strip at the top of the page.

### Destination fields

Every destination (Brazil, Ceará, or Fortaleza) uses the same `TravelDestination` interface, defined in `src/app/shared/models/travel-destination.model.ts`:

```ts
{
  id: 'brazil-rio-de-janeiro',      // unique, stable id
  slug: 'rio-de-janeiro',           // used in the URL: /destination/:slug
  name: 'Rio de Janeiro',
  shortDescription: 'A short one- or two-sentence summary.',
  fullDescription: 'Optional longer paragraph for the detail page.',
  region: 'Southeast',              // optional — powers the region filter
  category: 'City',                 // optional — powers the category filter
  coordinates: { lat: -22.9068, lng: -43.1729 }, // optional — see below
  image: '/images/destinations/brazil/rio-de-janeiro.jpg', // optional
  imageAlt: 'Descriptive alt text for the image',
  highlights: ['Highlight one', 'Highlight two'],   // optional
  activities: ['Activity one', 'Activity two'],     // optional
  practicalTips: ['Tip one', 'Tip two'],            // optional
  suggestedTimeOfDay: 'Morning',    // optional, mainly used on the Fortaleza page
  guideUrl: '',                     // optional link to a full written guide
  externalUrl: '',                  // optional link to an external reference
  featured: false,                  // optional — highlights the card
  lastUpdated: '2026-01-01'         // optional ISO date
}
```

Every field except `id`, `slug`, `name`, and `shortDescription` is optional. A destination with only the required fields still renders correctly everywhere — sections with no data (e.g. no `highlights`) are simply hidden on the detail page instead of showing an empty heading.

You never need to edit more than one array to add a destination: the `DestinationService` (`src/app/services/destination.service.ts`) reads directly from these three arrays, and every page, filter, and map derives its options from whatever is actually in the data.

### How to add map coordinates

Set the `coordinates` field to `{ lat: <number>, lng: <number> }` using decimal degrees (e.g. from Google Maps or OpenStreetMap — right-click a location and copy the coordinates). If you don't have coordinates yet, just omit the field entirely: the destination will still appear in card lists everywhere, and the interactive map will show a "No mappable locations" note instead of breaking.

Default map centers/zoom levels for each guide page, plus tile layer and clustering settings, live in one place: `src/app/core/config/map.config.ts`.

### How to add a complete-guide link

Set `guideUrl` on a destination to a full URL (e.g. a blog post or a more detailed write-up). A "Read the complete guide" button appears automatically on the map popup and the destination detail page. Use `externalUrl` the same way for a secondary "More information" link (e.g. an official tourism site or Wikipedia). Both links always open in a new tab safely (`target="_blank" rel="noopener noreferrer"`).

### How to replace placeholder images

Every `image` field is just a path string, e.g. `/images/destinations/brazil/rio-de-janeiro.jpg`. To use a real photo:

1. Add your image file under `public/images/...` (create the folders you need — anything in `public/` is served as-is at the site root).
2. Point the destination's `image` field at that path, e.g. `/images/destinations/brazil/rio-de-janeiro.jpg`.
3. Set a descriptive `imageAlt` for accessibility.

If an image path is missing or fails to load, the site automatically shows a styled placeholder (an icon plus the destination name) instead of a broken image — you don't need every destination to have a photo before publishing.

### How to add a new destination category or icon

Categories are just strings — add a new one to any destination's `category` field and it will automatically appear as a filter option. To give a new category its own icon instead of the default pin, add a case to `categoryIcon()` in `src/app/shared/utilities/category-icon.ts`, and make sure the icon you reference exists in the icon registry (`src/app/shared/utilities/icon-registry.ts`) — that file is also where you'd register an additional Lucide icon (browse available icons at [lucide.dev/icons](https://lucide.dev/icons)) for use elsewhere via `<app-icon name="...">`.

---

## Project structure

```text
src/app/
  core/config/        Map defaults (centers, zoom, tile layer, clustering)
  data/                Editable content: destinations, tips, page copy
  services/            DestinationService — reads the data files
  shared/
    components/        Reusable UI: Header, Footer, InteractiveMap, cards, filters, etc.
    models/             TypeScript interfaces shared across the app
    utilities/          Icon registry, category→icon mapping, guide metadata
  features/
    home/               Homepage
    brazil/             /brazil
    ceara/              /ceara
    fortaleza/           /fortaleza
    destination/         /destination/:slug (reusable detail page)
```

Routes are lazy-loaded per feature (see `src/app/app.routes.ts`), so visiting one guide page doesn't download the code for the others.

## Deploying

This is a static Angular app — build it, then deploy the `dist/brazilian-tourist-guide/browser/` folder. Because this is a single-page app with client-side routing, you need to configure your host to redirect unknown paths back to `index.html` (otherwise a direct visit to e.g. `/brazil` or a page refresh will 404).

### Vercel

1. Import the repository in the Vercel dashboard, or run `vercel` from the project root.
2. Framework preset: **Angular**. Vercel detects the Angular CLI build automatically.
3. Build command: `npm run build`. Output directory: `dist/brazilian-tourist-guide/browser`.
4. Vercel handles SPA fallback routing for detected Angular projects automatically. If it doesn't, add a `vercel.json` with:
   ```json
   { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
   ```

### Netlify

1. Connect the repository, or run `netlify deploy` from the project root.
2. Build command: `npm run build`. Publish directory: `dist/brazilian-tourist-guide/browser`.
3. Add a `public/_redirects` file (it will be copied into the build output automatically) containing:
   ```text
   /*  /index.html  200
   ```

### Firebase Hosting

1. `firebase init hosting`, and set the public directory to `dist/brazilian-tourist-guide/browser`.
2. When asked "Configure as a single-page app?", answer **yes** — this adds the `"rewrites"` rule to `firebase.json` that redirects all paths to `index.html`.
3. `npm run build && firebase deploy`.

---

## Notes on this build

- **Maps**: built with [Leaflet](https://leafletjs.com/) and [OpenStreetMap](https://www.openstreetmap.org/) tiles — free, no API key. Marker clustering uses `leaflet.markercluster`. The map only initializes in the browser and fails gracefully (with a message and a working destination list) if it can't load.
- **Icons**: [Lucide](https://lucide.dev/) via `@lucide/angular`, rendered through a small shared `<app-icon>` wrapper (`src/app/shared/components/icon/`) so icons stay driven by name from data files.
- **Sample content**: every destination currently in the data files is placeholder/sample content clearly meant to be replaced — descriptions avoid inventing prices, hours, or safety claims. Replace it gradually as you research.
