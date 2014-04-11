var Letters = require('./checkbox-letters.js');

window.CheckboxType = window.CheckboxType || (function($) {
	return function CheckboxType(selector) {

		var elements = $(selector);

		(function(){
			elements.each(function(index){
				var $this = $(this);
				var text = $this.text();
				cleanElement($this);
				drawCheckboxes($this, text);
			});
			
		}());

		function cleanElement(elem) {
			elem.text('');
		}

		function drawCheckboxes(elem, text) {
			var checkboxes = Letters(text.toUpperCase());
			elem.append(checkboxes);
		}

		function getText() {
			return elements.text();
		}

		return {
			text: getText
		};
	};
}(window.jQuery));
