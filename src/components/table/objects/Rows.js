import React from 'react'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import config from '../../../config'
import Picture from '../../Picture'
import Price from '../../Price'

const TableRows = ({values}) => {

	const navigate = useNavigate()

	const imgWidth = 250
	const imgHeight = 150

	return (
		<tbody>
			{values.map(({id, photo, name, status, resident, district, floor, type, coast, square}) => (
				<tr className="pointer" key={id} onClick={() => {navigate(config.path.objects + id)}}>
					<td>{id}</td>
					<td width={imgWidth}><Picture url={config.path.img + photo} alt={name} test={imgWidth} height={imgHeight} /></td>
					<td>{name}</td>
					<td><Badge bg="secondary">{status.value}</Badge></td>
					<td>{resident.name}</td>
					<td>{district.name}</td>
					<td>{floor.current} / {floor.at_building}</td>
					<td>{type.name}</td>
					<td><Price value={coast.value} cur={coast.cur} /></td>
					<td>{square}</td>
				</tr>
			))}
		</tbody>
	)

}


export default TableRows