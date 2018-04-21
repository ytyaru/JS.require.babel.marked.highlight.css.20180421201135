require.config({
    paths: {
	'text': 'js/lib/require/2.3.5/text',
	'jquery': 'js/lib/jquery/jquery-3.3.1.min',
	'marked': 'js/lib/marked/0.3.19/marked.min',
	'highlight': 'js/lib/highlight/9.12.0/highlight.min'
    }
});
requirejs(['js/app/main.js']);
