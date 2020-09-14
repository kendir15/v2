const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, message, args) => {
  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.RichEmbed()
    .addField("**》 Yapımcım 《**", `<@552180565814542336>`)
 .addField("**》 Yapımcım 《**", `<@720562744629264427>`)
    .setTitle('MON-BOT  bilgi/İstatistik')
    .setColor('RED')
  .addField("  Bellek kullanımı", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
  .addField(" Çalışma süresi", duration)
  .addField("  Kanallar", client.channels.size.toLocaleString(), true)
  .addField("  Discord.JS sürüm", "v"+Discord.version, true)
  .addField("  Ping", client.ping+" ms", true)
  .addField("» Linkler", `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8)` + "** | **" + `[Destek Sunucusu](https://discord.gg/G4y5ZZk)`, false); 
    //.setThumbnail(client.user.avatarURL())
  for(i=0;i<client.shard.count;i++) {
    shardembed.addField(`Shard ${i+1} | Ping: ${Math.round(shardinfo.ping[i])}ms `, ` <a:monn:741949443384934400> ${shardinfo.server_count[i]}  Sunucu 
<a:monn:741949443384934400>${shardinfo.user_count[i]}  Kullanıcı
<a:monn:741949443384934400>Uptime ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} `)
    }
    message.channel.send(shardembed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["shard-bilgi","i","istatistik"],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};