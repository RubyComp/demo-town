import React from 'react'
import FieldBlock from './field/FieldBlock'

// const Fieldset = ({data}) => {

// 	console.log('data:', data)

// 	return (
// 		<fieldset>
// 			{data.map((field) => (
// 				<Field key={field.key} data={field} />
// 			))}
// 		</fieldset>
// 	)
// }

function Fieldset({ data }) {
	return (
		<fieldset>
			{data.map(item => (
				<FieldBlock key={item.key} data={item} />
			))}
		</fieldset>
	)
}

export default Fieldset