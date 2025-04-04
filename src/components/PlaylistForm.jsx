//#region File body
export default function PlaylistForm({ name, onNameChange, onSubmit }) {
	return (<form onSubmit={onSubmit}>
		<input
			type="text"
			name="name"
			value={name}
			onChange={onNameChange}
			placeholder="Name your playlist..."
		/>
		<button type="submit">Save to Spotify</button>
	</form>);
}
//#endregion
