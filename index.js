const Discord = require('discord.js');
const token = 'NTM1ODU3NTE4MzY3MzQyNTkz.XWAYWQ.me3UXq_0nvOfX7SYLIHcRo7MD2I'

var BLUE_ROLE = '580767519489654784';
var RED_ROLE = '580767602415239170';
var GREEN_ROLE = '580767635298582530';
var BLACK_ROLE = '580780121280217109';
var CYAN_ROLE = '580767454901436417';
var ELECTRIC_BLUE = '615231547565408259';
var Version = '0.1.9';
var owner = ['<@473276250815856650>'];
var ideaowner = ['<@540219416726601739>'];
// var blackRole = member.roles.find("name", "Black");

const bot = new Discord.Client();

bot.on('message', (message) => {
    const parts = message.content.split(' ');
    
    if (parts[0] == '+role') {

        if(parts[1] == 'red') {
            message.member.addRole(RED_ROLE);
            message.channel.send("Check your dms")
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        if(parts[1] == 'cyan') {
            message.member.addRole(CYAN_ROLE);
            message.channel.send("Check your dms")
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'green') {
            message.member.addRole(GREEN_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'blue') {
            message.member.addRole(BLUE_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }  
        else if(parts[1] == 'black') {
            message.member.addRole(BLACK_ROLE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        else if(parts[1] == 'el-blue') {
            message.member.addRole(ELECTRIC_BLUE);
            message.author.send(`Role in ${message.guild} has been given!`)
        }
        // remove role
}
else if (parts[0] == '+remove') {

    if(parts[1] == 'red') {
        message.member.removeRole(RED_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    if(parts[1] == 'cyan') {
        message.member.removeRole(CYAN_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'green') {
        message.member.removeRole(GREEN_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'blue') {
        message.member.removeRole(BLUE_ROLE);
        message.author.send(`Role in ${message.guild} has been removed!`)
    }
    else if(parts[1] == 'black'){
       message.member.removeRole(BLACK_ROLE);
       message.author.send(`Role in ${message.guild} has been removed!`)
    }

}
// host cmd
if (parts[0] == '+host') {
           let hembed = new Discord.RichEmbed()
           .setThumbnail(bot.user.displayAvatarURL)
           .setAuthor(bot.user.username, bot.user.displayAvatarURL)
           .setTimestamp()
           .setTitle(`${bot.user.username}'s Host Status`)
           .setColor(15158332)
           .addField("🔴", "I'm currently not hosted 24/7")
           .addField("I'm hosted from **Glitch**", `https://glitch.com`)
           .setFooter(bot.user.username, bot.user.displayAvatarURL)
           message.channel.send(hembed).then(sentEmbed => {
            sentEmbed.react("🔴");
            sentEmbed.react("✅");
        })
        if(message.reaction === "✅"){
           message.author.send("Im hosted from glitch")
        }
}
if(parts[0] == '+botinfo'){
    let biembed = new Discord.RichEmbed()
    .setColor(10181046)
    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
    .setTimestamp()
    .setTitle(`${bot.user.username}'s Info`)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("**Bot's Name:**", bot.user.username)
    .addField("**Bot Owner:**", owner, true)
    .addField("**The Bot idea was given by:**", ideaowner)
    .addField("**Bot Version:**", Version, true)
    .addField("**Bot ID:**", bot.user.discriminator)
    .setFooter(bot.user.username, bot.user.displayAvatarURL)
    message.channel.send(biembed);
}
// server info
if(parts[0] == '+si'){
        let siembed = new Discord.RichEmbed()
        
        .setColor(10181046)
        .setFooter(bot.user.username, bot.user.displayAvatarURL)
        .setTimestamp()
        .setTitle(`${message.guild.name}'s Server Info`, `${message.guild.iconURL}`)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Guild Owner:**", `${message.guild.owner}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .addField("**Server Region is:**", message.guild.region)
        message.channel.send(siembed);
}
// user info 
if(parts[0] == '+ui'){
    let whoisembed = new Discord.RichEmbed()
    .setTitle("User Info")
    .setColor(15158332)
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${message.author.username}`, true)
    .addField("**Discriminator:**", `${message.author.discriminator}`, true)
    .addField("**ID:**", `${message.author.id}`, true)
    .addField("**Status:**", `${message.author.presence.status}`, true)
    .addField("**Created At:**", `${message.author.createdAt}`, true)
    .addField("**Current Server:**", message.guild.name)
    .addField("**Current Roles:**", `${message.guild.member.roles}`, true)
    .addField("**Game:**",`${message.author.presence}` , true)
    .setFooter(bot.user.username, bot.user.displayAvatarURL);
    message.channel.send(whoisembed);
}
// help
if(parts[0] == '+help' || parts[0] == '+h'){
    let helpembed = new Discord.RichEmbed()
    .setTitle("Help Menu")
    .setColor(15158332)
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${bot.user.username} Commands`, bot.user.displayAvatarURL)
    .setDescription("_Miscellaneous Commands_")
    .addField("**!role <role or color>**", `- Gives you a role`, true)
    .addField("**!remove <role or color>**", `- Removes you a role`, true)
    .addField("**!ui**", `- Pulls your user info`, true)
    .addField("**!si**", `- Pulls the server info`, true)
    .addField("**!host**", `- Current host status of the bot`, true)
    .addField("**!bi or !botinfo**", `Pulls out the bot info`, true)
    .addField("**!h or !help**", `- Pulls out this menu`, true)
    .addField("**!ping**", `- Ping Pong`, true)
    .addField("**!avatar**", `- Shows your avatar`, true)
    .addField("**!channel**", `- DM's you with the link for my channel`, true)
    .addField("**!uptime**", ` - Shows how much time the \n bot was online`, true)
    .addField("**!website**", `- Messages you with the link to the website \n in the channel`, true)
    .setFooter(bot.user.username, bot.user.displayAvatarURL);
    message.channel.send(helpembed);
}
// ping
if(parts[0] == '+ping'){
     message.channel.send('🏓 pong');
     message.react('🏓');
}
if(parts[0] == '+uptime'){
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `
    }
    let uptimeembed = new Discord.RichEmbed()
    // .setFooter(bot.user.displayAvatarURL, bot.user.username)
    // .setTimestamp()
    // .setColor(15158332)
    // .setImage(bot.user.displayAvatarURL)
    // .setTitle(`I've been online for`)
    // .addField(`**Seconds:**`, sec)
    // .addField(`**Minutes:**`, min)
    // .addField(`**Hours:**`, hrs)
    // .addField("**Days:**", days)
    // message.channel.send(duration, uptimeembed)
    .setColor(1752220)
    .addField(`I've been online for ${duration(bot.uptime)}`)
    message.channel.send(uptimeembed);
   
} 
// chnnael developer 
  // developer youtube
   if(parts[0] == '+channel'){
  //    if(parts[1] != 'developer'){
        message.channel.send(`Are u sure u want the Developer's YT channel?`)
            message.channel.send("check your **DM**")
            message.author.send('https://youtube.com/channel/UCUOFYiaAECTJMO0PS_PmMnw')
     }
// }
//      if(parts[1] == 'developer'){
//        message.author.send('https://youtube.com/channel/UCUOFYiaAECTJMO0PS_PmMnw')
//  }      
//    }   

// available roles
// if(parts[0] == '!roles'){
//     let rolesembed = new Discord.RichEmbed()
//     .setDescription('<@580767519489654784> <@580767602415239170> <@580767635298582530> <@580780121280217109> <@580767454901436417> <@615231547565408259>')
//     message.channel.send(rolesembed);
// }

// status
// const fetch = require("node-fetch");
// if (parts[0] === '!status') {
// 	const { file } = fetch('https://icoding.statuskit.com/').then(response => response.json());

// 	message.channel.send(file);
// }
// avatar 
if(parts[0] == '+avatar'){
let aEmbed = new Discord.RichEmbed()
.setTitle(`${message.author.username}'s Avatar`, `${message.author.displayAvatarURL}`)
.setImage(`${message.author.displayAvatarURL}`)
.setFooter("Vexus Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
.setColor(15158332)
.setTimestamp();
message.channel.send(aEmbed)
}
// shutdown
// if(parts[0] == '!shutdown'){
    
//     if(message.author.id != owner) return message.channel.send("You're not bot owner!")

//     try {
//         await message.channel.send("Bot is shutting down...")
//         process.exit()
//     } catch(e) {
//         message.channel.send(`ERROR: ${e.message}`)
//     }
// }

// ban 
// if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")

// let banMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
// if(!banMember) return message.channel.send("Please provide a user to ban!")

// let reason = parts.slice(1).join(" ");
// if(!reason) reason = "No reason given!"

// if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command")

// banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
// message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))

// message.channel.send(`**${banMember.user.tag}** has been banned`).then(m => m.delete(5000))

//  let banembed = new Discord.RichEmbed()
//  .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
//  .addField("Moderation:", "ban")
//  .addField("Mutee:", banMember.user.username)
//  .addField("Moderator:", message.author.username)
//  .addField("Reason:", reason)
//  .addField("Date:", message.createdAt.toLocaleString())
 
//      let sChannel = message.guild.channels.find(c => c.name === "modlogs")
//      sChannel.send(banembed)

// say

// if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You can not use this command!")
    
// let argsresult;
// let mChannel = message.mentions.channels.first()

// message.delete()
// if(mChannel) {
//     argsresult = args.slice(1).join(" ")
//     mChannel.send(argsresult)
// } else {
//     argsresult = args.join(" ")
//     message.channel.send(argsresult)
// }

// website
if(parts[0] == '!website'){
      message.reply('https://role-bot2.glitch.me')
}


});
console.log("Role Bot is online")
bot.login(token);