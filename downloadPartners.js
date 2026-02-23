const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('youth.html', 'utf8');

// The partner section seems to have images like <img src="./assets/img/brand/1.png"
const regex = /<img[^>]*src="\.\/(assets\/img\/brand\/[^"]+)"/g;
let match;
const partners = [];

while ((match = regex.exec(html)) !== null) {
    partners.push(match[1]);
}

const uniquePartners = [...new Set(partners)];
console.log('Found partners:', uniquePartners);

const targetDir = path.join(__dirname, 'public', 'assets', 'img', 'brand');
fs.mkdirSync(targetDir, { recursive: true });

uniquePartners.forEach(p => {
    const filename = path.join(__dirname, 'public', p);
    const file = fs.createWriteStream(filename);
    https.get('https://youthconnekt.td/' + p, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
        });
    }).on('error', err => {
        fs.unlink(filename, () => { });
        console.error('Error downloading ' + p + ':', err);
    });
});
