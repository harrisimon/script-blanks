import Blank from "./Blank"

function Line({ speaker, text, word, setPoints, points, id, match }) {
	console.log(match, word)
	let blank
	if (match === 1) {
		blank = <Blank word={word} setPoints={setPoints} points={points} id={id} />
		text = ''
	}
	return (
		<div>
			<h4>{speaker}</h4>
			{text}
			{blank}
		</div>
	)
}

export default Line
