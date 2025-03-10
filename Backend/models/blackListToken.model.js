const mongoose = require('mongoose');



const blackListTokenSchema = new mongoose.Schema({
  token: { type: String,
     required: true 
    },
  createdAt: { type: Date, 
    default: Date.now, 
    expires: 86400 } // 86400 seconds = 24 hours
});

module.exports = mongoose.model('BlackListToken', blackListTokenSchema);