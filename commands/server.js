const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Verificar informações do canal"),
  async execute(interaction) {
    
    // interaction.guild is the object representing the Guild in which the command was run
    
    await interaction.reply(
      `Este canal chama-se ${interaction.guild.name} e estão ${interaction.guild.memberCount} membros on-line`
    );
  },
};
