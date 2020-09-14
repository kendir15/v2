
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`<a:monn:722716496584769546>\MON-BOT KOMUTLAR Yetkili\<a:monn:722716496584769546>\\`,
` \`m.kullaıcı-bilgi\` = kullanıcı biligisine bakılır
 
\`m.avatar\` = avatarınıza bakarsnız



 YAKINDA



`)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı','kullanıcı','kullanıcı'],
  permlevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'yardım 3 sayfası ama gilidir paylaşmayın',
  usage: ''
}
//KENDİR15TARAFINDAN KODLANMIŞTIR