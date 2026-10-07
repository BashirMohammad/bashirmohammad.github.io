// Abstract toggles on the Home and Research pages, plus "Show all abstracts".
// Without JavaScript every abstract stays visible (see `html.js .paper-abstract` in site.css).
document.addEventListener("click", function (e) {
  var toggle = e.target.closest(".abs-toggle");
  if (toggle) {
    var open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", open);
    document.getElementById(toggle.getAttribute("aria-controls")).classList.toggle("open", open);
    return;
  }
  var all = e.target.closest(".expand-all");
  if (all) {
    var on = all.getAttribute("aria-pressed") !== "true";
    all.setAttribute("aria-pressed", on);
    all.textContent = on ? "Hide all abstracts" : "Show all abstracts";
    document.querySelectorAll(".abs-toggle").forEach(function (t) {
      t.setAttribute("aria-expanded", on);
      document.getElementById(t.getAttribute("aria-controls")).classList.toggle("open", on);
    });
  }
});
