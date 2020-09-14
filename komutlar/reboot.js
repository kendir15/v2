const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {

if (!message.guild) return;
if (!message.author.id == ayarlar.sahip) return message.channel.send("BOT SAHİBİ OLMAN LAZIM?")
message.delete();
message.channel.send('Eğer Kabul Ediyorsan => `onay` <= Yazmalısın').then(() => {
message.channel.awaitMessages(response => response.content === 'onay', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot Onaylama!').setDescription('Onay Verildi! Yeniden Başlatılıyorum...').setFooter('MON-BOT', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Yeniden Başlatma;').setDescription('Komut İptal Edildi!').setFooter('TheRenk', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stop'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu Yeniden Başlatır.',
  usage: 'reboot'
};