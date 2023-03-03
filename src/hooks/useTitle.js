import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeTitle } from '../store/titleSlice'
import config from '../config'

const setHeadTitle = (title, prevailOnUnmount = false) => {

	const defaultTitle = useRef(document.title)
	const baseTitle = config.app.name

	useEffect(() => {
		document.title = `${baseTitle} – ${title}`
	}, [title])

	useEffect(() => () => {
		if (!prevailOnUnmount) {
			document.title = defaultTitle.current
		}
	}, [])

}

const setMainTitle = (title) => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(changeTitle(title))
	})

}


const useTitle = (title, prevailOnUnmount = false) => {

	setHeadTitle(title, prevailOnUnmount)
	setMainTitle(title)

}

export default useTitle