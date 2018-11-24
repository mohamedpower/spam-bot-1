const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "515688291526246411"; // ايدي السررفر
var channel = "515688360832925729";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , Dream , **')
    },400);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('ready', async() => {
var server = "508292167379451915"; // ايدي السررفر
var channel = "515659112101707776";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , Mohamed , **')
    },400);
})

client.on('ready', async() => {
var server = "508292167379451915"; // ايدي السررفر
var channel = "515659112101707776";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , Mido , **')
    },400);
})

client.on('ready', async() => {
var server = "508292167379451915"; // ايدي السررفر
var channel = "515659112101707776";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , PoWeR , **')
    },400);
})

client.on('ready', async() => {
var server = "508292167379451915"; // ايدي السررفر
var channel = "515659112101707776";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , YouTube , **')
    },400);
})

client.login(process.env.BOT_TOKEN);
