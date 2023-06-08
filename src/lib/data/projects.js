import friendszone from '$lib/assets/images/projects/friendszone.png'
import flightBooker from '$lib/assets/images/projects/odin-flight-booker.png'
import connectFour from '$lib/assets/images/projects/connect-four.png'
import cvBuilder from '$lib/assets/images/projects/cv-builder.png'

const projects = [
	{
		id: 1,
		name: 'FriendsZone',
		description: 'A Facebook clone built with Ruby on Rails.',
		src: friendszone,
		github: 'https://github.com/jonichi16/friendszone',
		live: 'https://friendszone.up.railway.app/',
		tags: ['Rails', 'Ruby', 'Tailwind']
	},
	{
		id: 2,
		name: 'Odin Flight Booker',
		description: 'Search a flight to book app built with Ruby on Rails.',
		src: flightBooker,
		github: 'https://github.com/jonichi16/flight-booker-odin',
		live: '',
		tags: ['Rails', 'Ruby']
	},
	{
		id: 3,
		name: 'Connect Four',
		description: 'A two player CLI game built with Ruby.',
		src: connectFour,
		github: 'https://github.com/jonichi16/odin-ruby-projects/tree/main/connect-four',
		live: 'https://replit.com/@jhonelvillanueva/connectfour#README.md',
		tags: ['Ruby']
	},
	{
		id: 4,
		name: 'C.V. Builder',
		description: 'Simple resume maker built with React.',
		src: cvBuilder,
		github: 'https://github.com/jonichi16/cv-project',
		live: 'https://jonichi16.github.io/cv-project/',
		tags: ['React']
	}
]

export default projects
