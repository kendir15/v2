const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**MON-BOT KOMUTLAR**`,


` <a:monn:741949443384934400> \`m.yetkili\` = yetkili komutlarına gider

  <a:monn:741949443384934400> \`m.sunucu\` = sunucu komutlarına gider

 <a:monn:741949443384934400> \`m.kulllanıcı\` = kullanıcı komuutlarına gider

 <a:monn:741949443384934400> \`m.eğlence\` = eğlence komutlarına gider 

 <a:monn:741949443384934400> \`m.bot\` =  Botun komutlarına gider

 
** [BOT DAVET LİNKİ](https://discordapp.com/oauth2/authorize?client_id=714756833394425867&scope=bot&permissions=8)** | ** [DESTEK SUNUCUMUZ](https://discord.gg/a2jVCK7)** | ** [WEBSİTE](http://9072040.259653.renderforestsites.com/)**
`)  
  .setFooter(`<:emoji_2:737554803261177916>  MON-BOT V,10 `,)
 .setThumbnail(message.author.avatarURL)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımana','yardımana','help'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım ana',
  usage: 'yardım'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR