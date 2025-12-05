;(() => {
  const CLASS = 'gt-dark-mode';
  const apply = () => document.documentElement.classList.add(CLASS);
  apply();
  new MutationObserver(apply).observe(document, { childList: true, subtree: true });
})();