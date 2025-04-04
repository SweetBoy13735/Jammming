//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import SearchBar from "../components/SearchBar";
import TrackList from "../components/TrackList";
//#endregion

//#region File body
export default function Library() {
	// Hooks
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	// Event handlers
	const handleSearchSubmit = event => {
		event.preventDefault();

		alert(`Search query: ${query}`);
	}, handleQueryChange = ({ target: { value } }) => { setQuery(value); };

	return (<>
		<SearchBar query={query} onQueryChange={handleQueryChange} onSubmit={handleSearchSubmit} />
		<TrackList tracks={results} />
	</>);
}
//#endregion
