var CharacterCreator = require('./character-creator.js');

window.CheckboxType = window.CheckboxType || (function($) {
	return function CheckboxType(selector) {

		var elements = $(selector),
			cachedText = elements.text();

		(function(){
			elements.each(function(index){
				var $this = $(this),
					text = $this.text();

				cleanElement($this);
				drawCheckboxes($this, text);
			});
			
		}());

		function cleanElement(elem) {
			elem.text('');
		}

		function drawCheckboxes(elem, text) {
			var characterCreator = CharacterCreator($,text.toUpperCase()),
				checkboxes = characterCreator.getCheckboxes();
			elem.append(checkboxes);
		}

		function getText() {
			return cachedText;
		}

		return {
			text: getText
		};
	};
}(window.checkboxJQuery || window.jQuery));