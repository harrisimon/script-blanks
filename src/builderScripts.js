export const scriptToArr = (script) => {
	let arr1 = []
	let res = {}
	let scriptArr = []
	let lines = script.split("\n")

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

	for (let item of arr1) {
		if (item["speaker"]) {
			scriptArr.push(item)
		}
	}

	// console.log(scriptArr)
	return scriptArr
}

export function makeId(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	  counter += 1;
	}
	return result;
}

export function findSpace(str){
	let spaceIdx = []
	let newStr = str.toString()
	console.log(newStr)
	for(let s in newStr){
		if(newStr[s]=== ' '){
			spaceIdx.push(s)
		}
	}
	console.log(spaceIdx)
	return spaceIdx
}

// findSpace('')