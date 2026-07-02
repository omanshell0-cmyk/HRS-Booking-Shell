<<<<<<< HEAD
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const STORE = {
  owners: path.join(DATA_DIR, 'owners.json'),
  bookings: path.join(DATA_DIR, 'bookings.json'),
  config: path.join(DATA_DIR, 'config.json'),
};

const defaultConfig = {
  weeklyLimits: { private: 1, company: 1 },
  totalDailyLimit: 30,
  slotPeriods: { morningLimit: 12, afternoonLimit: 18 },
  bookingSettings: { openingTime: '08:00', closingTime: '20:00', advanceDays: 6, cutoffTime: '18:00' },
  maintenance: { active: false, message: 'Station is currently under maintenance. Booking is temporarily unavailable.' },
  operators: [{ id: 'operator', password: 'op123', name: 'Default Operator' }],
  Saturday: { blocked: '', private: { ranges: [{ start: '08:00', end: '12:00' }], perHour: 3 }, company: { ranges: [{ start: '16:00', end: '20:00' }], perHour: 2 } },
  Sunday: { blocked: '', private: { ranges: [{ start: '08:00', end: '12:00' }], perHour: 3 }, company: { ranges: [{ start: '16:00', end: '20:00' }], perHour: 2 } },
  Monday: { blocked: '', private: { ranges: [{ start: '09:00', end: '13:00' }], perHour: 2 }, company: { ranges: [{ start: '14:00', end: '18:00' }], perHour: 2 } },
  Tuesday: { blocked: '', private: { ranges: [{ start: '09:00', end: '13:00' }], perHour: 2 }, company: { ranges: [{ start: '14:00', end: '18:00' }], perHour: 2 } },
  Wednesday: { blocked: '', private: { ranges: [{ start: '09:00', end: '13:00' }], perHour: 2 }, company: { ranges: [{ start: '14:00', end: '18:00' }], perHour: 2 } },
  Thursday: { blocked: '', private: { ranges: [{ start: '10:00', end: '14:00' }], perHour: 2 }, company: { ranges: [{ start: '15:00', end: '18:00' }], perHour: 1 } },
};

async function ensureData() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await Promise.all(Object.entries(STORE).map(async ([key, filePath]) => {
    try {
      await fs.access(filePath);
    } catch (err) {
      const initial = key === 'config' ? defaultConfig : [];
      await fs.writeFile(filePath, JSON.stringify(initial, null, 2), 'utf8');
    }
  }));
}

async function loadJson(filePath, fallback) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content || 'null') || fallback;
  } catch (err) {
    return fallback;
  }
}

async function saveJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/owners', async (req, res) => res.json(await loadJson(STORE.owners, [])));
app.post('/api/owners', async (req, res) => {
  const data = Array.isArray(req.body) ? req.body : [];
  await saveJson(STORE.owners, data);
  res.json(data);
});
app.get('/api/bookings', async (req, res) => res.json(await loadJson(STORE.bookings, [])));
app.post('/api/bookings', async (req, res) => {
  const data = Array.isArray(req.body) ? req.body : [];
  await saveJson(STORE.bookings, data);
  res.json(data);
});
app.get('/api/config', async (req, res) => res.json(await loadJson(STORE.config, defaultConfig)));
app.post('/api/config', async (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : defaultConfig;
  await saveJson(STORE.config, body);
  res.json(body);
});

app.listen(PORT, async () => {
  await ensureData();
  console.log(`HRS Booking Portal server running at http://localhost:${PORT}`);
  console.log('Open this from mobile on the same network using your machine IP address.');
});
=======
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const STORE = {
  owners: path.join(DATA_DIR, 'owners.json'),
  bookings: path.join(DATA_DIR, 'bookings.json'),
  config: path.join(DATA_DIR, 'config.json'),
};

const defaultConfig = {
  weeklyLimits: { private: 1, company: 1 },
  totalDailyLimit: 30,
  slotPeriods: { morningLimit: 12, afternoonLimit: 18 },
  bookingSettings: { openingTime: '08:00', closingTime: '20:00', advanceDays: 6, cutoffTime: '18:00' },
  maintenance: { active: false, message: 'Station is currently under maintenance. Booking is temporarily unavailable.' },
  operators: [{ id: 'operator', password: 'op123', name: 'Default Operator' }],
  Saturday: { blocked: '', private: { ranges: [{ start: '08:00', end: '12:00' }], perHour: 3 }, company: { ranges: [{ start: '16:00', end: '20:00' }], perHour: 2 } },
  Sunday: { blocked: '', private: { ranges: [{ start: '08:00', end: '12:00' }], perHour: 3 }, company: { ranges: [{ start: '16:00', end: '20:00' }], perHour: 2 } },
  Monday: { blocked: '', private: { ranges: [{ start: '09:00', end: '13:00' }], perHour: 2 }, company: { ranges: [{ start: '14:00', end: '18:00' }], perHour: 2 } },
  Tuesday: { blocked: '', private: { ranges: [{ start: '09:00', end: '13:00' }], perHour: 2 }, company: { ranges: [{ start: '14:00', end: '18:00' }], perHour: 2 } },
  Wednesday: { blocked: '', private: { ranges: [{ start: '09:00', end: '13:00' }], perHour: 2 }, company: { ranges: [{ start: '14:00', end: '18:00' }], perHour: 2 } },
  Thursday: { blocked: '', private: { ranges: [{ start: '10:00', end: '14:00' }], perHour: 2 }, company: { ranges: [{ start: '15:00', end: '18:00' }], perHour: 1 } },
};

async function ensureData() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await Promise.all(Object.entries(STORE).map(async ([key, filePath]) => {
    try {
      await fs.access(filePath);
    } catch (err) {
      const initial = key === 'config' ? defaultConfig : [];
      await fs.writeFile(filePath, JSON.stringify(initial, null, 2), 'utf8');
    }
  }));
}

async function loadJson(filePath, fallback) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return JSON.parse(content || 'null') || fallback;
  } catch (err) {
    return fallback;
  }
}

async function saveJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
}

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/owners', async (req, res) => res.json(await loadJson(STORE.owners, [])));
app.post('/api/owners', async (req, res) => {
  const data = Array.isArray(req.body) ? req.body : [];
  await saveJson(STORE.owners, data);
  res.json(data);
});
app.get('/api/bookings', async (req, res) => res.json(await loadJson(STORE.bookings, [])));
app.post('/api/bookings', async (req, res) => {
  const data = Array.isArray(req.body) ? req.body : [];
  await saveJson(STORE.bookings, data);
  res.json(data);
});
app.get('/api/config', async (req, res) => res.json(await loadJson(STORE.config, defaultConfig)));
app.post('/api/config', async (req, res) => {
  const body = req.body && typeof req.body === 'object' ? req.body : defaultConfig;
  await saveJson(STORE.config, body);
  res.json(body);
});

app.listen(PORT, async () => {
  await ensureData();
  console.log(`HRS Booking Portal server running at http://localhost:${PORT}`);
  console.log('Open this from mobile on the same network using your machine IP address.');
});
>>>>>>> d655665 (Initial commit)
