import React from 'react'
import Picture from './Picture'


const ExampleRow = ({ id, img, name, status, district, year, company }) => {

	return (
		<tr>
			<td>{id}</td>
			<td><Picture url={img} width={64}/></td>
			<td>{name}</td>
			<td>{status}</td>
			<td>{district}</td>
			<td>{year}</td>
			<td>{company}</td>
		</tr>
	)
}

export default ExampleRow