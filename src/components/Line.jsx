import Blank from "./Blank"

function Line({ speaker, text, word, setPoints, points }) {
	return (
		<div>
			<h4>{speaker}</h4>
			{text} <Blank word={word} setPoints={setPoints} points={points} />
		</div>
	)
}

export default Line
