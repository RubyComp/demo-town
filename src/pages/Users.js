import React from 'react'
import { Pagination } from 'react-bootstrap'
import useTitle from '../hooks/useTitle'
import ExampleTable from '../components/ExampleTable'

const Users = () => {

	useTitle('Users')

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
		<>
			<ExampleTable />
			<div className="w-100 mt-5 d-flex justify-content-center">
				<Pagination>{items}</Pagination>
			</div>
		</>
	)
}

export default Users