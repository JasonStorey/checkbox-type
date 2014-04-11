var CheckboxLetters = function(text) {
	var checkboxes = [],
		cols = 5,
		rows = 7,
		width = 60,
		height = 70,
		resolution = cols * rows;

	for(var i = 0; i < text.length; i++) {
		var letter = text.charAt(i),
			letterDiv = $('<div>').css({
				'width': width + 'px',
				'height': height + 'px',
				'padding': 0,
				'margin': '1px',
				'float': 'left'
			});

		for(var j = 0; j < resolution; j++) {
			var checkbox = $('<input type="checkbox">').css({
				'width': (width / cols) + 'px',
				'height': (height / rows) + 'px',
				'padding': 0,
				'margin': 0,
				'float': 'left'
			});

			letterDiv.append(checkbox);
		}
		
		checkboxes.push(letterDiv);
	}

	return checkboxes;
};

var ALPHABET = {
	'A': 1234
};

module.exports = CheckboxLetters;