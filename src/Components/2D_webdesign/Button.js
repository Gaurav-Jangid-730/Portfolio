import React, { useSyncExternalStore } from "react";

// Small helper to let the checkbox reflect current theme without managing React state.
function subscribe(callback) {
// Listen for class changes via MutationObserver so the input stays in sync if theme changes elsewhere.
const target = document.documentElement;
const obs = new MutationObserver(() => callback());
obs.observe(target, { attributes: true, attributeFilter: ["class"] });

// Also listen to storage events from other tabs.
const onStorage = (e) => {
if (e.key === "theme") callback();
};
window.addEventListener("storage", onStorage);

return () => {
obs.disconnect();
window.removeEventListener("storage", onStorage);
};
}

function getSnapshot() {
return document.documentElement.classList.contains("dark-mode");
}

export default function Button() {
const isDark = useSyncExternalStore(subscribe, getSnapshot);

const toggleTheme = () => {
const html = document.documentElement;
const next = isDark ? "light" : "dark";
html.classList.remove("light-mode", "dark-mode");
html.classList.add(next+"-mode");
try {
localStorage.setItem("theme", next);
} catch {}
};

return (
<div className="button" id="Button">
<input type="checkbox" checked={isDark} onChange={toggleTheme} id="toggle-dark" className="toggle-dark" readOnly />
<label htmlFor="toggle-dark" className="checkbox-label">
<i className="fas fa-moon"></i>
<i className="fas fa-sun"></i>
<span className="ball"></span>
</label>
</div>
);
}