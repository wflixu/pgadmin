
/**
 * Decimal adjustment of a number.
 *
 * @param {String}  type  The type of adjustment.
 * @param {Number}  value The number.
 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
 * @returns {Number} The adjusted value.
 */
function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || exp % 1 !== 0) {
        return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

// Decimal round
if (!Math.round10) {
    Math.round10 = function (value, exp) {
        return decimalAdjust('round', value, exp);
    };
}
// Decimal floor
if (!Math.floor10) {
    Math.floor10 = function (value, exp) {
        return decimalAdjust('floor', value, exp);
    };
}
// Decimal ceil
if (!Math.ceil10) {
    Math.ceil10 = function (value, exp) {
        return decimalAdjust('ceil', value, exp);
    };
}

 const pgadmin = {

    natural_sort: function (a, b, options) {
        options = options || {};

        let re = /(^-?\d+(\.?\d*)[df]?e?\d?$|^0x[0-9a-f]+$|\d+)/gi,
            sre = /(^ *| *$)/g,
            dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            hre = /^0x[0-9a-f]+$/i,
            ore = /^0/,
            i = function (s) {
                return options.insensitive && ('' + s).toLowerCase() || '' + s;
            },
            // convert all to strings strip whitespace
            x = i(a).replace(sre, '') || '',
            y = i(b).replace(sre, '') || '',
            // chunk/tokenize
            xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
            // numeric, hex or date detection
            xD = parseInt(hre.exec(x)) || (xN.length !== 1 && dre.exec(x) && Date.parse(x)),
            yD = parseInt(hre.exec(y)) || xD && dre.exec(y) && Date.parse(y) || null,
            oFxNcL, oFyNcL,
            mult = options.desc ? -1 : 1;

        // first try and sort Hex codes or Dates
        if (yD)
            if (xD < yD) return -1 * mult;
            else if (xD > yD) return 1 * mult;

        // natural sorting through split numeric strings and default strings
        for (let cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
            // find floats not starting with '0', string or 0 if not defined (Clint Priest)
            oFxNcL = !ore.exec(xN[cLoc] || '') && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
            oFyNcL = !ore.exec(yN[cLoc] || '') && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
            // handle numeric vs string comparison - number < string - (Kyle Adams)
            if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
                return (isNaN(oFxNcL) ? 1 : -1) * mult;
            }
            // rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
            else if (typeof oFxNcL !== typeof oFyNcL) {
                oFxNcL += '';
                oFyNcL += '';
            }
            if (oFxNcL < oFyNcL) return -1 * mult;
            if (oFxNcL > oFyNcL) return 1 * mult;
        }
        return 0;
    },
    numeric_comparator: function (a, b) {
        a = parseInt(a);
        b = parseInt(b);
        if (a < b)
            return -1;
        else if (a == b)
            return 0;
        else
            return 1;
    }
}


export default pgadmin;