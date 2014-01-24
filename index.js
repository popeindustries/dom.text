var textProp = document.documentElement.textContent
	? 'textContent'
	: 'innerText';

exports.getText = function (element) {
	return element[textProp];
};

exports.setText = function (element, text) {
	element[textProp] = text;
};