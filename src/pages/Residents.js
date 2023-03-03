import {React, useEffect, useState} from 'react'
import useTitle from '../hooks/useTitle'
import TablePagination from '../components/TablePagination'
import { Table } from 'react-bootstrap'
import TableHead from '../components/table/residents/Head'
import TableRows from '../components/table/residents/Rows'
import config from '../config'
import Loader from '../components/loader/Loader'

const Residents = () => {

	useTitle('Residents')

	const [residentsList, setResidentsList] = useState([])

	// const options = {
	// 	'content-type': 'application/json',
	// 	'method': 'GET',
	// 	'redirect': 'follow',
	// 	'mode': 'no-cors'
	// }

	useEffect(() => {
		fetch(config.api.getResidents)
			.then((res) => {
				return res.json()
			})
			.then((json) => {
				if (json.status == 'ok') {
					setResidentsList(json.result)
				}
			})
	}, [])

	return (
		<>
			{residentsList.length > 0 ? (
				<>
					<Table hover className="centered-table">
						<TableHead />
						<TableRows values={residentsList} />
					</Table>
					<TablePagination count={5} active={1} />
				</>
			) :
				<Loader />
			}
		</>
	)
}

export default Residents