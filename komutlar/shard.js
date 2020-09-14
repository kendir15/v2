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
    .setTitle('MON-BOT Shard bilgi/İstatistik')
    .setFooter(`Bu Sunucunun Shardı: ${client.shard.id+1} `)
    .setColor('RED')
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
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'shard',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};