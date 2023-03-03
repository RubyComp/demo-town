class lengthValidate {

	constructor(length, minOrMax, message='') {
		this.length = length
		this.minOrMax = minOrMax
		this.message = message
	}

	/** 
	 * every validator should have this validate method
	 * automatically input will inject from store the exact value form this key
	 * return error message
	 * */
	validate(value){
		if (this.minOrMax === 'min'){
			if (value.length < this.length){
				return this.message || 'Minimum '+ this.length + ' character allow!'
			}
		}

		if (this.minOrMax === 'max'){
			if (value.length > this.length){
				return this.message || `Maximum ${this.length} character allow!`
			}
		}

		return ''
	}
}

export default lengthValidate