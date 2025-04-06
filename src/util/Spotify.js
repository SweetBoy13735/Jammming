//#region File body
const baseURL = "https://API.Spotify.com/v1", clientID = "7d70c49b118d4d719449c30fda6db7f5";

let accessToken;

const spotify = {
	getAccessToken() {
		if (accessToken) return accessToken;

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/), expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];

			const expiresIn = Number(expiresInMatch[1]);

			window.setTimeout(() => { accessToken = ""; }, expiresIn * 1000);
			window.history.pushState("Access Token", null, '/');

			return accessToken;
		} else window.location = `https://Accounts.Spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=http://localhost:3000&scope=playlist-modify-public`;
	}
};
//#endregion

//#region Internal project exports
export default spotify;
//#endregion
