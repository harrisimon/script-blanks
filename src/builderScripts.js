export const scriptToArr = (script) => {
	let arr1 = []
    let res = {}
    let scriptArr = []
	let lines = script.split("\n")
	// console.log(lines)
	for (let [i, line] of lines.entries()) {
		if (line.includes(line.toUpperCase()) || line.includes(`cont'd`)) {
			line = line.trim()
			arr1[i] = { speaker: line }
		} else {
			line = line.trim()
			arr1[i] = { line: line }
		}
	}



   
    
	arr1.map((item) => {
		if (item.speaker) {
			res = item
		} else {
			res["line"] = item.line
		}
		return res
	})

    for(let item of arr1){
        if((item['speaker'])){
            scriptArr.push(item)
        }
    }
	console.log("after", scriptArr)
    return scriptArr
}
