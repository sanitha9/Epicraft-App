import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    
    // Add more messages here as needed
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      const newMsg = {
        id: messages.length + 1,
        content: newMessage,
        reply: null,
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  const handleReply = (messageId, replyMessage) => {
    const updatedMessages = messages.map((msg) =>
      msg.id === messageId ? { ...msg, reply: replyMessage } : msg
    );
    setMessages(updatedMessages);
  };

  return (
    <div>
      {messages.map((msg) => (
        <div key={msg.id}>
          <p>{msg.content}</p>
          {msg.reply && <p>Reply: {msg.reply}</p>}
          {!msg.reply && (
            <div>
              <input
                type="text"
                placeholder="Your Reply"
                value={newMessage}
                onChange={handleInputChange}
              />
              <button onClick={() => handleReply(msg.id, newMessage)}>Reply</button>
            </div>
          )}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={newMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
