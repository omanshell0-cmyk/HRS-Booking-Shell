const { readStore, writeStore, ensureData } = require('./_utils');
const defaultConfig = {
  weeklyLimits: { private: 1, company: 1 },
  totalDailyLimit: 30,
  slotPeriods: { morningLimit: 12, afternoonLimit: 18 },
  bookingSettings: { openingTime: '08:00', closingTime: '20:00', advanceDays: 6, cutoffTime: '18:00' },
  maintenance: { active: false, message: 'Station is currently under maintenance. Booking is temporarily unavailable.' },
};
exports.handler = async function(event){
  await ensureData();
  if(event.httpMethod === 'GET'){
    const cfg = await readStore('config', defaultConfig);
    return { statusCode: 200, body: JSON.stringify(cfg) };
  }
  if(event.httpMethod === 'POST'){
    try{
      const body = JSON.parse(event.body || '{}');
      await writeStore('config', body);
      return { statusCode: 200, body: JSON.stringify(body) };
    }catch(e){ return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }
  }
  return { statusCode: 405, body: 'Method not allowed' };
};
