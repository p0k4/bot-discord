const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nowaday")
    .setDescription("A Playlist do dia-a-dia"),

  async execute(interaction) {
    await interaction.reply(
      "https://open.spotify.com/playlist/6J1nzRHY3ZGw11rh05Z5sH?si=02d0fbfad3b1490d"
    );
  },
};

