//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    /*
    const md = null;
    try {
	md = require('text!txt/default.md');
    } catch(e) {
	const Default = require('js/app/Default');
	const d = new Default();
	md = d.Markdown;
    }
    */
    const CssSelectBox = require('js/app/ui/CssSelectBox');
    CssSelectBox.AppendTo(document.body);
    const Default = require('js/app/Default');
    const d = new Default();
    let md = d.Markdown;
    const CodeLanguage = require('js/app/CodeLanguage');
    const cl = new CodeLanguage();
    langs = cl.Get(md);
    console.log(langs);

    const $ = require('jquery');
    const marked = require('marked');
    const CssLoader = require('js/util/CssLoader');
    CssLoader.Load('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs2015.min.css');
    const markedSetup = require('js/ext/marked/Setup');
    markedSetup.Setup();
    console.log('パース開始');
    let html = marked(md);
    console.log('パース完了');
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    document.body.appendChild(doc.body);
    //$('body').html($('body').html() + html);
    const sub = require('js/app/sub');
    sub.print(md);
});
