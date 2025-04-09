//#region File body
export default function Track({ data }) {
	return (<article>
		<h3>{data.title}</h3>
		<span>{data.artist} | {data.album}</span>
	</article>);
};
//#endregion
