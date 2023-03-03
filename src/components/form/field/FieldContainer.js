import React from 'react'
import ClearBtn from '../clearBtn/ClearBtn'

const FieldContainer = ({children, clearable}) => {

	return (
		<div className="field-container">
			{children}
			{ clearable && <ClearBtn />}
		</div>
	)

}
export default FieldContainer