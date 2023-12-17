const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spotify_summer2023")
    .setDescription("Minha playlist de verao 2023"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/2fVUKi2kCpoCLwQkRwekOw?si=06564bfef33145d2"
    );
  },
};

