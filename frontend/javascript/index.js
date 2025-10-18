import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

// ------------------------------------------------------
// Make headers inside `prose` sections into anchor links
//
document.querySelectorAll(".prose h2, .prose h3, .prose h4").forEach(h => {
  if (!h.id || h.dataset.anchored) return;
  h.dataset.anchored = "true";

  h.classList.add("relative", "group", "flex", "items-center");

  const link = document.createElement("a");
  link.href = `#${h.id}`;
  link.className = "anchor-link absolute -left-5 px-[2px] opacity-0 " +
                   "transition-opacity group-hover:opacity-100 group-focus-within:opacity-100";
  link.setAttribute("aria-label", `Link to section ${h.textContent.trim()}`);
  link.innerHTML = `
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16"
         class="octicon octicon-link text-slate-400">
      <path fill="currentColor" d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
    </svg>
    <span class="sr-only">Copy link</span>
  `;
  h.prepend(link);

  // Mobile: tap heading reveals icon by focusing the link (doesn't change tab order)
  h.addEventListener("click", (e) => {
    // If you tapped the link itself, let it navigate
    if (e.target.closest("a")) return;
    // Only do the “reveal” trick on touch/hoverless pointers
    if (window.matchMedia("(hover: none)").matches) {
      link.focus({preventScroll: true});
      // Optional: auto-hide after a moment
      setTimeout(() => link.blur(), 2000);
    }
  });
});
