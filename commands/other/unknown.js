const { Command } = require('discord.js-commando');

module.exports = class UnknownCommandCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'unknown-command',
      group: 'util',
      memberName: 'unknown-command',
      description: 'Displays help information for when an unknown command is used.',
      examples: ['unknown-command kickeverybodyever'],
      unknown: false,
      hidden: true
    });
  }

  run(message) {
    message.channel.send(``);
  }
};