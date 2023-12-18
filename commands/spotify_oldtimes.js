const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("spotify_oldtimes")
    .setDescription("Minha playlist daqueles tempos"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/3e4oJtT7IPIQ5C7bn2fITL?si=9b13d23ed8dc4eb5"
    );
  },
};

