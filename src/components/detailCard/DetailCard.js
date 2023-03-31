import React from 'react'
import { ListGroup, Stack } from 'react-bootstrap'
import FieldBlock from '../form/field/FieldBlock'
import './detailCard.css'

const DetailCard = () => ( /* TODO */
	<ListGroup className="detail-card pt-3 pb-4" variant="flush">
		{/* <ListGroup.Item>
			<Stack className="align-items-start justify-content-center" direction="horizontal" gap={4}>
				<FieldBlock id="active" />
				<FieldBlock id="public" />
				<FieldBlock id="mortgage" />
			</Stack>
		</ListGroup.Item> */}
		<ListGroup.Item>Morbi leo risus</ListGroup.Item>
		<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
	</ListGroup>
)


export default DetailCard