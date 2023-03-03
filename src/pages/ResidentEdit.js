import React from 'react'
// import { Button, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap'
import { Button, Form, Tab, Tabs } from 'react-bootstrap'
import useTitle from '../hooks/useTitle'
import ObjectsTable from '../components/table/objects/Table'
import TablePagination from '../components/TablePagination'

const BasicExample = () => (
	<Form>
		<Form.Group className="mb-3" controlId="formBasicEmail">
			<Form.Label>Email address</Form.Label>
			<Form.Control type="email" placeholder="Enter email" />
			<Form.Text className="text-muted">
				We never share your email with anyone else.
			</Form.Text>
		</Form.Group>

		<Form.Group className="mb-3" controlId="formBasicPassword">
			<Form.Label>Password</Form.Label>
			<Form.Control type="password" placeholder="Password" />
		</Form.Group>
		<Form.Group className="mb-3" controlId="formBasicCheckbox">
			<Form.Check type="checkbox" label="Check me out" />
		</Form.Group>
		<Button variant="primary" type="submit">
			Submit
		</Button>
	</Form>
)


const ResidentEdit = () => {

	// const action = 'Edit'

	useTitle('Resident: Test')

	return (
		<>
			<Tabs
				defaultActiveKey="objects"
				id="uncontrolled-tab-example"
				className="mb-3"
			>
				<Tab eventKey="objects" title="Objects">
					<ObjectsTable />
					<TablePagination count={5} active={1} />
				</Tab>
				<Tab eventKey="info" title="Info">
					<BasicExample />
				</Tab>
			</Tabs>

			{/* <Container fluid>
				<Row>
					<Col><BasicExample /></Col>
					<Col><BasicExample /></Col>
				</Row>
				<Row className="mt-5">
					<Col><BasicExample /></Col>
					<Col><BasicExample /></Col>
					<Col><BasicExample /></Col>
				</Row>
			</Container> */}
		</>
	)
}

export default ResidentEdit