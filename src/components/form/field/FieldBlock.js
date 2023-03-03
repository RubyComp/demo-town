import React from 'react'
import { Alert, Form } from 'react-bootstrap'
import objectEditFields from '../../../helpers/objectEditFields'
import Field from './Field'

const Desc = ({data}) => {

	const {desc} = data

	if (desc)
		return <Form.Text className="text-muted">{desc}</Form.Text>

}

const Label = ({data}) => {

	const {name, type} = data
	const inlineItems = ['switch', 'check', 'radio']

	if (!inlineItems.includes(type))
		return <Form.Label>{name}</Form.Label>

}

const FieldBlock = ({id}) => {

	const data = objectEditFields[id]

	if (!data)
		return <Alert variant='danger'>Field <code>${id}</code> have no settings.</Alert>

	data.id = id

	return (
		<Form.Group className="w-100 mb-3">
			<Label data={data} />
			<Field data={data} />
			<Desc data={data} />
		</Form.Group>
	)

}

export default FieldBlock