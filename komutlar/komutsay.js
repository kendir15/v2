const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

  try {
    
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} - Komut Sayısı`)
    .setDescription('**\nMON-BOT`da Toplam**  **' + client.commands.size + '** **Komut Vardır!**')
    .setColor("#ff0000")
    .setThumbnail('https://cdn.discordapp.com/avatars/714756833394425867/fe39c5bdcab153161cf55de0c780b41b.png?size=2048')
    .setTimestamp()
    .setFooter(message.author.username , message.author.avatarURL)

    return message.channel.send({embed});
    
    message.channel.send();
  } catch (err) {
    message.channel.send('Daha Sonra Tekrar Deneyin!\n' + err).catch();
  }
};

exports.conf = {
  enabled: true,
  aliases: ['komut-sayısı'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutlar'
};