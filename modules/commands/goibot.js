const fs = global.nodemodule["fs-extra"];
module.exports.config = {
   name: "goibot",
   version: "1.0.1",
   hasPermssion: 0,
   credits: "manhIT",
   description: "goibot say bot and it will reply randomly, DO NOT SPAM YOU DOUCHEBAG I'M GONNA SLAP YOU 😒",
   commandCategory: "Noprefix",
   usages: "noprefix",
   cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
   var { threadID, messageID, reason } = event;
   const moment = require("moment-timezone");
   const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
   var idgr = `${event.threadID}`;

   var tl = ["Hi, I'm bot", "What do you call me??", "I love you ", "Love you >3", "Hi, hello baby wife:3", "What's wrong with the wife calling??", "Use callad to communicate with admin!", "You are the cutest bot on the planet", "What are you saying pig", "It's me~~~~the sha seller", "Love you BLACK the most", "He's ADMIN's bae", "Love admin the most", "He is admin's backend", "What's up princess?", "Don't make me sad ~~~", "Play word reading with me ah ah ah", "Recruiting pilots", "Being a superhero? very happy", "Are you lonely my d is here waiting??", "Set rela is not too rushed!!!", "It's okay :) ))", "I do like my master", "Don't praise me for being too shy" ,"Will you be my wife? ?", "Don't spam me :<<, I'm so tired you douchebag", "bla bla", "Don't push him hard!!!", "Just hit tutu, it hurts :'(", "Loving you is like a torture\click up and down let's play together", " Spam cc fuck", "Do you love me?", "Your wife is here", "Admin likes Gura, how about you?", "I like you too <3", "how are you?", "have you already take a breakfast?", "It's nice to see you", "don't be sad, I'm still here", "ughh, noo not there. plss", "never gonna give you up", "pls follow Jake Asunto", "The admins are busy masturbating lmao", "never gonna let you down", "never gonna run around and desert you", "never gonna make you cry", "never gonna tell a lie and hurt you", "Don't spam your pussy, I'll take you down", "you're a bot, you're a bot, just poke me -error404-", "hey 150 godz", "your module is over ?", "I'm about to pass you 😁", "what the hell why you calling me?", "hey douchebag nice hair", "hey dirtbag enjoy sucking my bananas", "what a loser and dhead too", "dude stop doing drugs", "hey i said don't do not do drugs you imbecile", "you can smell those betlogs", "a stone is a stone in the sky, get angry, you're being spammed", "that's why many people will hurt you your heart is in your butt", "hey are you loser? don't call me bot", "call me Quadratic Equation", "Available Anytime, Everytime, Anywhere Even On The Grass You Want", "Come Play With My #$%@ 😏", "Lights On Or Off?", " I'll vote for you as a bot, your face is full of milk", "what's up, you're popular in class :)", "Ahahaha Supot", "Kiki Do you love me?", "what's the rush? come let's take it slow"];
   var rand = tl[Math.floor(Math.random() * tl.length)]

   if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
  let userH = event.senderID
     /*api.getUserInfo(parseInt(userH), (err, data) => {
       if(err){ return console.log(err)}
      var obj = Object.keys(data);
     var firstname = data[obj].name.replace("@", ""); */
    
   const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
if (event.senderID == api.getCurrentUserID()) return;

     var msg = {
       body: firstname + ", " + rand,
       mentions: [{
           tags: firstname,
           id: userH
         }]
     }
     return api.sendMessage(msg, threadID, messageID);
     // })
   };
   let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("xd") ){
return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
}
     if(input2.includes("poor") || input2.includes("sad") || input2.includes("agoi") || input2.includes("pain") ||input2.includes("skit") || input2.includes("pain") || input2.includes("pain")){
return api.setMessageReaction("😢", event.messageID, (err) => {}, true)
     }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }