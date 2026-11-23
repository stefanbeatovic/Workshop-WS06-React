# Backend Starter

Starter package for WS06 backend tasks.

Your goal is to complete the missing backend logic so the frontend can perform full CRUD operations.

## Before You Start

1. Install dependencies.
2. Create a local .env file from .env.example.
3. Start the server.

```bash
npm install
cp .env.example .env
npm run dev
```

Default API base URL:
- http://localhost:3000/api/posts

## Files You Need To Complete

- server.js — MongoDB connection setup
- models/Post.js
- routes/posts.js

## What To Implement

### 1) connectToDatabase function in server.js

The `connectToDatabase` function checks if `process.env.MONGODB_URI` exists,
connects with `{ dbName: 'blog' }`, and logs the success or failure message.

### 2) Post model in models/Post.js

Define schema fields:
- title: String, required, trim, minlength
- content: String, required, trim, minlength
- author: String, required, trim

Enable timestamps so createdAt and updatedAt are stored automatically.

### 3) Missing routes in routes/posts.js

Already implemented:
- POST /api/posts
- GET /api/posts
- GET /api/posts/:id

You need to implement:
- PUT /api/posts/:id
- DELETE /api/posts/:id

Requirements for PUT:
- validate ObjectId
- update by id with runValidators true
- return updated document
- return 404 when post is missing
- return 400 for validation issues

Requirements for DELETE:
- validate ObjectId
- delete by id
- return 404 when post is missing
- return success JSON message when deleted

## Suggested Milestone Order

1. Get server running with database connection.
2. Complete Post model.
3. Finish PUT route.
4. Finish DELETE route.
5. Test all endpoints.

## Quick Test Sequence

1. POST /api/posts
2. GET /api/posts
3. GET /api/posts/:id
4. PUT /api/posts/:id
5. DELETE /api/posts/:id

## Done Checklist

- [x] Server starts without syntax errors
- [x] MongoDB connection works
- [x] Post model validation rules are implemented
- [x] PUT route is implemented
- [x] DELETE route is implemented
- [x] API responses use JSON

## What still needs action

Create `Starter/backend/.env` and set `MONGODB_URI` to your MongoDB connection string.
Do not share or commit the `.env` file.

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blog
PORT=3000
```
