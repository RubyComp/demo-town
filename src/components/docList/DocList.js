import React from 'react'
import { Table } from 'react-bootstrap'

const Item = () => {

	const url = '/assets/doc/doc-example.pdf'

	const itemOnClick = () => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<tr className="pointer" onClick={itemOnClick}>
			<td>morbi_leo_risus.pdf</td>
		</tr>
	)
}

const Rows = () => {

	return (
		<tbody>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</tbody>
	)
}

const DocList = () => {

	return (
		<Table striped hover>
			<Rows />
		</Table>
	)
}

export default DocList