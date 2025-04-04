//#region File body
export default function SearchBar({ query, onQueryChange, onSubmit }) {
	return (<form onSubmit={onSubmit}>
		<input
			type="text"
			name="query"
			value={query}
			onChange={onQueryChange}
			placeholder="Search for songs..."
		/>
		<button type="submit">Search</button>
	</form>);
}
//#endregion
