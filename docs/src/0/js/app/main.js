//require(['sub', 'text!../txt/default.txt'], function(sub, md) {
//    sub.print(md);
//});
define(function(require, exports, module) {
    /*
    let md = null;
    try {
	md = require('text!txt/default.md');
    } catch(e) {
	let Default = require('js/app/Default');
	let d = new Default();
	md = d.Markdown;
    }
    */
    let Default = require('js/app/Default');
    let d = new Default();
    md = d.Markdown;
    let CodeLanguage = require('js/app/CodeLanguage');
    let cl = new CodeLanguage();
    langs = cl.Get(md);
    console.log(langs);

    let $ = require('jquery');
    let marked = require('marked');
    let CssLoader = require('js/util/CssLoader');
    CssLoader.Load('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs2015.min.css');
    let markedSetup = require('js/ext/marked/Setup');
    markedSetup.Setup();
    console.log('パース開始');
    html = marked(md);
    console.log('パース完了');
    $('body').html(html);
    let sub = require('js/app/sub');
    sub.print(md);
});
