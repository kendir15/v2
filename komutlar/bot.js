const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  
  .setColor(0xF001FA)
  .setDescription(`**MON-BOT BİR BOTTAN DAHA FAZLASI**`)
  .addField(`**MON-BOT KOMUTLAR**`,


` 
\`m.komutlar\` = Botun toplam kaç komutu olduğunu gösterir

  \`m.yapımcım\` = BoT Yapımıcılarına Gider

 \`m.şikayet\` = Bot Hakkında Şikayetler 

 \`m.öneri\` = Bot a öneride Bulunursunuz

 \`m.istatistik\` =  Botun istatistiklerini gösterir

\`m.davet\` =  Botun davet linki verir

\`m.korona\` = Korona virüs istatistikleri
 

`)  
 .setThumbnail(message.author.avatarURL)
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
  name: 'bot',
  description: 'yardım ana',
  usage: 'yardım'
}
//KENDİR15TARAFINDAN KODLANMIŞTIR