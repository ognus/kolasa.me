/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconskolasame\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-minus' : '&#xe000;',
			'icon-mail_icon_new' : '&#xe003;',
			'icon-location' : '&#xe004;',
			'icon-github' : '&#xe002;',
			'icon-github-2' : '&#xe006;',
			'icon-twitter' : '&#xe005;',
			'icon-linkedin' : '&#xe001;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};