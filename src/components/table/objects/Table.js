import React from 'react'
import { Table } from 'react-bootstrap'
import config from '../../../config'
// import TablePagination from '../../TablePagination'
import TableHead from './Head'
import TableRows from './Rows'

const ObjectsTable = () => {

	const [objectsList, setObjectsList] = React.useState([])

	React.useEffect(() => {
		fetch(config.api.getObjects)
			.then((res) => {
				return res.json()
			})
			.then((json) => {
				if (json.status == 'ok') {
					setObjectsList(json.result)
				}
			})
	}, [])

	return (
		<>
			<Table hover className="centered-table">
				<TableHead />
				<TableRows values={objectsList} />
			</Table>
		</>
	)
}

export default ObjectsTable