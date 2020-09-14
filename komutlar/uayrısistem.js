
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**\<a:monn:722716496584769546>\MON-BOT eğlence KOMUTLAR\<a:monn:722716496584769546>**`,
` \<a:monn:722716496584769546>\`uyar\` = etikelenen kişi uyarılır +1
\<a:monn:722716496584769546>\ \ \`uyarı-kaldır\` = etiketlenen kişinini uyarısı kalkar -1
\<a:monn:722716496584769546>\ \`uyarılar\` = etikelen kişinin toplam kaç uyarısı olduğu yazar 
  
`)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [,],
  permlevel: 0
};

exports.help = {
  name: 'uayrısistemi',
  description: 'eğlencedir',
  usage: 'eğlence'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR