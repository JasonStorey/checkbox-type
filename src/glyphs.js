var GLYPHS = function() {
	return {
		'A': [2, 6, 7, 8, 10, 11, 13, 14, 15, 19, 20, 21, 22, 23, 24, 25, 29, 30, 34],
		'B': [0, 1, 2, 3, 5, 6, 9, 10, 11, 14, 15, 16, 17, 18, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34],
		'C': [1, 2, 3, 5, 6, 9, 10, 11, 15, 16, 20, 21, 25, 26, 29, 31, 32, 33],
		'D': [0, 1, 2, 3, 5, 6, 9, 10, 11, 14, 15, 16, 19, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33],
		'E': [0, 1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 17, 18, 20, 21, 25, 26, 30, 31, 32, 33, 34],
		'F': [0, 1, 2, 3, 4, 5, 6, 9, 10, 11, 15, 16, 17, 18, 20, 21, 25, 26, 30, 31],
		'G': [1, 2, 3, 5, 6, 9, 10, 11, 15, 16, 18, 19, 20, 21, 24, 25, 26, 29, 31, 32, 33],
		'H': [0, 1, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 24, 25, 26, 29, 30, 31, 34],
		'I': [1, 2, 3, 7, 12, 17, 22, 27, 31, 32, 33],
		'J': [0, 1, 2, 3, 4, 5, 8, 13, 18, 23, 25, 28, 30, 31, 32, 33],
		'K': [0, 4, 5, 8, 9, 10, 11, 12, 13, 15, 16, 17, 20, 22, 23, 25, 28, 29, 30, 34],
		'L': [0, 1, 5, 6, 10, 11, 15, 16, 20, 21, 25, 26, 29, 30, 31, 32, 33, 34],
		'M': [0, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 20, 24, 25, 29, 30, 34],
		'N': [0, 4, 5, 6, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 23, 24, 25, 29, 30, 34],
		'O': [1, 2, 3, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 28, 29, 31, 32, 33],
		'P': [0, 1, 2, 3, 5, 6, 9, 10, 11, 14, 15, 16, 17, 18, 20, 21, 25, 26, 30, 31],
		'Q': [1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 22, 24, 25, 28, 31, 32, 34],
		'R': [0, 1, 2, 3, 5, 6, 9, 10, 11, 14, 15, 16, 17, 18, 20, 21, 23, 25, 26, 29, 30, 31, 34],
		'S': [1, 2, 3, 4, 5, 6, 9, 10, 11, 16, 17, 18, 23, 24, 25, 28, 29, 30, 31, 32, 33],
		'T': [0, 1, 2, 3, 4, 5, 7, 9, 12, 17, 22, 27, 31, 32, 33],
		'U': [0, 1, 4, 5, 6, 9, 10, 11, 14, 15, 16, 19, 20, 21, 24, 25, 26, 29, 30, 31, 32, 33, 34],
		'V': [0, 4, 5, 9, 10, 14, 15, 16, 18, 19, 21, 23, 26, 27, 28, 32],
		'W': [0, 4, 5, 9, 10, 14, 15, 17, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 34],
		'X': [0, 4, 5, 9, 11, 12, 13, 17, 21, 22, 23, 25, 29, 30, 34],
		'Y': [0, 4, 5, 9, 10, 11, 13, 14, 16, 17, 18, 22, 27, 32],
		'Z': [0, 1, 2, 3, 4, 5, 8, 9, 13, 17, 21, 25, 26, 29, 30, 31, 32, 33, 34],
		'1': [1, 2, 5, 6, 7, 11, 12, 16, 17, 21, 22, 26, 27, 30, 31, 32, 33],
		'2': [1, 2, 3, 5, 8, 9, 10, 13, 14, 17, 18, 21, 22, 25, 26, 29, 30, 31, 32, 33, 34],
		'3': [1, 2, 3, 5, 8, 9, 13, 14, 17, 18, 20, 23, 24, 25, 28, 29, 31, 32, 33],
		'4': [2, 3, 6, 7, 8, 10, 11, 13, 15, 18, 20, 21, 22, 23, 24, 28, 33],
		'5': [0, 1, 2, 3, 4, 5, 6, 10, 11, 15, 16, 17, 18, 19, 24, 25, 26, 29, 31, 32, 33],
		'6': [1, 2, 3, 5, 6, 9, 10, 11, 15, 16, 17, 18, 20, 21, 24, 25, 26, 29, 31, 32, 33],
		'7': [0, 1, 2, 3, 4, 5, 9, 13, 14, 18, 22, 23, 27, 31, 32],
		'8': [1, 2, 3, 5, 6, 9, 10, 11, 14, 16, 17, 18, 20, 21, 24, 25, 26, 29, 31, 32, 33],
		'9': [1, 2, 3, 5, 6, 9, 10, 11, 14, 16, 17, 18, 19, 24, 29, 34],
		'0': [1, 2, 3, 5, 9, 10, 11, 14, 15, 17, 19, 20, 23, 24, 25, 29, 31, 32, 33],
		' ': [],
		'.': [26, 27, 31, 32],
		',': [22, 27, 31, 32],
		'?': [1, 2, 3, 5, 9, 10, 14, 17, 18, 22, 32],
		'!': [2, 7, 12, 17, 22, 32],
		'@': [1, 2, 3, 5, 9, 10, 12, 13, 14, 15, 17, 19, 20, 22, 23, 24, 25, 31, 32, 33, 34],
		'£': [2, 3, 6, 9, 11, 15, 16, 17, 18, 21, 26, 30, 31, 32, 33, 34],
		'$': [2, 6, 7, 8, 9, 10, 12, 16, 17, 18, 22, 24, 25, 26, 27, 28, 32],
		'%': [0, 1, 4, 5, 6, 8, 9, 13, 17, 21, 25, 26, 28, 29, 30, 33, 34],
		'^': [2, 6, 8, 10, 14],
		'&': [2, 6, 8, 11, 13, 16, 17, 20, 23, 24, 25, 28, 30, 31, 32, 34],
		'*': [5, 7, 9, 11, 12, 13, 15, 16, 17, 18, 19, 21, 22, 23, 25, 27, 29],
		'(': [3, 7, 12, 16, 17, 22, 27, 33],
		')': [1, 7, 12, 17, 18, 22, 27, 31],
		'_': [30, 31, 32, 33, 34],
		'-': [15, 16, 17, 18, 19],
		'+': [7, 12, 15, 16, 17, 18, 19, 22, 27],
		'[': [2, 3, 7, 12, 17, 22, 27, 32, 33],
		']': [1, 2, 7, 12, 17, 22, 27, 31, 32],
		'{': [3, 7, 12, 18, 22, 27, 33],
		'}': [1, 7, 12, 16, 22, 27, 31],
		';': [6, 7, 11, 12, 22, 27, 31, 32],
		':': [6, 7, 11, 12, 26, 27, 31, 32],
		'\'': [2, 7, 12],
		'"': [1, 3, 6, 8, 11, 13],
		'\\': [0, 6, 11, 17, 23, 28, 34],
		'|': [2, 7, 12, 17, 22, 27, 32],
		'<': [8, 12, 16, 22, 28],
		'>': [6, 12, 18, 22, 26],
		'/': [4, 8, 13, 17, 21, 26, 30],
		'=': [10, 11, 12, 13, 14, 20, 21, 22, 23, 24],
		'`': [1, 7, 13],
		'~': [11, 14, 15, 17, 19, 20, 23]
	};
};

module.exports = GLYPHS();