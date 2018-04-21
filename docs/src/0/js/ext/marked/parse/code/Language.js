define(function(require, exports, module) {
    return class Language {
	// language: ```lang:filename の「lang:filename」
	constructor(language) {
	    this.lang = null;
	    this.filename = null;
	    this.hljsFilename = null;
	    //const this.delimiter = ':';
	    this.delimiter = ':';
	    this._Split(language);
	    this.hljsFilename = this._ToHighlightFileName(this.lang);
	}
	// ```lang:filename
	_Split(language) {
	    const info = language.split(this.delimiter);
	    this.lang = info.shift();
	    this.filename = info.join(this.delimiter);
	};
	// ```sh とするが shell.min.js という名前である
	// ```html とするが xml.min.js しかない
	// * markdownの時点で存在するlanguagesファイルを意識すべき？
	// * markdownでは実在する拡張子にして存在するlanguagesファイル名に変換すべき？
	//_ReplaceLanguage(lang) {
	_ToHighlightFileName(lang) {
	    if ('c' == lang || 'h' == lang || 'cc' == lang || 'hh' == lang || 'hpp' == lang || 'c++' == lang || 'h++' == lang) { return 'cpp'; }
	    if ('html' == lang || 'svg' == lang) { return 'xml'; }
	    else if ('js' == lang) { return 'javascript'; }
	    else if ('md' == lang) { return 'markdown'; }
	    else if ('sh' == lang) { return 'shell'; }
	    else { return lang; }
	}
    };
});
