
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
` \`m.ban\` = Etikelenen kişi sunucudan yasaklanır
 
 \`m.kick\` = Etikelenen kişi sunucudan Atarsınız

\`m.mute\` = Etikelenen kişiyi sunucuda susturursunuz

\`m.unaban\` = etiketlenen kişinin banını kaldırır

 \`m.mod-log #kanal\` = Uyarı komutu ile yapılan uyarılar o kanalda logu olur

\`m.chat-log #kanal\` =  chat- log oluşturur 

\`m.uyarısistemi\` = uyarı sistemini görürüsünüz

\`m.sil\` = belittiğiniz mesaj kadar mesaj siler 1-100

\`m.slowmode\` =  Yavaş mode ayarlarsınız




`)
return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili1','yetkilikomut','yetkili'],
  permlevel: 0
};

exports.help = {
  name: 'yetkiyardım',
  description: 'yardım 3 sayfası ama gilidir paylaşmayın',
  usage: ''
}
//KENDİR15TARAFINDAN KODLANMIŞTIR