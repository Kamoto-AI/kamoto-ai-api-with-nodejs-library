const KamotoClient = require('kamotoai');

const apiKey = '576799f8-05eb-47ac-a9e9-ea0f987d6c2d';
const personalityId = '7342e580-b59d-44a9-93c8-e60a5e013eab';

const KamotoAI = new KamotoClient(apiKey, personalityId);

const messages = [
  {
    role: 'user',
    content: 'Hi',
  },
  {
    role: 'character',
    content: 'Hello!',
  },
  {
    role: 'user',
    content: 'what is my name?',
  },
];

KamotoAI.chat("My name is Toshendra").then(response => console.log(response.choices[0].message.content));

KamotoAI.chatWithHistory(messages).then(response => console.log(response.choices[0].message.content));
