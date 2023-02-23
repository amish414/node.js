const fs = require('fs');

try {
  const data = fs.readFileSync(__dirname +'wast.htm', { encoding: 'utf-8' });
  console.log(data);
} catch (error) {
  console.error(error);
}
