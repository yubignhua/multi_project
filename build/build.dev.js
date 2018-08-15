'use strict'
const shell = require('shelljs')
const fs = require('fs')
const path = require('path')

const rHyphen = /-([a-zA-Z])/g
const projects = [];
console.log('process.argv:::',process.argv.slice(2))
for(const project of process.argv.slice(2)) {
  console.log('process:::',project.replace(rHyphen, '$1'))
  projects.push(project.replace(rHyphen, '$1'));
}

if (projects.length)
  fs.writeFileSync(`${path.join(__dirname)}/projects.js`, `module.exports = {projects: ${JSON.stringify(projects)}}`);
else
  fs.writeFileSync(`${path.join(__dirname)}/projects.js`, `module.exports = {}`);

shell.exec(`webpack-dev-server --inline --progress --config build/webpack.dev.conf.js`);
