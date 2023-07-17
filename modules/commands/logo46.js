const API = "https://api.s4g0r.repl.co/api/textpro?number=46&text="
module.exports.config = {
	name: "logo46",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lee Siwoo",
	description: "logo",
	commandCategory: "text maker",
	usages: "...",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits != "Lee Siwoo") {
        console.log("[ Don't Change Credit "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("X5" , event.threadID, event.messageID);
}
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("Please wait few second", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: " Yourrrr Logo Is Readyyy Sir", attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};