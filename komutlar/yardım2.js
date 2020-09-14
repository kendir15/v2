const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Seviye 2 Komutları')
.setTimestamp()
.addField('<a:monn:722716496584769546>Örnek Kullanım1', '**▫️** **m.seviye-log #kanal**')
.addField('<a:monn:722716496584769546>Örnek Kullanım2', '**▫️** **m.seviye-log sıfırla**')
.addField('<a:monn:722716496584769546>Örnek Kullanım3', '**▫️** **m.seviye-rol @rol Seviye**')
.addField('<a:monn:722716496584769546>Örnek Kullanım4', '**▫️** **m.seviye-rol sıfırla**')
.addField('<a:monn:722716496584769546>Örnek Kullanım5', '**▫️** **m.seviye-sınır 100-500**')
.addField('<a:monn:722716496584769546> Örnek Kullanım6', '**▫️** **m.seviye-sınır sıfırla**')
.addField('<a:monn:722716496584769546> Örnek Kullanım7', '**▫️** **m.seviye-xp Sayı**')
.addField('<a:monn:722716496584769546> Örnek Kullanım8', '**▫️** **m.seviye-xp sıfırla**')
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye-yardım2',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};