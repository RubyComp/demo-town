import React from 'react'
import { Figure } from 'react-bootstrap'

const Picture = ({url, alt, height, width}) => {
	return (
		<Figure
			style={{
				backgroundColor: 'red',
				display: 'block',
				height: height,
				maxWidth: width
			}}>
			
			<Figure.Image
				width={width}
				height={height}
				alt={alt}
				src={url}
				style={{
					display: 'block',
					objectFit: 'cover',
					height: '100%',
					width: '100%'
				}}
			/>
			{/* <Figure.Caption>Nulla vitae elit libero, a pharetra augue mollis interdum.</Figure.Caption> */}
		</Figure>
	)
}

export default Picture