//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import PlaylistForm from "../components/PlaylistForm";
import TrackList from "../components/TrackList";
import Spotify from "../util/Spotify";
//#endregion

//#region File body
export default function Playlist({ selectedTracks, onRemoveTrack }) {
	// Hooks
	const [name, setName] = useState("");

	// Event handlers
	const handlePlaylistSubmit = async event => {
		event.preventDefault();

		await Spotify.savePlaylist(name, selectedTracks.map(({ uri }) => uri));
	}, handleNameChange = ({ target: { value } }) => { setName(value); };

	return (<>
		<PlaylistForm name={name} onNameChange={handleNameChange} onSubmit={handlePlaylistSubmit} />
		<TrackList tracks={selectedTracks} onTrackSelect={onRemoveTrack} />
	</>);
}
//#endregion
