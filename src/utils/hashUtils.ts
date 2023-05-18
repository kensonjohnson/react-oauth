export function getHashParams() {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: { [key: string]: any }, item) => {
      if (item) {
        const parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
}

// Replaces the long ugly URL given by the redirect into something
// that won't bug the user.
export function removeHashParamsFromURL() {
  window.history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
}
