const { RTMClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - usually xoxb)
const token = '179359101623.571762522980';

// The client is initialized and then started to get an active connection to the platform
const rtm = new RTMClient(token);
rtm.start();

// // Calling `rtm.on(eventName, eventHandler)` allows you to handle events
// // When the connection is active, the 'ready' event will be triggered
// rtm.on('ready', async () => {

//   // Once the connection is open, your app will start receiving other events. It can also send messages.

//   // Sending a message requires a channel ID, a DM ID, an MPDM ID, or a group ID
//   // The following value is used as an example
//   const conversationId = 'C1232456';

//   // The RTM client can send simple string messages
//   const res = await rtm.sendMessage('Hello there', conversationId);

//   // `res` contains information about the sent message
//   console.log('Message sent: ', res.ts);
// });