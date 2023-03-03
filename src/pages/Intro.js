import React /*, { useState }*/ from 'react'
import useTitle from '../hooks/useTitle'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeTitle } from '../store/titleSlice'
import { showModal } from '../store/modalSlice'

const Intro = () => {

	useTitle('Home')

	const dispatch = useDispatch()

	const testTitle = () => dispatch(changeTitle('qwerty'))
	const testModal = () => dispatch(showModal(1234))

	return (
		<div>
			<p>Intro page.</p>
			<Button variant="primary" onClick={() => {testTitle()}}>Test Title</Button>
			<Button variant="primary" onClick={() => {testModal()}}>Test Modal</Button>
		</div>
	)
}

export default Intro