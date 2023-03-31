import React, { useEffect } from 'react'
import { Col, Container, Row, Stack, Tab, Tabs } from 'react-bootstrap'
// import { useLocation } from 'react-router-dom'
import DetailCard from '../components/detailCard/DetailCard'
import DocList from '../components/docList/DocList'
import FieldBlock from '../components/form/field/FieldBlock'
import Gallery from '../components/gallery/Gallery'
import Slider from '../components/Slider'
import VideoList from '../components/videoList/VideoList'
// import config from '../config'
import useTitle from '../hooks/useTitle'
import { Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { changeSquarePrice } from '../store/squarePriceSlice'
// import { useLocation } from 'react-router-dom'

const InfoSection = () => {

	const gap = 4

	return (
		<>
			<h2 hidden>Info</h2>

			<FieldBlock id="name" />

			<Stack className="align-items-start" direction="horizontal" gap={gap}>
				<FieldBlock id="coast" />
				<FieldBlock id="type" />
			</Stack>

			<Stack className="align-items-start" direction="horizontal" gap={gap}>
				<FieldBlock id="square" />
				<FieldBlock id="floor-current" />
				<FieldBlock id="floors-count" />
				<FieldBlock id="floors-at-building" />
			</Stack>

			<FieldBlock id="note" />

			<h3 className="mb-3">Location</h3>

			<FieldBlock id="address-1" />
			<FieldBlock id="address-2" />

			<Stack className="align-items-start" direction="horizontal" gap={gap}>
				<FieldBlock id="city" />
				<FieldBlock id="state" />
				<FieldBlock id="country" />
				<FieldBlock id="zip" />
			</Stack>
		</>
	)

}

const ImagesSection = () => {

	return (
		<>
			<h2 hidden>Images</h2>
			<Gallery />
		</>
	)
}

const VideoSection = () => {

	return (
		<>
			<h2 hidden>Images</h2>
			<VideoList />
		</>
	)
}

const DocSection = () => {

	return (
		<>
			<h2 hidden>Documents</h2>
			<DocList />
		</>
	)
}

const ContactsSection = () => {

	const gap = 4

	return (
		<>
			<h2 hidden>Contacts</h2>

			<Stack className="align-items-start" direction="horizontal" gap={gap}>
				<FieldBlock id="owner-name" />
				<FieldBlock id="owner-phone" />
			</Stack>
			<Stack className="align-items-start" direction="horizontal" gap={gap}>
				<FieldBlock id="realtor-name" />
				<FieldBlock id="realtor-phone" />
			</Stack>

		</>
	)
}

const Tabber = () => {

	return (
		<Tabs
			defaultActiveKey="info"
			className="mb-3"
		>
			<Tab eventKey="info" title="Info">
				<InfoSection />
			</Tab>
			<Tab eventKey="images" title="Images (14)">
				<ImagesSection />
			</Tab>
			<Tab eventKey="videos" title="Videos (2)">
				<VideoSection />
			</Tab>
			<Tab eventKey="docs" title="Documents (4)">
				<DocSection />
			</Tab>
			<Tab eventKey="contacts" title="Contacts">
				<ContactsSection />
			</Tab>
		</Tabs>
	)

}

const onSubmit = async values => {
	window.alert(JSON.stringify(values, 0, 2))
}

const handleChange = test => {
	console.log('changed', test)
}

const ObjectEdit = () => {

	// const location = useLocation()
	// const {pathname} = location
	// const objectId = pathname.split('/').reverse()[0]

	// [${objectId}]
	useTitle('Object: Some apartment')

	// React.useEffect(() => {
	// 	fetch(config.api.getObjectData)
	// 		.then((res) => {
	// 			console.log(res)
	// 			return res.json()
	// 		})
	// 		.then((json) => {
	// 			console.log(json)
	// 			if (json.status == 'ok') {
	// 				// setObjectsList(json.result)
	// 			}
	// 		})
	// }, [])

	return (
		<Container fluid>
			<Form
				onSubmit={onSubmit}
				// initialValues={{ firstName: 'Gary' }}
				render={({
					handleSubmit,
					// form,
					// submitting,
					// pristine,
					values
				}) => {
					const {coast, square} = values

					const squarePrice = {
						price: 0,
						currency: values.currency
					}

					if (coast > 0 && square > 0) {
						const price = (values.coast || 0) / (values.square || 1)
						squarePrice.price = parseFloat(price.toFixed(2))
					} else {
						squarePrice.price = 0
					}

					const dispatch = useDispatch()

					useEffect(() => {
						dispatch(changeSquarePrice(squarePrice))
					})


					return (
						<form onSubmit={handleSubmit} onChange={handleChange}>
							<Row>
								<Col xs lg="7">
									{/* <b>{squarePrice.value}</b> */}
									{/* <pre style={{fontSize:'12px'}}>{JSON.stringify(values, 0, 2)}</pre> */}
									<Tabber />
								</Col>
								<Col xs lg="5">
									<Slider />
									<DetailCard />
								</Col>
							</Row>
						</form>
					)}
				}
			>
				
			</Form>
		</Container>
	)
}

export default ObjectEdit