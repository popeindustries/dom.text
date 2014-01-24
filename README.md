Cross-browser get/set element text.

## Usage
```javascript
var text = require('dom.text')
	, el = document.getElementById('foo');
text.getText(el);
text.setText(el, 'foo');
```