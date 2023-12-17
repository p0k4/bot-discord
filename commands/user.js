const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Dados do utilizador."),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply(
      `Este comando foi ativado por: ${interaction.user.username}, Estado: Ligado ${interaction.member.joinedAt}.`
    );
  },
};
