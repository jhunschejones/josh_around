# Josh Around — Static Site

This is the source for **Josh Around**, a minimal Bridgetown-powered static site focused on a clean, text-first design with soft color accents and full light/dark mode support.

## 🧱 Tech Stack

- **[Bridgetown](https://www.bridgetownrb.com/)** — static site generator built with Ruby.
- **Tailwind CSS** — for quick, utility-based styling.
- **ERB templates** — simple, readable HTML with Ruby front matter.
- **Static-only deployment** — no server runtime required. Build and host anywhere (GitHub Pages, Netlify, Vercel, etc).

## 🚀 Getting Started

Run these commands to start local development:

    bundle install
    npm install
    bin/bridgetown start

The dev server will start at [http://localhost:4000](http://localhost:4000).
Run `bin/bridgetown build` to generate static files in `/output`.

## 🎨 Design Language

The site intentionally leans *minimal and raw HTML-inspired*, with a few modern touches:

| Element | Tailwind Utility | Light Mode | Dark Mode | Description |
|:--------|:-----------------|:------------|:-----------|:-------------|
| **Body text & background** | `bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100` | `#f8fafc` / `#0f172a` | — | cool-neutral slate base |
| **Primary accent (cyan)** | `text-cyan-600 dark:text-cyan-400` | `#0891b2` | `#22d3ee` | headings, site title |
| **Secondary accent (pink)** | `bg-pink-500 hover:bg-pink-400 text-white` | `#ec4899` → `#f472b6` | — | buttons & calls to action |

Together, the **slate / cyan / pink** palette creates a clean, balanced Tokyo midnight aesthetic that stays readable in both light and dark themes.

There are some custom helper classes defined in `frontend/styles/index.css` to help with consistent buttons and text colors as well.

The site uses the `@tailwindcss/typography` plugin plus custom `prose` styles in `frontend/styles/index.css` to style the elements in a post.

## 🪶 Structure

    src/
      _layouts/
        default.erb        # main site layout
        post.erb           # blog posts
      newsletter/          # newsletter pages
      patreon.html.erb     # Patreon page
      404.html.erb
      500.html.erb

## Gotchas
- Use `/contact.html` style permalinks to get a static page that is served as `/contact` in production on GH pages 👍🏻
- Set the `slug:` manually for each blog in the head info so that we're not guessing. You can run the `bin/check_post_slugs` helper script to check for duplicates across all posts, or the `bin/new_post "Post title"` helper to generate the markdown file for a new post with the necessary header content 🙏🏻
- The anchor link behavior of posts is implemented in JS so that it works on devices where there isn't a hover option.
- The footer is conditionally rendered at build time and does not show up on the post page to avoid confusion about dates and timestamps.
