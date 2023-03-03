import React from 'react'
import digitsNum from '../utils/digitsNum'

const Price = ({value, cur}) => {

	let prefix = ''
	let suffix = ''

	if (cur == 'USD') {
		prefix = '$'
	} else {
		suffix = '\u00A0' + cur
	}

	const number = digitsNum(value || '…')

	return (
		<span>{prefix + number + suffix}</span>
	)

}

export default Price