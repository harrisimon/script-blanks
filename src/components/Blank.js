import { useState } from "react"

const Blank = ({ word }) => {
	const [clue, setClue] = useState("")
    const [correct, setCorrect]=useState(false)

	function onChange(e) {
		if (e.target.value === e.target.name) {
			const el = document.body.querySelector(`#${word}`)
			el.className = "correct"
            setCorrect(true)
		} else if(e.target.value.length === word.length && e.target.value !== e.target.name){
			const el = document.body.querySelector(`#${word}`)
			el.className = "incorrect"
		}
		else {
			const el = document.body.querySelector(`#${word}`)
			el.className = "blank"
		}
		setClue(e.target.value)
	}

	return (
		<input
			id={word}
			className="blank"
			maxLength={word.length}
			size={word.length}
			value={clue}
			onChange={onChange}
			name={word}
		/>
	)
}
export default Blank
