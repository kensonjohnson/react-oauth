const authEndpoint = "https://accounts.spotify.com/authorize";

const scopes = ["user-read-private"];

export function getAuthorizeHref(): string {
  const clientId = "c6d77b35358f4276aedb7d18eedb0bf5";
  const redirectURI = "http://localhost:5173";

  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token`;
}
