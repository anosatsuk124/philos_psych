/* -*- tab-width: 4; indent-tabs-mode: t -*- */

const e_output = document.querySelector ('#output');
const e_input = document.querySelector ('#input');
const e_img = document.querySelector ('#img');
const e_download = document.querySelector ('#download');

e_input.addEventListener ('change', ev => void ((async ev => {
	const text = e_input.value;
	const front_matter = `
<link rel="stylesheet" href="https://anosatsuk124.github.io/philos_psych/fonts.css">
<script src="https://anosatsuk124.github.io/philos_psych/v1/tikzjax.js"></script>`;
	
	const s = document.createElement ('script');
	s.type = 'text/tikz';
	s.innerText = text;
	const srcdoc = front_matter + s.outerHTML;
	
	const iframe = document.createElement ('iframe');
	iframe.srcdoc = srcdoc;
	e_output.appendChild (iframe);
	await new Promise (res => {
		iframe.onload = ev => res (ev);
	});
	do {
		await new Promise (res => setTimeout (() => res (), 100));
	} while (!iframe.contentDocument.querySelector ('svg'));
	
	const svg = iframe.contentDocument.querySelector ('svg');
	svg.setAttribute ('xmlns', 'http://www.w3.org/2000/svg');
	const svg_text = svg.outerHTML;
	
	
@@ -32,8 +32,7 @@ e_input.addEventListener ('change', ev => void ((async ev => {


	const img = new Image;
	const svg_src = 'data:image/svg+xml,' + encodeURIComponent (svg_text);
	svg_src.src='';
	const svg_src = img.src = 'data:image/svg+xml,' + encodeURIComponent (svg_text);
	await new Promise (res => {
		img.onload = ev => res (ev);
	});
@@ -49,6 +48,6 @@ e_input.addEventListener ('change', ev => void ((async ev => {
	ctx.drawImage (img, 0, 0);

	e_download.href = canvas.toDataURL ('img/png');
	e_img.src = e_download.href;
	e_img.src = svg_src;
	e_output.textContent = '';
}) (ev)));
