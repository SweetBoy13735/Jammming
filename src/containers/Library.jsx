//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";

import Spotify, { baseURL } from "../util/Spotify";
//#endregion

//#region File body
export default function Library({ onAddTrack }) {
	// Hooks
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	// Event handlers
	const handleSearchSubmit = event => {
		event.preventDefault();

		fetch(`${baseURL}/search?type=track&q=${query}`, { headers: { Authorization: `Bearer ${Spotify.getAccessToken()}` } })
		.then(response => response.json())
		.then(response => {
			if (!response.tracks) {
				setResults([]);

				return;
			}

			setResults(response.tracks.items.map(track => ({
				id: track.id,
				title: track.name,
				artist: track.artists[0].name,
				album: track.album.name,
				uri: track.uri
			})));
		});
	}, handleQueryChange = ({ target: { value } }) => { setQuery(value); };

	return (<>
		<SearchBar query={query} onQueryChange={handleQueryChange} onSubmit={handleSearchSubmit} />
		<TrackList tracks={results} onTrackSelect={onAddTrack} />
	</>);
}
//#endregion
