<<<<<<< HEAD
# HRS Booking Portal

A single-page booking portal with shared storage support powered by a local Express backend.

## Project structure

- `index.html` — main web app UI, authentication, booking logic, and client-side sync logic.
- `server.js` — Express server that exposes `/api/owners`, `/api/bookings`, and `/api/config`.
- `package.json` — Node app metadata and `npm start` command.
- `_redirects` — redirect rules for static hosting if needed.
- `netlify/` — optional Netlify function support folder.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open the app in your browser:

```text
http://localhost:3000/#staff
```

4. To access from another device on the same network, use your machine IP:

```text
http://<your-machine-ip>:3000/#staff
```

> The shared server stores data in `data/` JSON files. Keep the server running for all clients to stay in sync.

## Deployment

### Render

1. Push the repository to GitHub.
2. Create a new Web Service in Render.
3. Connect it to this GitHub repo.
4. Set the build command to:

```bash
npm install
```

5. Set the start command to:

```bash
npm start
```

6. Deploy and open the generated URL.

### Notes

- This app currently uses file-based persistence via the `data/` folder.
- For production, a managed database is recommended.
- The server runs on `process.env.PORT || 3000`.

## GitHub push example

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/omanshell0-cmyk/HRS-Booking-Shell.git
git branch -M main
git push -u origin main
```
=======
# HRS Booking Portal

A single-page booking portal with shared storage support powered by a local Express backend.

## Project structure

- `index.html` — main web app UI, authentication, booking logic, and client-side sync logic.
- `server.js` — Express server that exposes `/api/owners`, `/api/bookings`, and `/api/config`.
- `package.json` — Node app metadata and `npm start` command.
- `_redirects` — redirect rules for static hosting if needed.
- `netlify/` — optional Netlify function support folder.

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open the app in your browser:

```text
http://localhost:3000/#staff
```

4. To access from another device on the same network, use your machine IP:

```text
http://<your-machine-ip>:3000/#staff
```

> The shared server stores data in `data/` JSON files. Keep the server running for all clients to stay in sync.

## Deployment

### Render

1. Push the repository to GitHub.
2. Create a new Web Service in Render.
3. Connect it to this GitHub repo.
4. Set the build command to:

```bash
npm install
```

5. Set the start command to:

```bash
npm start
```

6. Deploy and open the generated URL.

### Notes

- This app currently uses file-based persistence via the `data/` folder.
- For production, a managed database is recommended.
- The server runs on `process.env.PORT || 3000`.

## GitHub push example

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/omanshell0-cmyk/HRS-Booking-Shell.git
git branch -M main
git push -u origin main
```
>>>>>>> d655665 (Initial commit)
