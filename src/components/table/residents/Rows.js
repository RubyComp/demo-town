import React from 'react'
import { Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import config from '../../../config'
import Picture from '../../Picture'

const Rows = ({values}) => {

	const navigate = useNavigate()

	const imgWidth = 160
	const imgHeight = 109

	return (
		<tbody>
			{values.map(({id, photo, name, status, district, year, company}) => (
				<tr className="pointer" key={id} onClick={() => {navigate(`${id}`)}}>
					<td>{id}</td>
					<td
						style={{
							paddingLeft: 0,
							paddingRight: 0,
							width: imgWidth
						}}
					><Picture url={config.path.img + photo} alt={name} test={imgWidth} height={imgHeight} /></td>
					<td>{name}</td>
					<td><Badge bg="secondary">{status.value}</Badge></td>
					<td>{district}</td>
					<td>{year}</td>
					<td>{company}</td>
				</tr>
			))}
		</tbody>
	)

}

export default Rows