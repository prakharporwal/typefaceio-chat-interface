# Chat Interface

## Screenshot

[Desktop](./public/desktop-view.png)

[Mobile](./public/mobile-view.png)

## Assignment

- Come help us revolutionize the way people create
Frontend Project Description
- **Fair Assessment & Integrity Policy: You are required to complete this assignment
independently as part of the interview process. 
- To uphold fairness and integrity, the use
of AI tools or external assistance is not permitted.
- Design a chat interface, like MS teams/Slack/WhatsApp. The interface should display
a list of user messages, the interface has a text field to type in messages and on hitting
send the message should be added to the list of displayed messages. You could think
of it as texting yourself in teams. Just the frontend implementation would suffice, there
is not backend component.

### Features:
- Create one or more chats
- Send, receive, and display messages for a chat
- Delete a chat
Note: You can assume there are API stubs for above features and return sample
data
### Requirements:
- Basic chat UI interface
- Properly designed message component – A user message would usually have a user
identifier, time stamp and message content
- Working flow – Typing a message, sending it, and displaying it in the view
Technologies:
- You can use any front-end framework and state management library at your choice to
implement this application, React.js is preferrable.
#### Additional Notes:
- Focusing on UX and bringing it as close to a proper chat experience would be ideal.
- Implementation should factor extensibility, what if we support groups/channels in our chat?!
- Provide clear instructions on how to run the application
- Need not write a backend component, so state would be cleared off if page is reloaded, which is
expected.

# How to run
- Install the node modules using
``` npm i ```

- run the app using
```npm start```

- Go to http://localhost:3000 to check the experience

# Test Cases
- Write a message. Click on the Send button
- Write a message. click enter on keyboard
- Long message are text wrapped
- message list length beyond list leads to scollable area
