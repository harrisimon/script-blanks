import { useState } from "react"
import { scriptToArr, makeId, findSpace } from "./builderScripts"
import { scene1, scene2 } from "./script"
import { Container } from "react-bootstrap"
import Line from "./components/Line"
import "./App.css"

// console.log(scriptToObj(scene1))
let currScript = scriptToArr(scene1[0].script)

let impLines = scene1[1].importantLines

function App() {
	const [points, setPoints] = useState(0)
	let text = ""
	// console.log(currScript)

	let lines = currScript.map((line, index) => {
	
		let splitLines = line.line.split(". ")
		// console.log(splitLines)
		// console.log(line)
		let match
		let word = ''
		if(line.line !== impLines){
			match = 0
			word = line.line
		} else {
			match = 1
			word = ''
		}
		let rand = makeId(index + 1)
		return (
			<Line
				className="word-wrap"
				match={match}
				key={index}
				id={rand}
				speaker={line.speaker}
				word={impLines}
				text={line.line}
				setPoints={setPoints}
				points={points}
			/>
		)
	
	})
	return (
		<div className="App">
			<Container className="m-2">
				<h1>Script_Blanks</h1>
				<br />
				<h2>{points}</h2>

				{lines}
				<Line
					speaker={"Ellie"}
					word={"line"}
					text={text}
					setPoints={setPoints}
					points={points}
				/>
			</Container>
		</div>
	)
}

export default App
