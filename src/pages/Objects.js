import React from 'react'
import ObjectsTable from '../components/table/objects/Table'
import TablePagination from '../components/TablePagination'
import useTitle from '../hooks/useTitle'

const Objects = () => {

	useTitle('Objects')

	return (
		<div>
			<ObjectsTable />
			{/* <ExampleTable /> */}
			<TablePagination count={5} active={1} />
		</div>
	)
}

export default Objects