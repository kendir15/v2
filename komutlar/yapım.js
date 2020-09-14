
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
      if(message.author.id !== "720562744629264427") return message.channel.send(":no_entry: Vay Çakal Bu Sahibimin Komutu");
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`<a:monn:722716496584769546>\MON-BOT KOMUTLAR YAPIM\<a:monn:722716496584769546>\\`,
` \`m.stop\`\`m.reboot\` = 
 
 \`m.eval\` = komut çıkarı

\`m.eval\` = İd ile Sunucu davet linki

\`m.edit\` = mesaj editler


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
  name: 'yapım',
  description: 'yardım 3 sayfası ama gilidir paylaşmayın',
  usage: ''
}
//KENDİR15TARAFINDAN KODLANMIŞTIR