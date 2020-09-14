
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`<a:monn:722716496584769546>\MON-BOT KOMUTLAR SUNUCU-KUR\<a:monn:722716496584769546>\\`,
` \`m.sunucukur\` = Sİze Bir Sunucu Kur
 




`)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: 'sunucukur-yardım',
  description: ' 3 sayfası ama gilidir paylaşmayın',
  usage: ''
}
//KENDİR15TARAFINDAN KODLANMIŞTIR