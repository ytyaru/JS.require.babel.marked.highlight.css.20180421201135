define(function(require, exports, module) {
    const XmlGen = require('js/util/XmlGen');
    const Styles = require('js/ext/highlight/Styles');
    const Languages = require('js/ext/highlight/Languages');
    //return class HljsCssSelectBoxCreator {
    return class Highlight {
	constructor(version='9.12.0') {
	    this._version = version;
	    this._styles = new Styles(version);
	    this._languages = new Languages(version);
	}
	get Version() { return this._version; }
	get Styles() { return this._styles; }
	get Languages() { return this._languages; }
	Make() {
	    options = [];
	    //for (let i=0; i<this.filenames.length; i++) {
	    for (const name in this.filenames) {
		options.push(XmlGen.Element('option', {'value': this.Url(name)}, name));
	    }
	    return XmlGen.Element('select', {'id': 'HljsCss'}, options.join(''));
	}
    };
});

