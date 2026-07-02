const fs = require('fs').promises;
const path = require('path');
const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const STORE = {
  owners: path.join(DATA_DIR, 'owners.json'),
  bookings: path.join(DATA_DIR, 'bookings.json'),
  config: path.join(DATA_DIR, 'config.json'),
};

async function ensureData(){
  await fs.mkdir(DATA_DIR, { recursive: true });
  await Promise.all(Object.values(STORE).map(async (file)=>{
    try{ await fs.access(file); }catch(e){ await fs.writeFile(file, JSON.stringify([])); }
  }));
}
async function readStore(name, fallback){
  try{ const content = await fs.readFile(STORE[name], 'utf8'); return JSON.parse(content||'null') || fallback; }catch(e){ return fallback; }
}
async function writeStore(name, data){
  await ensureData();
  await fs.writeFile(STORE[name], JSON.stringify(data, null, 2), 'utf8');
}
module.exports = { ensureData, readStore, writeStore };
