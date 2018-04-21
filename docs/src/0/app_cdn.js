require.config({
    paths: {
	'text': 'js/lib/require/text',
	'jquery': 'https://code.jquery.com/jquery-3.3.1.min',
	'marked': 'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.19/marked.min',
	'highlight': 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min'
    }
});
requirejs(['js/app/main.js']);
