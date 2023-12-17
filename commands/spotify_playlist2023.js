const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spotify_playlist2023")
    .setDescription("Minha playlist de 2023"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/1hcuw56RtdAy2flbajJncf?si=db5df6380f934426"
    );
  },
};

