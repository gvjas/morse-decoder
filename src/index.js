const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const MORSE_NUMBER_TABLE = {'**********': ' '};
    for (let key in MORSE_TABLE) {
        MORSE_NUMBER_TABLE[(key.split('')
                                .map(x => x === '.' ? 10 : 11)
                                .join('') / 1e10)
                                .toFixed(10)
                                .replace('0.', '')]
                            = MORSE_TABLE[key];
    }
    let res = '';
    for (i = 10; i <= expr.length; i += 10) {
        res += MORSE_NUMBER_TABLE[expr.substring(i - 10, i)]
    }
    return res;
}

module.exports = {
    decode
}