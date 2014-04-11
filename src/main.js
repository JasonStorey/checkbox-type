var Letters = require('./checkbox-letters.js');

window.CheckboxType = window.CheckboxType || (function($) {
	return function CheckboxType(selector) {

		var element = $(selector),
			text = element.text();

		(function(){
			cleanElement(element);
			drawCheckboxes(element);
		}());

		function cleanElement(elem) {
			elem.text('');
		}

		function drawCheckboxes(elem) {
			var checkboxes = Letters(text.toUpperCase());
			elem.append(checkboxes);
		}

		function getText() {
			return text;
		}

		return {
			text: getText
		};
	};
}(window.jQuery));
