//#region External project imports
import { useEffect, useState } from "react";
//#endregion

//#region Internal project imports
import Library from "./containers/Library";
import Playlist from "./containers/Playlist";

import spotify from "./util/Spotify";
//#endregion

//#region File body
export default function App() {
	// Hooks
	const [selectedTracks, setSelectedTracks] = useState([]);

	useEffect(() => { console.log(spotify.getAccessToken()); }, []);

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
