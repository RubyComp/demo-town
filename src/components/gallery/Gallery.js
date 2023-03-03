import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Figure } from 'react-bootstrap'
import './gallery.css'
import { useDispatch } from 'react-redux'
import { showModal } from '../../store/modalSlice'

const ItemsPlaceholder = () => {

	return (
		<>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</>
	)
}


const Item = () => {

	const url = '/assets/img/example-apartment-1.jpg'
	const dispatch = useDispatch()

	const imgData = {
		url: url,
		mode: 'img',
		title: 'Test title',
		fullscreen: true,
	}

	const imgOnClick = () => {
		dispatch(showModal(imgData))
	}

	return (
		<div className="pointer gallery-item">
			<Button variant="danger" className="clear-item" title="Remove item">
				<FontAwesomeIcon icon={faTrash} />
			</Button>
			<Figure onClick={imgOnClick}>
				<Figure.Image src={url}/>
			</Figure>
		</div>
	)
}
const Upload = () => {

	return (
		<div className="d-flex justify-content-center w-100 mt-4">
			<Button variant="primary">Upload new image</Button>
		</div>
	)
}

const Images = () => {
	return (
		<div className="gallery">
			<ItemsPlaceholder />
		</div>
	)
}

const Gallery = () => {

	return (
		<>
			<Images />
			<Upload />
		</>
	)
}

export default Gallery