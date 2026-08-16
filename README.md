# Hindi Christian Song — Astro starter

## How to add a new song (this is 90% of your future work)

1. Go to `src/content/songs/`
2. Copy `yeshu-mera-saathi.md`, rename the copy to your new song's name using dashes,
   e.g. `mera-yeshu-jeevit-hai.md`
3. Open it and change the title/singer/category lines at the top, then paste the lyrics below the `---`
4. Save. That's it — a new page is created automatically at
   `hindichristiansong.com/songs/mera-yeshu-jeevit-hai/` and it appears on the homepage list.

You never need to touch any other file to add a song.

## Running it on your own computer (optional, to preview before publishing)

1. Install Node.js from https://nodejs.org (choose the LTS version)
2. Open a terminal in this folder and run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:4321 in your browser to preview

You can skip this step entirely — Cloudflare Pages will build the site for you automatically
every time you push to GitHub (see below).

## Putting this on GitHub

1. Create a free account at github.com
2. Create a new repository, e.g. `hindichristiansong-site`
3. Upload every file in this folder (drag-and-drop works fine in the GitHub website,
   or use GitHub Desktop) — EXCEPT `node_modules` and `dist` if they exist, GitHub
   ignore file already excludes those.

## Connecting to Cloudflare Pages

1. Go to dash.cloudflare.com, sign up free
2. Workers & Pages → Create → Pages → Connect to Git → choose your repo
3. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Save and Deploy. You'll get a free `xxxx.pages.dev` link to check it works.

## Pointing hindichristiansong.com at it

1. In Cloudflare, "Add a site", enter hindichristiansong.com
2. Cloudflare gives you two nameservers — go to wherever you bought the domain
   (NOT Blogger — your domain registrar) and replace the nameservers with Cloudflare's
3. Wait for it to go Active (a few hours)
4. In your Pages project → Custom domains → add hindichristiansong.com

## Adding your real Google Tag Manager code

1. Go to tagmanager.google.com, create a container, copy your GTM ID (looks like `GTM-ABC1234`)
2. Open `src/layouts/Layout.astro`
3. Replace BOTH instances of `GTM-XXXXXXX` with your real ID (one in the `<head>` script,
   one in the `<noscript>` tag in `<body>`)

## Adding your real AdSense code

1. Apply and get approved at adsense.google.com (you need real content and traffic first — most
   sites get rejected until there's enough original content, so do this after your migration is done)
2. Copy your publisher ID, looks like `ca-pub-1234567890123456`
3. Replace `ca-pub-XXXXXXXXXXXXXXXX` in `src/layouts/Layout.astro`
4. Replace `pub-XXXXXXXXXXXXXXXX` in `public/ads.txt` with the same number (without `ca-`)
5. To actually place an ad block somewhere on a page, AdSense gives you a small `<ins class="adsbygoogle">`
   snippet to paste wherever you want an ad to appear, e.g. inside `src/pages/songs/[id].astro`

## Migrating your Blogger content

Export your Blogger posts (Settings → Manage blog → Back up content) — this gives you an XML file.
If you paste that file's content to Claude, it can generate one .md file per song automatically in
this exact format, instead of you retyping everything by hand.
