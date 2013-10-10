App.User = DS.Model.extend({
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	email: DS.attr('string'),
	photo: DS.attr('string')
});

App.User.FIXTURES = [
	{	id: 1,
		firstname: "Andy",
		lastname: "Sack",
		email: "Andy@Codefellows.org",
		photo: "img/Andy.png"
	},
	{	id: 2,
		firstname: "Will",
		lastname: "Little",
		email: "Will@Codefellows.org",
		photo: "img/Will.png"
	},
	{	id: 3,
		firstname: "Brent",
		lastname: "Turner",
		email: "Brent@Codefellows.org",
		photo: "img/Brent.png"
	},
	{	id: 4,
		firstname: "Brook",
		lastname: "Riggio",
		email: "Brook@Codefellows.org",
		photo: "img/Brook.png"
	},
	{	id: 5,
		firstname: "Megha",
		lastname: "Gulati",
		email: "Megha@Codefellows.org",
		photo: "img/Megha.png"
	},
	{	id: 6,
		firstname: "Mike",
		lastname: "Anderson",
		email: "Mike@Codefellows.org",
		photo: "img/Mike.png"
	},
	{	id: 7,
		firstname: "Lindy",
		lastname: "Merida",
		email: "Lindy@Codefellows.org",
		photo: "img/Lindy.png"
	},
	{	id: 8,
		firstname: "Ivan",
		lastname: "Storck",
		email: "Ivan@Codefellows.org",
		photo: "img/Ivan.png"
	},
];