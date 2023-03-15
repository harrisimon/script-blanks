import { useState } from "react"

const Blank = ({ word, setPoints, points, id }) => {
	const [clue, setClue] = useState("")
	const [correct, setCorrect] = useState(false)

	function onChange(e) {
		if (e.target.value === e.target.name) {
			const el = document.body.querySelector(`#${id}`)
			el.className = "correct"
			el.disabled = true
			setCorrect(true)
			setPoints(points + 1)
		} else if (
			e.target.value.length === word.length &&
			e.target.value !== e.target.name
		) {
			const el = document.body.querySelector(`#${id}`)
			el.className = "incorrect"
		} else {
			const el = document.body.querySelector(`#${id}`)
			el.className = "blank"
		}
		setClue(e.target.value)
	}

	return (
		<span>
			{" "}
			<input
				id={id}
				className="blank"
				maxLength={word.length}
				size={word.length}
				value={clue}
				onChange={onChange}
				name={word}
				autoComplete={'off'}
			/>
		</span>
	)
}
export default Blank
