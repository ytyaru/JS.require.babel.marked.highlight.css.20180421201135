define(function(require, exports, module) {
    const Language = require('js/ext/marked/parse/code/Language');
    return class CodeLanguage {
	constructor() {
	    this.languages = new Set();
	    this.hljsFilenames= new Set();
	    console.log(this.languages);
	}
	Get(source) {
	    let self = this; // renderer.code内でクラス参照するため
	    self.languages.clear();
	    self.hljsFilenames.clear();
	    let marked = require('marked');
	    let renderer = new marked.Renderer();
	    renderer.code = function(code, lang, escaped) {
		const l = new Language(lang);
		self.languages.add(l.lang);
		self.hljsFilenames.add(l.hljsFilename);
		//let lang_name = self._Split(lang);
		//self.languages.add(lang_name[0]);
		//console.log('<code>言語取得: ', lang_name);
	    }
	    marked.setOptions({
		renderer: renderer,
	    });
	    marked(source);
	    self._Load();
	    return self.languages;
	}
	/*
	//static _Add(lang) { this.languages.add(lang); }
	//static _Split(language) {
	_Split(language) {
	    let delimiter = ':';
	    let info = language.split(delimiter);
	    let lang = info.shift();
	    let fileName = info.join(delimiter);
	    return [lang, fileName];
	};
	*/
	_Load() {
	    console.log('Load start.', this.languages, this.hljsFilenames);
	    for (let v of this.hljsFilenames.values()) {
	    //for (let v of this.languages.values()) {
		//require(['js/lib/highlight/9.12.0/languages/'+this._ReplaceLanguage(v)+'.min']);
		require(['js/lib/highlight/9.12.0/languages/'+v+'.min']);
		console.log('ハイライトJS読込: ', v);
	    }
	}
	/*
	// ```sh とするが shell.min.js という名前である
	// ```html とするが xml.min.js しかない
	// * markdownの時点で存在するlanguagesファイルを意識すべき？
	// * markdownでは実在する拡張子にして存在するlanguagesファイル名に変換すべき？
	_ReplaceLanguage(lang) {
	    if ('c' == lang || 'h' == lang || 'cc' == lang || 'hh' == lang || 'hpp' == lang || 'c++' == lang || 'h++' == lang) { return 'cpp'; }
	    if ('html' == lang || 'svg' == lang) { return 'xml'; }
	    else if ('js' == lang) { return 'javascript'; }
	    else if ('md' == lang) { return 'markdown'; }
	    else if ('sh' == lang) { return 'shell'; }
	    else { return lang; }
	}
	*/
    };
});
