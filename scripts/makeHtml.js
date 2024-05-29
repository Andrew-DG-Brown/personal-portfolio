import showdown from 'showdown';
import fs from 'fs'

const converter = new showdown.Converter();
converter.setOption('openLinksInNewWindow', true)
const dir = './markdown'

const files = fs.readdirSync(dir);

const html = {}

for (const file of files) {
    const name = file.replace('.md', '')
    const markdownContent = fs.readFileSync(`${dir}/${name}.md`, 'utf-8');
    const htmlContent = converter.makeHtml(markdownContent);

    html[name] = htmlContent
}

const final = `
export default ${JSON.stringify(html, null, 4)}
`

fs.writeFileSync(`./public/static/projects.content.ts`, final)
