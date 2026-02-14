# Run MongoDB with Docker (Prisma requires replica set)

Prisma uses transactions with MongoDB, so the server must run as a **replica set** (even single-node).

**1. Start MongoDB with replica set:**

```bash
docker run --rm -d \
  --name blog-mongodb \
  -p 27017:27017 \
  mongo:7 --replSet rs0
```

**2. Initialize the replica set** (wait a few seconds after step 1, then run). Use `localhost:27017` so the app on your machine can reach the primary:

```bash
docker exec blog-mongodb mongosh --eval 'rs.initiate({ _id: "rs0", members: [{ _id: 0, host: "localhost:27017" }] })'
```

You should see `{ ok: 1 }`. Wait ~10 seconds, then run the app/seed.

**3. Use in `.env`:**

```
DATABASE_URL="mongodb://localhost:27017/blog"
```

---

**With a volume** (data persists):

```bash
docker run --rm -d \
  --name blog-mongodb \
  -p 27017:27017 \
  -v blog_mongodata:/data/db \
  mongo:7 --replSet rs0
```

Then run step 2 once to init the replica set.

Stop: `docker stop blog-mongodb`

---

**Alternative:** Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier). Atlas runs as a replica set, so no extra setup. Use the connection string as `DATABASE_URL` (e.g. `mongodb+srv://user:pass@cluster.mongodb.net/blog`).
