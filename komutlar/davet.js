const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`<a:monn:722716496584769546>\ ${client.user.username}   \  `)
        .setDescription(`
<a:monn:722716496584769546>\ **Botun Davet Linki İçin** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8) 
<a:monn:722716496584769546>\ **Destek Sunucusu İçin** [TIKLA](https://discord.gg/a2jVCK7)
<a:monn:722716496584769546>\ **WEBSİTE** [TIKLA](YAKINDA/)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
