const str = '}(){}[]' //true

const isValid = (str) => {
	const stack = []
	const brackets = { '{': '}', '(': ')', '[': ']' }

	for (let char of str) {
		if (Object.keys(brackets).includes(char)) {
			stack.push(char)
		} else if (brackets[stack.pop()] !== char) {
			return false
		}
	}

	return stack.length === 0
}

console.log(isValid(str))