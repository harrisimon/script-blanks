import Blank from "./Blank"

function Line({ speaker, word }) {
	return (
		<div>
			<h4>{speaker.toUpperCase()}</h4>
			{"No no "} <Blank word={word} />
		</div>
	)
}

export default Line
