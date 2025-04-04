//#region External project imports
import { useState } from "react";
//#endregion

//#region Internal project imports
import PlaylistForm from "../components/PlaylistForm";
import TrackList from "../components/TrackList";
//#endregion

//#region File body
export default function Playlist() {
	const [name, setName] = useState("");
	const [tracks, setTracks] = useState([{
			id: "1", title: "Night Rider", artist: "Abraxis", album: "Night Rider"
		}, {
			id: "2", title: "Moonlight Crime", artist: "Nitepunk", album: "Moonlight Crime"
		}, {
			id: "3", title: "Ending", artist: "Nitepunk", album: "Ending"
	}]);

	const handleFormSubmit = event => {
		event.preventDefault();
	}, handleNameChange = ({ target: { value } }) => { setName(value); };

	return (<>
		<PlaylistForm name={name} onNameChange={handleNameChange} onSubmit={handleFormSubmit} />
		<TrackList tracks={tracks} />
	</>);
}
//#endregion
