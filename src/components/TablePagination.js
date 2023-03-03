import React from 'react'
import { Pagination } from 'react-bootstrap'

const TablePagination = ({count = 1, active = 1/*, link = '/'*/}) => {

	const items = []

	if (count < 2) return 

	for (let number = 1; number <= count; number++) {
		items.push(
			<Pagination.Item key={number} active={number === active}>
				{number}
			</Pagination.Item>
		)
	}

	return (
		<div className="w-100 mt-4 d-flex justify-content-center">
			<Pagination>{items}</Pagination>
		</div>
	)
}

export default TablePagination