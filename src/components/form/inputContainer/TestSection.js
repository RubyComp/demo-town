import React from 'react'

const Block = () => {

	return (
		<span>123</span>
	)

}

const Container = ({children}) => {

	return (
		<div>
			{children}
		</div>
	)

}

const TestSection = () => {

	return (
		<Container>
			<Block />
			<Block />
			<Block />
		</Container>
	)

}

export default TestSection