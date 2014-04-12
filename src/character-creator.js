var GLYPHS = require('./glyphs.js');

var CharacterCreator = function($, text) {
	var checkboxes = [],
		cols = 5,
		rows = 7,
		width = 80,
		height = 100,
		resolution = cols * rows;

	(function(){
		var i,
			j,
			character,
			characterDiv,
			checkbox;

		for(i = 0; i < text.length; i++) {
			character = text.charAt(i),
			characterDiv = $('<div>').css({
				'width': width + 'px',
				'height': height + 'px',
				'padding': 0,
				'margin': '2px',
				'float': 'left'
			});

			for(j = 0; j < resolution; j++) {
				checkbox = $('<input type="checkbox">').css({
					'width': (width / cols) + 'px',
					'height': (height / rows) + 'px',
					'padding': 0,
					'margin': 0,
					'float': 'left'
				});

				if(GLYPHS[character] && GLYPHS[character].indexOf(j) !== -1) {
					checkbox.attr('checked', true);
				}	
				characterDiv.append(checkbox);
			}

			characterDiv.data('character', character);
			characterDiv.click(onCharClicked);
			checkboxes.push(characterDiv);
		}

		checkboxes.push($('<div>').css('clear', 'both'));
	}());

	function onCharClicked(e) {
		var target = $(e.currentTarget),
			characterPixels = [];
		
		console.log(target.data('character'));

		$(target).find('input').each(function(index){
			if(this.checked === true){
				characterPixels.push(index);	
			}
		});

		console.log(characterPixels);
	}

	function getCheckboxes() {
		return checkboxes;
	}

	return {
		getCheckboxes: getCheckboxes
	};
};

module.exports = CharacterCreator;