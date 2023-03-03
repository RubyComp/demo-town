import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
// import Price from '../../Price'
// import FieldContainer from './FieldContainer'
import Select from 'react-select'

const FieldText = ({ input, ...rest }) => {

	return (
		<Form.Control
			{...input}
			{...rest}
		/>
	)

}

const FieldTextarea = ({ input, ...rest }) => {

	return (
		<Form.Control
			as="textarea"
			{...input}
			{...rest}
		/>
	)

}


const FieldNumber = ({ input, ...rest }) => {

	return (
		<Form.Control
			type="number"
			{...input}
			{...rest}
		/>
	)

}

// const FieldPrice = ({ input, ...rest }) => {

// 	// const {name, note} = data

// 	return (
// 		<>
// 			<Stack direction="horizontal" gap={2}>
// 				<Form.Control
// 					type="number"
// 					label={note || name}
// 					min={0}
// 				/>
// 				{/* <Field
// 					name={id}
// 					render={({ input, meta }) => (
// 						<Form.Control
// 							type="number"
// 							label={note || name}
// 							min={0}
// 							{...input}
// 						/>
// 					)}
// 				/> */}
// 				<div style={{
// 					minWidth: '6em',
// 					maxWidth: '8em'
// 				}} >
// 					<FieldSelect data={{source: 'currency', keyToValue: true}}/>
// 				</div>
				
// 			</Stack>
// 			<Form.Text className="text-muted">
// 				<Price value={456} cur={'USD'} /> / m²
// 			</Form.Text>
// 		</>
// 	)

// }

// const Options = ({source, keyToValue}) => {

// 	const [options, setOptions] = useState([])

// 	const params = `?key=${source}`

// 	React.useEffect(() => {
// 		fetch(config.api.getOptions + params)
// 			.then((res) => {
// 				return res.json()
// 			})
// 			.then((json) => {
// 				if (json.status == 'ok') {
// 					setOptions(json.result)
// 				}
// 			})
// 	}, [])

// 	return (
// 		<>
// 			{options && options.map(({id, name}) => (
// 				<option key={id} value={id}>
// 					{ keyToValue ? id : name}
// 				</option>
// 			))}
// 		</>
// 	)

// }

const FieldSelect = ({ input, ...rest }) => {

	// const {note, source, keyToValue} = data

	return (
		// <Form.Select>
		// 	{note ? (
		// 		<option style={{display:'none'}}>{note}</option>
		// 	) : ''}
		// 	<Options source={source} keyToValue={keyToValue} />
		// </Form.Select>
		<Select {...input} {...rest} searchable />
	)

}

const FieldSwitch = ({ input, ...rest }) => {

	// const {id, name, note} = data

	return (
		// <Form.Check
		// 	type="switch"
		// 	id={id}
		// 	label={note || name}
		// />
		<div>Nope</div>
	)

}

export {FieldText, FieldTextarea, FieldNumber, FieldSelect, FieldSwitch}