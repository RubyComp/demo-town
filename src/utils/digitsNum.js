/*
 * Divide a number into digits
 */

const SpacedNum = (number, digit = ',') => {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, /*'\u00A0'*/ digit)
}

export default SpacedNum