import { useState } from "react"
import { scriptToArr } from "./builderScripts"
import { scene1 } from "./script"
import Line from "./components/Line"
import "./App.css"

// console.log(scriptToObj(scene1))
let currScript = scriptToArr(scene1)
// console.log(currScript)





function App() {
	const [points, setPoints] = useState(0)
	let text = "No no"


	let lines = currScript.map((line) => {
		console.log(line)
		return <Line
					speaker={line.speaker}
					word={"line"}
					text={line.line}
					setPoints={setPoints}
					points={points}
				/>
	})
	return (
		<div className="App">
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
		</div>
	)
}

export default App
