import React from 'react'
import ClearBtn from '../clearBtn/ClearBtn'


const InputContainer = ({children}) => {

	return (
		<div className="input-container">
			{children}
			<ClearBtn />
		</div>
	)

}

export default InputContainer