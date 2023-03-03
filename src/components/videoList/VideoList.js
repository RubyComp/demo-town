import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { showModal } from '../../store/modalSlice'



const Item = () => {

	const url = '/assets/img/example-apartment-1.jpg'
	const imgData = {
		url: url,
		mode: 'video',
		title: 'Test video',
		fullscreen: true,
	}

	const dispatch = useDispatch()
	const itemOnClick = () => {
		dispatch(showModal(imgData))
	}

	return (
		<tr className="pointer" onClick={itemOnClick}>
			<td>morbi_leo_risus.mp4</td>
		</tr>
	)
}

const Rows = () => {

	return (
		<tbody>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</tbody>
	)
}

const VideoList = () => {

	return (
		<Table striped hover>
			<Rows />
		</Table>
		// <ListGroup variant="flush">
		// 	<Item />
		// 	<Item />
		// 	<Item />
		// 	<Item />
		// 	<Item />
		// 	<Item />
		// </ListGroup>
	)
}

export default VideoList