define(function(require, exports, module) {
    var $ = require('jquery');
    var hljs = require('highlight');
    var Language = require('js/ext/marked/parse/code/Language');
    Code = {};
    Code.Setup = function(renderer) {
	renderer.code = function(code, language) {
	    l = new Language(language);
	    return Code._MakePreCodeTag(l.lang, l.filename, code);
	    //var lang_name = Code._Split(language);
	    //return Code._MakePreCodeTag(lang_name[0], lang_name[1], code);

	    // 言語別ハイライト用JS動的読込
	    // https://stackoverflow.com/questions/17446844/dynamic-require-in-requirejs-getting-module-name-has-not-been-loaded-yet-for-c?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

	    // 同期できない
	    // http://requirejs.org/docs/errors.html#notloaded
	    // marked.min.js:1 Uncaught Error: Module name "js/lib/highlight/languages/shell.min" has not been loaded yet for context: _
	    //var hllangjs = require('js/lib/highlight/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min');
	    //var hllangjs = require('js/lib/highlight/9.12.0/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min');
	    //console.log('読込完了: highlight/9.12.0/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min');

	    /*
	    require(['js/lib/highlight/9.12.0/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min'], function(hllangjs) {
		console.log('読込完了: highlight/9.12.0/languages/'+Code._ReplaceLanguage(lang_name[0])+'.min');
		// 再びmarked()を実行する？　予めmdから必要な言語を取得して動的読込してからパースしたほうがよさそうだが。
	    });
	    */
	};
    };
    // pre.code タグ作成
    Code._MakePreCodeTag = function(lang, fileName, code) {
	console.log('lang:', lang, 'fileName:', fileName);
	return '<pre>' + Code._FileNameTag(fileName)+ '<code class="'+lang+'">' + hljs.highlightAuto(code).value + '</code></pre>';
    }
    // ファイル名表示用タグ
    Code._FileNameTag = function(fileName) {
	if (fileName) { return '<code class="filename">'+fileName+'</code><br/>'; }
	else { return ''; }
    };
    return Code;
});
