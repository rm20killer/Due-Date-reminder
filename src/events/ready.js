
//schemas
const discord = require("discord.js");
//timers
const games = require('../auto/games');
const statusUpdater = require("../auto/statusUpdater");
module.exports = {
	name: 'ready',
	execute(client) {
		console.log(`Logged In as ${client.user.tag}`);
		try{
			mailboxSchema.sync();
		}
		catch(err){
			console.log(err);
		}
		finally{
			console.log("schema synced");
		}
		//games.execute();
		//statusUpdater.execute(client);
	},
};