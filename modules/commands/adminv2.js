// Don't Change Credit.
// Contact Me: www.leesiwoo.xyz
module.exports.config = {
	name: "admin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Sagor",
	description: "Bot operator information",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`
--------------------------------------------
FACEBOOK : L. SIWOO
GENDER : Male
Age : 18+
Relationship : Single
Work : Student, Programmer, IT Specialist, Gamer...!
INSTA :@leesiwoo_s
TELEGRAM : @leesiwoo_s
Any Question: www.leesiwoo.xyz`, event.threadID, event.messageID);