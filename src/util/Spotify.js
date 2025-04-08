//#region File body
const clientID = "7d70c49b118d4d719449c30fda6db7f5", baseURL = "https://API.Spotify.com/v1";

let accessToken;

const Spotify = {
	getAccessToken() {
		if (accessToken) return accessToken;

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/), expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];

			const expiresIn = Number(expiresInMatch[1]);

			window.setTimeout(() => { accessToken = ""; }, expiresIn * 1000);
			window.history.pushState("Access Token", null, '/');

			return accessToken;
		} else window.location = `https://Accounts.Spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=http://localhost:3000&scope=playlist-modify-public%20playlist-modify-private`;
	}, async search(query) {
		try {
			const { tracks } = await (await fetch(`${baseURL}/search?type=track&q=${query}`, { headers: { Authorization: `Bearer ${this.getAccessToken()}` } })).json();

			return tracks ? tracks.items.map(({ id, name: title, artists: [{ name: artist }], album: { name: album }, uri }) => ({ id, title, artist, album, uri })) : [];
		} catch (error) {
			console.error(`An error occurred whilst searching tracks - ${error}`);

			return [];
		}
	}, async savePlaylist(name, uris) {
		try {
			const { id: userID } = await (await fetch(`${baseURL}/me`, { headers: { Authorization: `Bearer ${this.getAccessToken()}` } })).json();

			const { id: playlistID } = await (await fetch(`${baseURL}/users/${userID}/playlists`, {
				method: "POST",
				headers: { Authorization: `Bearer ${this.getAccessToken()}`, "Content-Type": "application/json" },
				body: JSON.stringify({ name, description: "Playlist created with Jammming.", public: false })
			})).json();

			const result = await (await fetch(`${baseURL}/playlists/${playlistID}/tracks`, {
				method: "POST",
				headers: { Authorization: `Bearer ${this.getAccessToken()}`, "Content-Type": "application/json" },
				body: JSON.stringify({ uris })
			})).json();

			console.log(result);
		} catch (error) {
			console.error(`An error occurred whilst saving playlist "${name}" - ${error}`);
		}
	}
};
//#endregion

//#region Internal project exports
export default Spotify;
//#endregion
