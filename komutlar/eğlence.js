
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
` \<a:monn:722716496584769546>\`rip\` = mezarınız olur. 
\<a:monn:722716496584769546>\ \ \`kapaklaflar\` = etiketlenen kişiye kapak laf bulur. 
\<a:monn:722716496584769546>\ \`espri\` = BOT espri yapar 
\<a:monn:722716496584769546>\ \`kralol\` = kral olursunuz
\<a:monn:722716496584769546>\ \`kafasalla\` = kafa sallama takiği verir
\<a:monn:722716496584769546>\ \`sigarayak\` = sigara yakar
\<a:monn:722716496584769546>\ \`tekerleme\` = tekerleme söyler
<a:monn:722716496584769546>\ \`emojiyazı\` = emojili yazı
<a:monn:722716496584769546>\ \`yazı-tura\` = Yazı Tura oyunu
`)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yeğlen','eğlencenin','eğlence'],
  permlevel: 0
};

exports.help = {
  name: 'eğlenin',
  description: 'eğlencedir',
  usage: 'eğlence'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR