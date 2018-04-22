define(function(require, exports, module) {
    const XmlGen = require('js/util/XmlGen');
    const Highlight = require('js/ext/highlight/Highlight');
    return class CodeStyleSelectBox {
	static get Id() { return 'CodeStyleSelectBox'; }
	static get LinkId() { return 'CodeStyle'; }
	static get Element() { return document.getElementById(CodeStyleSelectBox.Id); }
	static AppendTo(parent) {
	    const dom = CodeStyleSelectBox._Create();
	    parent.appendChild(dom);
	    CodeStyleSelectBox._SetEvent(dom);
	    dom.focus();
	}
	static _Create() {
	    const html = CodeStyleSelectBox._MakeHtmlString();
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
	    const h = new Highlight();
	    let options = [];
	    for (let v of h.Styles.FileNames) {
		options.push(XmlGen.Element('option', {'value': h.Styles.Path(v)}, v));
	    }
	    return XmlGen.Element('select', {'id': CodeStyleSelectBox.Id}, options.join(''));
	}
	// イベントの設定はdocumentにappendしてからでないと動かない
	static _SetEvent(dom) {
	    dom.onchange = e => {
		console.log(e.target.value);
		document.getElementById(CodeStyleSelectBox.LinkId).href = e.target.value;
	    };
	}
    };
});
