import { useState, useEffect } from "react"
import  {scene1} from './script'
import Blank from "./components/Blank"
import "./App.css"

// console.log(scene1)
// console.log(scene1.split('\n'))

const obj = {

}


function App() {
	return (
		<div className="App">
			<h1>Script_Blanks</h1>
			<br />
			<p>
        {'The '}
				<Blank word="quick" />
        {' brown '}
				<Blank word="fox" />
				<br/>
				{scene1}
			</p>
		</div>
	)
}

export default App
