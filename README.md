
# 💬 Chat App

A real-time chat application built with **Node.js, Express,** and **Socket.IO**.
It allows multiple users to connect, choose a unique username, and exchange messages instantly..

## ✨ Features
- 👥 User Management
    - Users must set a unique username before joining the chat. Prevents duplicate usernames.

- 💬 Real-Time Messaging
    - Messages are broadcast instantly to all connected users.
    - Displays sender username along with the message.

- 🔌 Socket.IO Integration
    - Handles real-time, bidirectional communication.

- 🖥️ Frontend
    - Simple HTML + CSS interface.
    - Error messages for invalid or duplicate usernames.

## 🛠️ Tech Stack & Dependencies

| Package       | Purpose                   |
| ------------- | ------------------------- |
| **express**   | Web server framework      |
| **socket.io** | Real-time communication   |
| **dotenv**    | Environment configuration |


## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# Server
PORT=8000

```

---

## ⚡ Getting Started
### 1️⃣ Clone the repository
```bash
git clone https://github.com/sayyedaaman2/SimpleChatApp.git
cd SimpleChatApp
```

### 2️⃣ Install dependencies
```bash
npm install

```
### 3️⃣ Start the server
```bash
npm start
```
The server will run on http://localhost:8000 (default).

## 🖼️ Project Structure
```pgsql
chatapp/
│
├── public/
│   ├── index.html      # Chat UI
│   ├── style.css       # Styles
│
├── config/
│   └── server.config.js # Server configuration
│
├── app.js              # Main app entry
├── package.json
└── README.md
```
## 📡 Socket.IO Events

Client → Server

- `setUserName` → Set username

- `msg` → Send a new message

Server → Client

- `userAllowed` → Username accepted

- `userExists` → Username already exists

- `newMessage` → Broadcast message



## 🚀 Future Improvements
- Add private messaging (DMs).
- Show list of active users.
- Persist messages with a database (MongoDB).
- Add typing indicators and read receipts.

## 👨‍💻 Author
***Aaman Sayyed***
[🔗 GitHub](https://github.com/sayyedaaman2)
 • [LinkedIn](https://www.linkedin.com/in/sayyed-aaman/)