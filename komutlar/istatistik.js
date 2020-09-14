const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('MON-BOT', client.user.avatarURL)
 .addField("**》 Yapımcım 《**", `<@552180565814542336>`)
 .addField("**》 Yapımcım 《**", `<@720562744629264427>`)
  .addField("  Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField(" Çalışma süresi", duration)
  .addField("  Sunucular", client.guilds.size.toLocaleString(), true)
   .addField(" Kullanıcı ", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("  Kanallar", client.channels.size.toLocaleString(), true)
  .addField("  Discord.JS sürüm", "v"+Discord.version, true)
  .addField("  Ping", client.ping+" ms", true)
  .addField("» Linkler", `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/a2jVCK7)`, false);
  return msg.channel.send(istatistikler);
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '.',
  description: 'c',
  usage: '.'
};