define(function(require, exports, module) {
    const XmlGen = require('js/util/XmlGen');
    return class BodyStyleSelectBox {
	static get Id() { return 'BodyStyleSelectBox'; }
	static get LinkId() { return 'BodyStyle'; }
	static get Element() { return document.getElementById(BodyStyleSelectBox.Id); }
	static AppendTo(parent) {
	    const dom = BodyStyleSelectBox._Create();
	    parent.appendChild(dom);
	    BodyStyleSelectBox._SetEvent(dom);
	    dom.focus();
	}
	static _Create() {
	    const html = BodyStyleSelectBox._MakeHtmlString();
	    console.log(html);
	    const parser = new DOMParser();
	    const dom = parser.parseFromString(html, "text/html");
	    console.log(dom);
	    if (0 < dom.querySelectorAll('parsererror').length) {
		throw new Error('パースエラー', html);
	    }
	    const domSelect = dom.getElementsByTagName('select')[0];
	    console.log(domSelect);
	    return domSelect ;
	}
	static _MakeHtmlString() {
	    const cssFiles = [
		'black',
		'white',
	    ];
	    let options = [];
	    for (let v of cssFiles) {
		options.push(XmlGen.Element('option', {'value': BodyStyleSelectBox._CssPath(v)}, v));
	    }
	    return XmlGen.Element('select', {'id': BodyStyleSelectBox.Id}, options.join(''));
	}
	static _CssPath(name) { return `./css/${name}.css`; }
	// イベントの設定はdocumentにappendしてからでないと動かない
	static _SetEvent(dom) {
	    dom.onchange = e => {
		console.log(e.target.value);
		document.getElementById(BodyStyleSelectBox.LinkId).href = e.target.value;
	    };
	}
    };
});
