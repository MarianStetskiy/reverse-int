module.exports = function reverse(n) {
	let m = Math.abs(n);
	let str1 = m.toString();
	let str2 = str1.split('');
	let str3 = str2.reverse();
	let str4 = str3.join('');
	return str4;
}