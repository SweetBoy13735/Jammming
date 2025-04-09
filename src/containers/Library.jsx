//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";

import Spotify from "../util/Spotify";
//#endregion

//#region File body
export default function Library({ onAddTrack }) {
	// Hooks
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	// Event handlers
	const handleSearchSubmit = async event => {
		event.preventDefault();

		 setResults(await Spotify.search(query));
	}, handleQueryChange = ({ target: { value } }) => { setQuery(value); };

	return (<>
		<SearchBar query={query} onQueryChange={handleQueryChange} onSubmit={handleSearchSubmit} />
		<TrackList tracks={results} onTrackSelect={onAddTrack} />
	</>);
}
//#endregion
