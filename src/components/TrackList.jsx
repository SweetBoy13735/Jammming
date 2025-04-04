//#region Internal project imports
import Track from "./Track";

import styles from "./TrackList.module.css";
//#endregion

//#region File body
export default function TrackList({ tracks }) {
	return (<ol>
		{tracks.map(track => (<li key={track.id} className={styles.trackItem}>
			<Track data={track} />
		</li>))}
	</ol>);
}
//#endregion
