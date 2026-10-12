const content = window.location.search;
const container = document.body || document.documentElement;
if (container) {
  container.textContent = content;
}
