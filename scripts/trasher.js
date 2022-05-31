const fs = require('fs-extra')
const distvariable = require('../const/const');

RemoveComponents();
function RemoveComponents(){ if (fs.existsSync(distvariable.distpath+"/component")) try{ fs.removeSync(distvariable.distpath+"/component"); console.log('Component trash removed.') }catch(e){} }