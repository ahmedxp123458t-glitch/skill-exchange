# Skill Exchange

A MERN platform for users to share and learn skills from each other.

## Features

- User profiles with skills and bio
- Skill listings with levels (beginner/intermediate/advanced)
- Skill requests between users
- Real-time chat system
- Ratings and reviews
- Learning progress dashboard

## Architecture Flow

```
Client (React:3000) ↔ Server (Express:5000) ↔ MongoDB:27017/skill-exchange
```

## How to Run

### Server
```bash
cd server && npm install && node seed.js && node server.js
```

### Client
```bash
cd client && npm install && npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST/GET | /api/users | Create/List users |
| GET | /api/users/:id | Get user by ID |
| POST/GET | /api/skills | Create/List skills |
| POST/GET | /api/requests | Create/List requests |
| PUT | /api/requests/:id | Update request status |
| POST/GET | /api/messages | Send/List messages |
| POST/GET | /api/ratings | Create/List ratings |

## Usage Guide

- **Dashboard**: Overview of all platform stats
- **Profiles**: Browse users with skill-based search
- **Skills**: Post your skills or browse what others offer
- **Requests**: View incoming and outgoing skill exchange requests
- **Chat**: Send and receive messages
- **Ratings**: Rate users after skill exchanges

## Project Structure

```
skill-exchange/
├── server/
│   ├── config/db.js
│   ├── models/ (User, SkillListing, SkillRequest, Message, Rating)
│   ├── routes/ (users, skills, requests, messages, ratings)
│   ├── server.js
│   └── seed.js
├── client/
│   ├── public/index.html
│   ├── src/
│   │   ├── App.js / App.css / index.js
│   │   └── components/ (Navbar, ProfileList, SkillListing, Requests, Chat, Ratings, Dashboard)
│   └── package.json
├── .gitignore
└── README.md
```
