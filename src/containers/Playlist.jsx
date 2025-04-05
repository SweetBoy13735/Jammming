//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import PlaylistForm from "../components/PlaylistForm";
import TrackList from "../components/TrackList";
//#endregion

//#region File body
export default function Playlist({ selectedTracks, onRemoveTrack }) {
	// Hooks
	const [name, setName] = useState("");

	// Event handlers
	const handlePlaylistSubmit = event => {
		event.preventDefault();

		alert(`Playlist name: ${name}.${"\n"}Selected tracks: ${selectedTracks.map(({title}) => title).join(", ")}`);
	}, handleNameChange = ({ target: { value } }) => { setName(value); };

	return (<>
		<PlaylistForm name={name} onNameChange={handleNameChange} onSubmit={handlePlaylistSubmit} />
		<TrackList tracks={selectedTracks} onTrackSelect={onRemoveTrack} />
	</>);
}
//#endregion
