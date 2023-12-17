const { SlashCommandBuilder ,ActionRowBuilder, StringSelectMenuBuilder, Component, } = require("discord.js");

const row = new ActionRowBuilder().addComponents(
  new StringSelectMenuBuilder()
    .setCustomId("select")
    .setPlaceholder("Escolhe a linguagem")
    .addOptions(
      {
        label: "javascript",
        description: "Veja a documentação de Javascript",
        value: "javascript",
      },
      {
        label: "python",
        description: "Veja a documentação de Python",
        value: "python",
      },
      {
        label: "C#",
        description: "Veja a documentação de C#",
        value: "csharp",
      },
      {
        label: "discord.js",
        description: "Veja a documentação de Discord.js",
        value: "discordjs",
      }
    )
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acede a documentação"),

  async execute(interaction) {
    await interaction.reply({
      content: "Selecione uma das opcões abaixo:",
      components: [row],
    });
  },
};
