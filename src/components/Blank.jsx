import { useState } from "react"

const Blank = ({ word, setPoints, points }) => {
	const [clue, setClue] = useState("")
	const [correct, setCorrect] = useState(false)

	function onChange(e) {
		if (e.target.value === e.target.name) {
			const el = document.body.querySelector(`#${word}`)
			el.className = "correct"
			el.disabled = true
			setCorrect(true)
			setPoints(points + 1)
		} else if (
			e.target.value.length === word.length &&
			e.target.value !== e.target.name
		) {
			const el = document.body.querySelector(`#${word}`)
			el.className = "incorrect"
		} else {
			const el = document.body.querySelector(`#${word}`)
			el.className = "blank"
		}
		setClue(e.target.value)
	}

	return (
		<span>
			{" "}
			<input
				id={word}
				className="blank"
				maxLength={word.length}
				size={word.length}
				value={clue}
				onChange={onChange}
				name={word}
				autoComplete={false.toString()}
			/>
		</span>
	)
}
export default Blank
