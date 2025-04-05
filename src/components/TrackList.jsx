//#region Internal project imports
import Track from "./Track";

import styles from "./TrackList.module.css";
//#endregion

//#region File body
export default function TrackList({ tracks, onTrackSelect }) {
	return (<ol>
		{tracks.map(track => (<li key={track.id} className={styles.trackItem + " flex"}>
			<Track data={track} />
			<button type="button" onClick={() => { onTrackSelect(track); }}>{onTrackSelect.name.includes("Add") ? "+" : "-"}</button>
		</li>))}
	</ol>);
}
//#endregion
