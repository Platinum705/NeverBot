const Discord = require("discord.js");
const robot = new Discord.Client();
const fs =require("fs")
var p = "!"

robot.on('ready', () => {
    robot.user.setActivity('Вход в Дискорд аккаунт',{ type: "PLAYING" })
    robot.user.setStatus('dnd')
    setTimeout(status1, 10000)
    console.log('ready launched bot...')
});

function status1() {
    robot.user.setActivity('Аниме',{ type: "WATCHING" })
    robot.user.setStatus('online')
};




 robot.on('guildMemberAdd', (member) => {
                                                            member.addRole('459206853822251018')
                                                        });


robot.on('message', message => {
  if (message.content === (p + 'ping')) {
message.channel.send('Pinging...').then(sent => {
    sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
	console.log('Кто то узнал пинг бота!')
    });
  }
});



robot.login(process.env.BOT_TOKEN);



