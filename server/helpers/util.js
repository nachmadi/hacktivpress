
var md5 = require('md5');

module.exports = {
    getMd5:function(text, salt){
      return md5(text+salt);
    }
}
