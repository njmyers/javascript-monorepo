const padDigits = (pad) => (num) => (num < 10 ? `${pad}num` : num.toString());
export default padDigits;
