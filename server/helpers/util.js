
var md5 = require('md5');

module.exports = {
  getPassWithSalt:function(text,salt){
    return this.getMd5(text+salt)
  },
  getMd5:function(text, salt){
      return md5(text+salt);
  },
  getRandom:function(number){
    return Math.floor(Math.random() * number);
  }
}
