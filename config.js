module.exports = {
	/* The token of your Discord Bot */
	token: "MTAxMzgwNDUxODU0NDI1MzAwOA.GuCMkS.hhxgJ3tRFu7KdZf5ZDxHQZJHjujaJHI-j8KxrY",
	/* For the support server */
	support: {
		id: "977544232975880253", // The ID of the support server
		logs: "1048168818050072626", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.atlanta-bot.fr", // The base URl of the dashboard
		logs: "XXXXXXXXXXX", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://www.atlanta-bot.fr" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AtlantaBot", // The URl of the mongodb database
	prefix: "S", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Sunrise" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "877848431983493132", // The ID of the bot's owner
		name: "Horizon#0138" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "XXXXXXXXXXX",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "40e2a64d-23c3-46b3-a0dc-e93f7a908dbd",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "XXXXXXXXXXX",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "6c05c31eb1092f460d521f61ddbefebfe6b261dfee23494b47d5fd4cee7382d0799b00f32e576edf09b105d9d4580f4aa2183a50ac94281d2c50b73f6ec66333",
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Horizon1010", // Founder's github account
	},
	/* The Bot status */
	status: [
		{
			name: "Orders from rising suns.",
			type: "LISTENING"
		},
		{
			name: "with my suns.",
			type: "PLAYING"
		}
	]
};
