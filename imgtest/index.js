module.exports = {
	name: "imgtest",
	description: "testing to get rid of background image when there is no text",
	category: "Rugby",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			width: "100",
			height: '100'
		}
	},
	entry_props: [
		{
			name: "gk",
			description: "GoalKeeper",
			type: "String"
		},
		{
			name: "rb",
			description: "Right Back",
			type: "String"
		},
		{
			name: "cb1",
			description: "Centre Back 1",
			type: "String"
		},
		{
			name: "cb2",
			description: "Centre Back 2",
			type: "String"
		},
		{
			name: "cb3",
			description: "Centre Back 3",
			type: "String"
		},
		{
			name: "lb",
			description: "Left Back",
			type: "String"
		},
		{
			name: "rm",
			description: "Right Midfielder",
			type: "String"
		},
		{
			name: "cdm",
			description: "Centre Defensive Midfielder",
			type: "String"
		},
		{
			name: "cm1",
			description: "Centre Midfielder 1",
			type: "String"
		},
		{
			name: "cm2",
			description: "Centre Midfielder 2",
			type: "String"
		},
		{
			name: "cm3",
			description: "Centre Midfielder 3",
			type: "String"
		},
		{
			name: "cam",
			description: "Centre Attacking Midfielder",
			type: "String"
		},
		{
			name: "lm",
			description: "Left Midfielder",
			type: "String"
		},
		{
			name: "rw",
			description: "Right Winger",
			type: "String"
		},
		{
			name: "st1",
			description: "Striker 1",
			type: "String"
		},
		{
			name: "st2",
			description: "Striker 2",
			type: "String"
		},
		{
			name: "st3",
			description: "Striker 3",
			type: "String"
		},
		{
			name: "lw",
			description: "Left Winger",
			type: "String"
		},
	],
	vue_template: getFile("imgtest.html").toString(),
	//vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}
