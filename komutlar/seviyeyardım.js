const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(' Seviye Komutları')
.setTimestamp()
.addField('<a:monn:722716496584769546>Seviye.', '**▫️** **Kullanım m.seviye**')
.addField('<a:monn:722716496584769546>Seviye Ayarlar.', '**▫️** **Kullanım    m.seviye-ayarlar**')
.addField('<a:monn:722716496584769546>Seviye Top.', '**▫️** **Kullanım    m.seviye-top**')
.addField('<a:monn:722716496584769546>Seviye Log.', '**▫️** **Kullanım    m.seviye-log**')
.addField('<a:monn:722716496584769546>Seviye Rol.', '**▫️** **Kullanım    m.seviye-rol**')
.addField('<a:monn:722716496584769546>Seviye Sınır.', '**▫️** **Kullanım    m.seviye-sınır**')
.addField('<a:monn:722716496584769546>Seviye XP.', '**▫️** **Kullanım   m.seviye-xp**')
.addField('<a:monn:722716496584769546>Seviye Rolleri.', '**▫️** **Kullanım <   m.seviye-rolleri**')
.addField('<a:monn:722716496584769546>Seviye Sıfırla.', '**▫️** **Kullanım   m.seviye-sıfırla**')
.addField('<a:monn:722716496584769546>NOT.', '**▫️** **Sistem Çok Uzun Olduğundan Dolayı 2 Yardım Koduna Ayrılmıştır. m.seviye-yardım2**')
.setTimestamp()
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
  name: 'seviye-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};