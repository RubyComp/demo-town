const baseUrl = 'http://u1796957.isp.regruhosting.ru/api/town'

const config = {
	app: {
		name: 'Town 1'
	},
	api: {
		getResidents: `${baseUrl}/residentials`,
		getObjects: `${baseUrl}/objects`,
		getOptions: `${baseUrl}/options`,
	},
	path: {
		img: '/assets/img/',
		objects: '/objects/'
	}
}

export default config



// getResidents: 'https://63f3aa70864fb1d6001bc0fe.mockapi.io/api/town/residentials',
// getObjects: 'https://63f3aa70864fb1d6001bc0fe.mockapi.io/api/town/objects'