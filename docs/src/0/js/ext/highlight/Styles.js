define(function(require, exports, module) {
    return class Styles {
	get FileNames() { return this._filenames; }
	Url(filename) {
	    return `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/${this._version}/styles/${filename}.min.css`;
	}
	Path(filename) {
	    return `js/lib/highlight/${this._version}/styles/${filename}.min.css`;
	}
	constructor(version) {
	    this._version = version;
	    this._filenames = [
		'agate',
		'androidstudio',
		'arduino-light',
		'arta',
		'ascetic',
		'atelier-cave-dark',
		'atelier-cave-light',
		'atelier-dune-dark',
		'atelier-dune-light',
		'atelier-estuary-dark',
		'atelier-estuary-light',
		'atelier-forest-dark',
		'atelier-forest-light',
		'atelier-heath-dark',
		'atelier-heath-light',
		'atelier-lakeside-dark',
		'atelier-lakeside-light',
		'atelier-plateau-dark',
		'atelier-plateau-light',
		'atelier-savanna-dark',
		'atelier-savanna-light',
		'atelier-seaside-dark',
		'atelier-seaside-light',
		'atelier-sulphurpool-dark',
		'atelier-sulphurpool-light',
		'atom-one-dark',
		'atom-one-light',
		'brown-paper',
		//'brown-papersq.png
		'codepen-embed',
		'color-brewer',
		'darcula',
		'dark',
		'darkula',
		'default',
		'docco',
		'dracula',
		'far',
		'foundation',
		'github-gist',
		'github',
		'googlecode',
		'grayscale',
		'gruvbox-dark',
		'gruvbox-light',
		'hopscotch',
		'hybrid',
		'idea',
		'ir-black',
		'kimbie.dark',
		'kimbie.light',
		'magula',
		'mono-blue',
		'monokai-sublime',
		'monokai',
		'obsidian',
		'ocean',
		'paraiso-dark',
		'paraiso-light',
		//'pojoaque.jpg
		'pojoaque',
		'purebasic',
		'qtcreator_dark',
		'qtcreator_light',
		'railscasts',
		'rainbow',
		'routeros',
		'school-book',
		//'school-book.png
		'solarized-dark',
		'solarized-light',
		'sunburst',
		'tomorrow-night-blue',
		'tomorrow-night-bright',
		'tomorrow-night-eighties',
		'tomorrow-night',
		'tomorrow',
		'vs',
		'vs2015',
		'xcode',
		'xt256',
		'zenburn',
	    ];
	}
    };
});

