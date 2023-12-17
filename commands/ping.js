const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("'O meu IP'"),

  async execute(interaction) {
    const embedping = new EmbedBuilder()
    .setColor('Green')
    .setDescription(`O meu IP: ${interaction.client.ws.ping}`)


    await interaction.reply({embeds: [embedping], ephemeral: true});
  },
};


