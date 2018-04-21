define(function() {
    return class XmlGen {
	static Element(name, attrs=null, text=null) {
	    return '<' + name + this._Attrs(attrs) + '>' + this._Text(text) + '</' + name + '>';
	}
	static BlankElement(name, attrs=null) { return '<' + name + this._Attrs(attrs) + ' />'; }
	static Comment(comment) {
	    return '<!-- ' + comment + ' -->';
	}
	// id="value" class="value" ...
	static _Attrs = function(attrs=null) {
	    if (attrs === undefined || attrs == null) { return ''; }
	    res = '';
	    for (var key in attrs) {
		res += key + '=' + this._Quote(attrs[key]) + ' ';
	    }
	    return ' ' + res.trim();
	}
	static _Text = function(text=null) { return (null == text) ? '' : text; }
	static _Quote = function(text=null) {
	    if (text === undefined || null == text) { return '""'; }
	    for (var i=0; i<text.length; i++) {
		if ('"' == text[i] && 0<i && '\\' != text[i-1]) {
		    text = text.slice(0, i) + '\\' + text.slice(i, text.length);
		}
	    }
	    return '"' + text + '"'
	}
    };
});
