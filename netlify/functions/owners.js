const { readStore, writeStore, ensureData } = require('./_utils');
exports.handler = async function(event){
  await ensureData();
  if(event.httpMethod === 'GET'){
    const owners = await readStore('owners', []);
    return { statusCode: 200, body: JSON.stringify(owners) };
  }
  if(event.httpMethod === 'POST'){
    try{
      const body = JSON.parse(event.body || '[]');
      await writeStore('owners', body);
      return { statusCode: 200, body: JSON.stringify(body) };
    }catch(e){ return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }
  }
  return { statusCode: 405, body: 'Method not allowed' };
};
