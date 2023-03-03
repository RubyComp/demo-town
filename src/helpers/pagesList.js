import { faBarChart, faBuilding, faHourglass, faObjectGroup, faUser } from '@fortawesome/free-regular-svg-icons'

const pages = [
	{
		url: 'residents',
		showInNaw: true,
		active: true,
		title: 'Residentials',
		icon: faBuilding
	},
	{
		url: 'objects',
		showInNaw: true,
		active: true,
		title: 'Objects',
		icon: faObjectGroup
	},
	{
		url: 'latest',
		showInNaw: true,
		active: true,
		title: 'Latest activity',
		icon: faHourglass
	},
	{
		url: 'preferences',
		showInNaw: true,
		active: true,
		title: 'Preferences',
		icon: faBarChart
	},
	{
		url: 'users',
		showInNaw: true,
		active: true,
		title: 'Users',
		icon: faUser
	},
]

export {pages}