//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import Library from "./containers/Library";
import Playlist from "./containers/Playlist";
//#endregion

//#region File body
export default function App() {
	// Hooks
	const [selectedTracks, setSelectedTracks] = useState([]);

	// Event handlers
	const handleAddTrack = track => {
		if (!selectedTracks.includes(track)) setSelectedTracks(tracks => [...tracks, track]);
	}, handleRemoveTrack = ({ id: trackID }) => { setSelectedTracks(tracks => tracks.filter(({ id }) => trackID !== id)); };

	return (<>
		<h1>Jammming</h1>
		<Library onAddTrack={handleAddTrack} />
		<Playlist selectedTracks={selectedTracks} onRemoveTrack={handleRemoveTrack} />
	</>);
}
//#endregion
