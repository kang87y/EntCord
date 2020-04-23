let client = null;

$.get("https://raw.githack.com/discordjs/discord.js/webpack/discord.master.min.js").done(e => {
    client = new Discord.Client()
});

if (Entry.variableContainer.getVariableByName('EntTube').getValue() && client) {
    client.login(Entry.variableContainer.getVariableByName('EntTube').getValue()).then(e => alert(`${client.user.tag} is Login`)).catch(err=>alert(`Error...\n${err}`))
}