const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')

// dotenv
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN } = process.env

// Importação de comandos
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
client.commands = new Collection()


for (const file of commandsFiles){
	const filePath = path.join(commandsPath, file)
	const command = require(filePath)
	if ("data" in command && "execute" in command) {
		client.commands.set(command.data.name, command)

	} else {
		console.log(`O comando inserido em ${filePath} Esta com "data" ou "execute" ausentes`)
	}

}

console.log(client.commands)

//login do bot

client.once(Events.ClientReady, c => {
	console.log(`${c.user.tag} online !`)
});

client.login(TOKEN)


// Ouvinte de interações com o bot

client.on(Events.InteractionCreate, async interaction =>{
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "javascript"){
            await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        } else if (selected == "python"){
            await interaction.reply("Documentação do Python: https://www.python.org")
        } else if (selected == "csharp"){
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        } else if (selected == "discordjs"){
            await interaction.reply("Documentação do Discord.js: https://discordjs.guide/#before-you-begin")
        }
         
    }
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comando não encontrado")
        return
    }
    try {
        await command.execute(interaction)
    } 
    catch (error) {
        console.error(error)
        await interaction.reply("Houve um erro ao executar esse comando!")
    }
})