
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
` 

 \`m.sunucubilgi\` = sunucunun biligilerini gösterir

\`m.say\` = sunucuyu sayar

\`m.sunucutanıt\` = sunucunuzu Tanıtır 

\`m.sayaç\` = sayaç sistem

\`m.otorol\` = Otorol Sistemi

\`m.seviye-yardım\` = seviye sistem

\`m.snipe\` = sunucuda en son silinen mesajı gösterir

`)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucuc','sunucu','sunucu'],
  permlevel: 0
};

exports.help = {
  name: 'sunucu',
  description: 'yardım 3 sayfası ama gilidir paylaşmayın',
  usage: ''
}
//KENDİR15TARAFINDAN KODLANMIŞTIR