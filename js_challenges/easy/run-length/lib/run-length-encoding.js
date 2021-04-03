/////////////////////////
// Run Length Encoding //
/////////////////////////

// Implement run-length encoding and decoding.

// Run-length encoding (RLE) is a simple form of data compression,
// where runs (consecutive data elements) are replaced by just one
// data value and count.

// For example we can represent the original 53 characters with
// only 13.

// "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"  ->
// "12WB12W3B24WB"
// RLE allows the original data to be perfectly reconstructed
// from the compressed data, which makes it a lossless data
// compression.

// "AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"

const functions = {
  encode(string) {
    if (!string) return '';

    let packets = [];
    let counter = 1;
    
    for (let idx = 0; idx < (string.length - 1); idx++) {
      if (string[idx] !== string[idx + 1]) {
        packets.push(string[idx].repeat(counter))
        counter = 1;
      } else counter += 1;
    }
    packets.push(string[string.length - 1].repeat(counter));

    return packets.map(packet => {
      return (packet.length === 1) ? packet : `${packet.length}${packet[0]}`;
    }).join('');
  },
  decode(string) {
    if (!string) return '';

    let res = [];

    for (let idx = 0; idx < string.length; idx++) {
      if (Number.isInteger(+string[idx])) {
        res.push(string[idx + 1].repeat(+string[idx]));
        idx++;
      } else res.push(string[idx]);
    }

    return res.join('');
  }
}

// console.log(functions.encode('AABCCCDEEE'));

module.exports = functions;