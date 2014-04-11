var GLYPHS = require('./glyphs.js');

var CheckboxLetters = function(text) {
	var checkboxes = [],
		cols = 5,
		rows = 7,
		width = 80,
		height = 100,
		resolution = cols * rows;

	for(var i = 0; i < text.length; i++) {
		var letter = text.charAt(i),
			letterDiv = $('<div>').css({
				'width': width + 'px',
				'height': height + 'px',
				'padding': 0,
				'margin': '2px',
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

			if(GLYPHS[letter].indexOf(j) !== -1) {
				checkbox.attr('checked', true);
			}			
			letterDiv.append(checkbox);
		}

		letterDiv.data('letter', letter);

		letterDiv.click(function(e){
			var target = $(e.currentTarget);
			var letterPixels = [];
			
			console.log(target.data('letter'));

			$(target).find('input').each(function(index){
				if(this.checked === true){
					letterPixels.push(index);	
				}
			});

			console.log(letterPixels);
		});
		
		checkboxes.push(letterDiv);
	}

	checkboxes.push($('<div>').css('clear', 'both'));

	return checkboxes;
};

module.exports = CheckboxLetters;