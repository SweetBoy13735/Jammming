//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";
//#endregion

//#region File body
export default function Library({ onAddTrack }) {
	// Hooks
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	// Event handlers
	const handleSearchSubmit = event => {
		event.preventDefault();

		// Data validation and fetch to occur; mocking results for now.
		setResults([{
				id: "1", title: "Night Rider", artist: "Abraxis", album: "Night Rider"
			}, {
				id: "2", title: "Moonlight Crime", artist: "Nitepunk", album: "Moonlight Crime"
			}, {
				id: "3", title: "Ending", artist: "Nitepunk", album: "Ending"
		}]);
	}, handleQueryChange = ({ target: { value } }) => { setQuery(value); };

	return (<>
		<SearchBar query={query} onQueryChange={handleQueryChange} onSubmit={handleSearchSubmit} />
		<TrackList tracks={results} onTrackSelect={onAddTrack} />
	</>);
}
//#endregion
