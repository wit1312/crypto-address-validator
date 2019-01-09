var bchaddr = require('bchaddrjs');

var detectAddressFormat = bchaddr.detectAddressFormat;


module.exports = {
    /**
     * ripple address validation
     */
    isValidAddress: function (address) {
        try{
            detectAddressFormat(address);
            return true;
        }catch (e) {
            return false;
        }
    }
};
