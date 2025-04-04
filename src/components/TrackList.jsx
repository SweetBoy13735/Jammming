//#region Internal project imports
import Track from "./Track";
//#endregion

//#region File body
export default function TrackList({ tracks }) {
	return (<ol>
		{tracks.map(track => (<li key={track.id}>
			<Track data={track} />
		</li>))}
	</ol>);
}
//#endregion
