const objectEditFields = {
	'name': {
		name: 'Title',
		type: 'text',
		category: 'info'
	},
	'address-1': {
		name: 'Address (Line 1)',
		type: 'text',
		category: 'info',
		desc: 'e.g. Street, House',
		// desc: 'Some description',
	},
	'address-2': {
		name: 'Address (Line 2)',
		type: 'text',
		category: 'info',
		desc: 'e.g. Appartment, Room',
		// desc: 'Some description',
	},
	'zip': {
		name: 'ZIP Code',
		type: 'text',
		category: 'info',
		note: 'XXXXX-YYYY',
	},
	'city': {
		name: 'City',
		type: 'select',
		source: 'city',
		category: 'info'
	},
	'state': {
		name: 'State',
		type: 'select',
		source: 'state',
		category: 'info'
	},
	'country': {
		name: 'Country',
		type: 'select',
		source: 'country',
		category: 'info'
	},
	'note': {
		name: 'Note',
		type: 'textarea',
		category: 'info'
	},
	'public': {
		name: 'Public',
		type: 'switch',
		category: 'info'
	},
	'active': {
		name: 'Active',
		type: 'switch',
		note: 'Active',
		category: 'info'
	},
	'mortgage': {
		name: 'Mortgage',
		type: 'switch',
		note: 'Mortgage',
		category: 'info'
	},
	'test-check-1': {
		name: 'Test check 1',
		type: 'check',
		category: 'properties'
	},
	'test-check-2': {
		name: 'Test check 2',
		type: 'check',
		category: 'properties'
	},
	'test-check-3': {
		name: 'Test check 3',
		type: 'check',
		category: 'properties'
	},
	'sale-type': {
		name: 'Sale type',
		type: 'radio',
		category: 'properties'
	},
	'photo': {
		name: 'Promo image',
		type: 'img',
		category: 'info'
	},
	'gallery': {
		name: 'Gallery',
		type: 'image-gallery',
		category: 'info'
	},
	'videos': {
		name: 'Videos',
		type: 'video-gallery',
		category: 'info'
	},
	'docs': {
		name: 'Documents',
		type: 'doc-gallery',
		category: 'info'
	},
	'floor-current': {
		name: 'Floor',
		type: 'number',
		category: 'info'
	},
	'floors-count': {
		name: 'Count of floors',
		type: 'number',
		category: 'info'
	},
	'floors-at-building': {
		name: 'Building\'s floors',
		type: 'number',
		category: 'info'
	},
	'type': {
		name: 'Sale type',
		type: 'select',
		source: 'sale_types',
		category: 'info'
	},
	'coast': {
		name: 'Coast',
		type: 'price',
		category: 'info',
	},
	'square': {
		name: 'Square (m²)',
		type: 'number',
		category: 'info'
	},

	'owner-name': {
		name: 'Owner name',
		type: 'text',
		category: 'contacts'
	},
	'owner-phone': {
		name: 'Owner\'s phone',
		type: 'phone',
		category: 'contacts'
	},
	'realtor-name': {
		name: 'Realtor Name',
		type: 'text',
		category: 'contacts'
	},
	'realtor-phone': {
		name: 'Realtor phone',
		type: 'phone',
		category: 'contacts'
	},
}

export default objectEditFields