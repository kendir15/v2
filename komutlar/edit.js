const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  message.delete();
if(message.author.id !== ayarlar.sahip ) return message.channel.send("Bunu yapabilmek için yeterli yetkin yok");
  let mesajid = args[0];
  let devtr = args.slice(1).join(" ");
  message.channel.fetchMessages({ around: mesajid, limit: 1 }).then(msg => {
    const mesaj = msg.first();
    mesaj.edit(devtr);
    message.react(":white_check_mark:");
  });
};
//DevTR
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["düzenle", "mesajdüzenle"],
  permLevel: 4
};
exports.help = {
  name: "edit",
  description: "Botun attığı mesajı editler",
  usage: "edit [mesaj id] [yazacağınız şey]"
};
