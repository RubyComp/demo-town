import React from 'react'
import { Table } from 'react-bootstrap'
import useTitle from '../hooks/useTitle'

import { Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import TablePagination from '../components/TablePagination'

const Rows = () => {

	const rowsCount = 10
	const rows = []

	for (let i = 0; i < rowsCount; i++) {
		rows.push(
			<tr key={i}>
				<td>{i}</td>
				<td><time dateTime="2008-02-14 20:00">14.02.2008 – 20:00</time></td>
				<td><Link className="plain-link" to="/">Sombody</Link></td>
				<td>New object: <Link className="plain-link" to="/">448</Link></td>
			</tr>
		)
	}

	return <tbody>{rows}</tbody>
}

const Latest = () => {

	useTitle('Latest activity')

	let active = 1
	let items = []

	for (let number = 1; number <= 5; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		)
	}

	return (
		<div>
			<Table striped size="sm">
				<thead>
					<tr>
						<th>ID</th>
						<th>Time</th>
						<th>User</th>
						<th>Action</th>
					</tr>
				</thead>
				<Rows />
			</Table>
			<TablePagination count={5} active={1} />
		</div>
	)
}

export default Latest