module.exports.config = {
    name: "avatar",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "L. SIWOO",
    description: "create avt wibu",
    commandCategory: "Create a banner",
    usages: "[ID] [TEXT] [TEXT]",
    cooldowns: 5
};

	onStart: async function ({ args, message, getLang }) {
		const content = args.join(" ").split("|").map(item => item = item.trim());
		let idNhanVat, tenNhanvat;
		const chu_Nen = content[1];
		const chu_Ky = content[2];
		const colorBg = content[3];
		if (!args[0])
			return message.SyntaxError();
		message.reply(getLang("initImage"));
		try {
			const dataChracter = (await axios.get("https://goatbotserver.onrender.com/taoanhdep/listavataranime?apikey=ntkhang")).data.data;
			if (!isNaN(content[0])) {
				idNhanVat = parseInt(content[0]);
				const totalCharacter = dataChracter.length - 1;
				if (idNhanVat > totalCharacter)
					return message.reply(getLang("invalidCharacter", totalCharacter));
				tenNhanvat = dataChracter[idNhanVat].name;
			}
			else {
				const findChracter = dataChracter.find(item => item.name.toLowerCase() == content[0].toLowerCase());
				if (findChracter) {
					idNhanVat = findChracter.stt;
					tenNhanvat = content[0];
				}
				else
					return message.reply(getLang("notFoundCharacter", content[0]));
			}
		}
		catch (error) {
			const err = error.response.data;
			return message.reply(getLang("errorGetCharacter", err.error, err.message));
		}

		const endpoint = `https://goatbotserver.onrender.com/taoanhdep/avataranime`;
		const params = {
			id: idNhanVat,
			chu_Nen,
			chu_Ky,
			apikey: "ntkhangGoatBot"
		};
		if (colorBg)
			params.colorBg = colorBg;

		try {
			const avatarImage = await getStreamFromURL(endpoint, "avatar.png", { params });
			message.reply({
				body: getLang("success", tenNhanvat, idNhanVat, chu_Nen, chu_Ky, colorBg || getLang("defaultColor")),
				attachment: avatarImage
			});
		}
		catch (error) {
			error.response.data.on("data", function (e) {
				const err = JSON.parse(e);
				message.reply(getLang("error", err.error, err.message));
			});
		}
	}
};