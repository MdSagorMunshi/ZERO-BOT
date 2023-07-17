module.exports.config = {
     name: "flirt",
     version: "1.0.0",
     hasPermssion: 2,
     credits: "Zeska fixed by Choru tiktokers",//dont change credit
     description: "Continuously tag the person you tag for many times\nYou can capture that person's heart",
     commandCategory: "group",
     usages: "war Ä‘áºm cháº¥t",
     cooldowns: 10,
     dependencies: {
         "fs-extra": "",
         "axios": ""
     }
}

module.exports.run = async function({ api, args, Users, event}) {
  var mention = Object.keys(event.mentions)[0];
    
  let name = event.mentions[mentions];
     var arraytag = [];
         arraytag.push({id: mention});
     var a = function (a) { api.sendMessage(a, event.threadID); }
a("Start flirting!");
setTimeout(() => {a({body: "I have a crush on you"})}, 3000);
setTimeout(() => {a({body: "Hehehe love you"})}, 5000);
setTimeout(() => {a({body: "Let's go to bed and have fun"})}, 7000);
setTimeout(() => {a({body: "have you eaten? You can eat me too, ugh ugh"})}, 9000);
setTimeout(() => {a({body: "Ahhhhhh slowly, we will also be many + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "where are you babe, I miss you"})}, 15000);
setTimeout(() => {a({body: "do you want me to give you some sweet chocolate later?"})}, 17000);
setTimeout(() => {a({body: "you're good, let's go for another round"})}, 20000);
setTimeout(() => {a({body: "I love you, I won't leave you alone" })}, 23000);
setTimeout(() => {a({body: "mwa mwa chup chup ugh ugh"})}, 25000);
setTimeout(() => {a({body: "Grrrr */caressing, just look at me, don't use your cellphone"})}, 28500);
setTimeout(() => {a({body: "babe I have something to tell you....."})}, 31000);
setTimeout(() => {a({body: "Will you marry me?"})}, 36000);
setTimeout(() => {a({body: "yieee happy anniversary babe"})}, 39000);
setTimeout(() => {a("wait let me get my chocolate and roses for you, give me a minute")}, 40000);
setTimeout(() => {a({body: "Tada 💐🍫💐, Happy Anniversary again dear"})}, 65000);
setTimeout(() => {a({body: "*After Many Years* \nBabe I know I'm old, I'm about to lose it.."})}, 70000);
setTimeout(() => {a({body: "But remember even if you lose me, I love you very much"})}, 75000);
setTimeout(() => {a({body: "Babe bye...."})}, 80000);
setTimeout(() => {a({body: "thanks for flirting with me, I'm happy..."})}, 85000);
setTimeout(() => {a("Good bye, see you in the next program."})}, 90000);


  
       }