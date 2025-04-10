# 📚 readloom

A full-stack book tracking web app — powered by a Clojure backend and a Next.js frontend. Log your reads, track progress, write notes, and analyze your reading history.

---

## ✨ Features

- Add, edit, and delete books
- Track reading status, authors, start/finish dates
- GraphQL API built in Clojure using Lacinia
- Next.js frontend with Tailwind CSS
- PostgreSQL database with HoneySQL & next.jdbc
- (Planned) Auth with JWT or Google OAuth
- (Planned) Analytics & reading stats

---

## 🧱 Tech Stack

| Layer     | Tech                             |
|-----------|----------------------------------|
| Frontend  | Next.js (React) + Tailwind CSS   |
| Backend   | Clojure + Ring + Lacinia (GraphQL) |
| DB        | PostgreSQL + next.jdbc + HoneySQL |
| Build     | shadow-cljs (optional for ClojureScript in future) |
| Deploy    | Vercel (frontend), Fly.io/Render (backend) |

---

## 📂 Folder Structure

```
readloom/
├── frontend/      # Next.js frontend
├── backend/       # Clojure GraphQL API
└── schema.sql     # PostgreSQL schema
```

---

## 🛠 Getting Started

### 🚀 Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 🔧 Backend (Clojure + Lacinia)

```bash
cd backend
clojure -M -m readloom.core
```

GraphQL API will run on [http://localhost:3001/graphql](http://localhost:3001/graphql)

---

## 🗄 Database

We're using PostgreSQL. You can create the database using the schema in `schema.sql`.

Example setup:

```bash
createdb readloom
psql -d readloom -f schema.sql
```

Update your DB connection in `backend/src/readloom/db.clj`.

---

## ✅ To Do

- [ ] Set up GraphQL schema and resolvers
- [ ] Build book CRUD UI
- [ ] Add reading analytics
- [ ] Add auth system
- [ ] Add export/import

---

## 📜 License

[MIT](https://github.com/master-of-none/readloom/blob/main/LICENSE)
