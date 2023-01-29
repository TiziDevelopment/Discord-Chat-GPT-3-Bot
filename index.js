const Discord = require('discord.js');
const client = new Discord.Client({
	intents: Discord.Intents.ALL
});

const openai = require('openai');

openai.apiKey = "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";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		msg.reply('Pong!');
	} else if (msg.content.startsWith("!gpt-3")) {
		let question = msg.content.slice(6);
		openai
			.completions({
				engine: "text-davinci-002",
				prompt: question,
				max_tokens: 2048,
			})
			.then((output) => {
				const answer = output.choices[0].text;
				msg.reply(answer);
			})
			.catch((error) => {
				console.log(error);
			});
	}
});

client.login('MTA1MTE5NjM1NTg4NTkzNjgxMQ.GWDp6E.vGzZvhQUJrr7fnTYLuurrOxBORN9o-MKM7X9EM');
