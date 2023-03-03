import React from 'react'
import { Button, Figure, Modal } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import Video from '../../components/Video'
import { closeModal } from '../../store/modalSlice'
import './appModal.css'

const Footer = () => {
	return (
		<Modal.Footer>
			<Button variant="secondary" onClick={close}>
				Close
			</Button>
			<Button variant="primary" onClick={close}>
				Save Changes
			</Button>
		</Modal.Footer>
	)
}

const Content = ({data}) => {

	const {mode, url, content = '…'} = data

	switch (mode) {
		case 'img':
			return (
				<Figure>
					<Figure.Image src={url}/>
				</Figure>
			)

		case 'video':
			return (
				<Video url='/assets/video/video-example.mp4' />
			)
	
		default:
			return <div>{content}</div>
	}
}

const AppModal = () => {

	const dispatch = useDispatch()
	const close = () => dispatch(closeModal())

	const modalState = useSelector(state => state.modal)

	const {show, mode, title, showFooter, fullscreen} = modalState

	return (
		<Modal
			className={mode && `modal-${mode}`}
			show={show}
			onHide={close}
			fullscreen={fullscreen}
		>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Content data={modalState} />
			</Modal.Body>
			{showFooter && <Footer />}
		</Modal>
	)
}

export default AppModal