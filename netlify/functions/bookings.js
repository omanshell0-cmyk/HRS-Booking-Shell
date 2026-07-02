const { readStore, writeStore, ensureData } = require('./_utils');
exports.handler = async function(event){
  await ensureData();
  if(event.httpMethod === 'GET'){
    const bookings = await readStore('bookings', []);
    return { statusCode: 200, body: JSON.stringify(bookings) };
  }
  if(event.httpMethod === 'POST'){
    try{
      const body = JSON.parse(event.body || '[]');
      await writeStore('bookings', body);
      return { statusCode: 200, body: JSON.stringify(body) };
    }catch(e){ return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }
  }
  return { statusCode: 405, body: 'Method not allowed' };
};
