import React from 'react'
import { Form, Alert, Stack } from 'react-bootstrap'
import {
	FieldText,
	FieldTextarea,
	FieldNumber,
	// FieldPrice,
	FieldSelect,
	// FieldSwitch
} from './FieldsList'
import './field.css'
import { Field as FieldRFF } from 'react-final-form'
import FieldContainer from './FieldContainer'
import Price from '../../Price'
import { useSelector } from 'react-redux'

// const FieldAdapter = ({children, data}) => {

// 	const {id} = data

// 	return (
// 		// <Field
// 		// 	name={id}
// 		// 	render={({ input, meta }) => (
// 		// 		{children}
// 		// 	)}
// 		// />
// 		<div>
// 			123 — {id}.
// 			{children}
// 		</div>
// 	)
// }

const testStates = [
	{
		'value': 'AL',
		'label': 'Alabama'
	},
	{
		'value': 'AK',
		'label': 'Alaska'
	},
	{
		'value': 'AS',
		'label': 'American Samoa'
	},
]


const Field = ({data}) => {

	const {id, note, type} = data
	const squarePrice = useSelector(state => state.squarePrice.value)

	switch (type) {
		// case 'text':
		// case 'phone':
		// 	return <FieldText data={data} />
		
		case 'text':
		case 'phone':
			return (
				<FieldRFF
					name={id}
					component={FieldText}
					placeholder={note}
				/>
			)

		case 'textarea':
			return (
				<FieldRFF
					name={id}
					component={FieldTextarea}
				/>
			)

		case 'number':
			return (
				<FieldRFF
					name={id}
					component={FieldNumber}
				/>
			)

		case 'select':
			return (
				<FieldRFF
					name={id}
					options={testStates}
					component={FieldSelect}
				/>
			)
		
			// case 'select':
			// 	return <FieldSelect data={data} />

			// case 'switch':
			// 	return <FieldSwitch data={data} />

		case 'price':
			// console.log(squarePrice)
			return (
				<>
					<Stack direction="horizontal" gap={2}>
						<FieldRFF
							name={id}
							component={FieldNumber}
							min={0}
						/>
						<div className="cur-block">
							<FieldRFF
								name="currency"
								options={testStates}
								component={FieldSelect}
							/>
						</div>
					</Stack>
					<Form.Text className="text-muted">
						{/* <b>{squarePrice}</b> */}
						<Price value={squarePrice && squarePrice.price || 0} cur={'USD'} /> / m²
					</Form.Text>
				</>
			)

		default:
			return <Alert variant='danger'>Error! Have no component for <code>{type}</code> field.</Alert>
	}

}

// const ReactSelectAdapter = ({ input, ...rest }) => (
// 	<Select {...input} {...rest} searchable />
// )

// const Field = ({data}) => {

// 	return (
// 		<FieldContainer>
// 			<FieldType data={data} />
// 		</FieldContainer>
// 	)

// }

export default Field
