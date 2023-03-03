import React from 'react'
import { Carousel } from 'react-bootstrap'
import config from '../config'

const Slider = () => { /* TODO */

	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={config.path.img + 'example-apartment.jpg'}
					alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={config.path.img + 'example-apartment-1.jpg'}
					alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={config.path.img + 'example-apartment.jpg'}
					alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	)
}

export default Slider