const fs = require('fs-extra')
const path = require('path');
const distpath = path.join(__dirname, '../dist/');

RemoveComponents();
function RemoveComponents(){ if (fs.existsSync(distpath+"component")) try{ fs.removeSync(distpath+"component"); console.log('Component trash removed.') }catch(e){} }