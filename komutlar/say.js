const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let sunucu = ""; //sunucu ID

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
    const embed = new Discord.RichEmbed()
        .addField("<a:monn:722716496584769546> Toplam Üye ", message.guild.memberCount)
        .addField("<a:monn:722716496584769546> Aktif Üye  ", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("<a:monn:722716496584769546> Seslideki üye sayısı ", count)
 
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Sunucudaki Ses,Üye,Tag Alan Ve Boost Basan Kullanıcıları GÖsterir.',
    usage: 'say'
};