import {readFileSync,existsSync} from 'node:fs';
const required=['index.html','assets/styles.css','assets/app.js','README.md','SOURCES.md','robots.txt','sitemap.xml','404.html'];
for(const file of required){if(!existsSync(file))throw new Error(`Missing ${file}`)}
const html=readFileSync('index.html','utf8');
for(const id of ['mapa','nascimento','celula','corpo','teia','movimento','fontes']){if(!html.includes(`id="${id}"`))throw new Error(`Missing section ${id}`)}
for(const url of ['pequenoprincipe.org.br','sketchfab.com','biointeractive.org','3d.nih.gov','sidineyr.github.io']){if(!html.includes(url))throw new Error(`Missing URL ${url}`)}
const js=readFileSync('assets/app.js','utf8');
for(const lang of ['pt:','en:','es:']){if(!js.includes(lang))throw new Error(`Missing language ${lang}`)}
console.log('Smoke tests passed.');
