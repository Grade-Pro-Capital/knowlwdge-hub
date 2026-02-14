# Admin API (curl)

## Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

To save the session cookie for later requests (e.g. add-admin):

```bash
curl -c cookies.txt -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

Then use `-b cookies.txt` on subsequent admin API calls.

---

## Add admin

### Option A: API key (easiest)

Set in `.env`:

```
ADMIN_API_KEY=your-secret-key-here
```

**Test that the key works:**

```bash
curl -s http://localhost:3000/api/admin/check -H "X-Admin-API-Key: your-secret-key-here"
# Should return: {"ok":true,"user":"api"}
```

**Add admin (use one of these):**

```bash
# Using header X-Admin-API-Key (no "Bearer" needed)
curl -X POST http://localhost:3000/api/admin/admins \
  -H "Content-Type: application/json" \
  -H "X-Admin-API-Key: your-secret-key-here" \
  -d '{"username":"newadmin","password":"newadmin123"}'
```

```bash
# Or using Authorization: Bearer <key>
curl -X POST http://localhost:3000/api/admin/admins \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-secret-key-here" \
  -d '{"username":"newadmin","password":"newadmin123"}'
```

**Important:** Put `ADMIN_API_KEY=your-secret-key-here` in `.env` with **no quotes**, then **restart the dev server** (`npm run dev`).

## Option B: Session cookie

**1. Login and save session cookie**

```bash
curl -c cookies.txt -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

**2. Create a new admin (uses saved cookie)**

```bash
curl -b cookies.txt -X POST http://localhost:3000/api/admin/admins \
  -H "Content-Type: application/json" \
  -d '{"username":"newadmin","password":"newadmin123"}'
```

If you get `Unauthorized`, ensure step 1 returned `{"success":true,...}` and use the same host (e.g. both `localhost:3000`, not mix with `127.0.0.1`).

---

New admin must have username ≥ 2 chars and password ≥ 8 chars. Replace `http://localhost:3000` with your app URL if different.
