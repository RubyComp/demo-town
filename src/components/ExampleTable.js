import React from 'react'
import { Badge, Table } from 'react-bootstrap'
import ExampleRow from './ExampleRow'

const Rows = () => {

	const numrows = 10
	const rows = []

	for (let i = 0; i < numrows; i++) {
		rows.push(<ExampleRow
			key={i}
			id={i}
			img='/assets/img/example-buildings.jpg'
			name='Test name'
			status={<Badge bg="secondary">Awaiting</Badge>}
			district='Some district'
			year={2000}
			company='Company inc.'
		/>)
	}

	return <tbody>{rows}</tbody>
}

const ExampleTable = () => {
	return(
		<Table striped>
			<thead>
				<tr>
					<th>ID</th>
					<th>Photo</th>
					<th>Name</th>
					<th>Status</th>
					<th>District</th>
					<th>Year</th>
					<th>Company</th>
				</tr>
			</thead>
			<Rows />
		</Table>
	)
}

export default ExampleTable