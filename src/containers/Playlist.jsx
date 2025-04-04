//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import PlaylistForm from "../components/PlaylistForm";
import TrackList from "../components/TrackList";
//#endregion

//#region File body
export default function Playlist() {
	// Hooks
	const [name, setName] = useState("");
	const [selectedTracks, setSelectedTracks] = useState([{
			id: "1", title: "Night Rider", artist: "Abraxis", album: "Night Rider"
		}, {
			id: "2", title: "Moonlight Crime", artist: "Nitepunk", album: "Moonlight Crime"
		}, {
			id: "3", title: "Ending", artist: "Nitepunk", album: "Ending"
	}]);

	// Event handlers
	const handlePlaylistSubmit = event => {
		event.preventDefault();

		alert(`Playlist name: ${name}
Selected tracks: ${selectedTracks.map(({title}) => title).join(", ")}`);
	}, handleNameChange = ({ target: { value } }) => { setName(value); };

	return (<>
		<PlaylistForm name={name} onNameChange={handleNameChange} onSubmit={handlePlaylistSubmit} />
		<TrackList tracks={selectedTracks} />
	</>);
}
//#endregion
