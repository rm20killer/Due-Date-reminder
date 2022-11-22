const { SlashCommandBuilder } = require("@discordjs/builders");
module.exports = {
    data: new SlashCommandBuilder()
    .setName("create reminder")
    .setDescription("creates a reminder")
    .addStringOption(option =>
        option.setName('minecraft-username')
            .setDescription('Enter your full minecraft username')
            .setRequired(true)),
    async execute(interaction, client) {
        // await interaction.reply("Pong!");

    },
};
