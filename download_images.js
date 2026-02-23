const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
    'https://youthconnekt.td/assets/img/logo/logo.jpg',
    'https://youthconnekt.td/assets/img/slider/shape3.png',
    'https://youthconnekt.td/assets/img/slider/shape4.png',
    'https://youthconnekt.td/assets/img/features/features-man.png',
    'https://youthconnekt.td/assets/img/about/trophee.png',
    'https://youthconnekt.td/assets/img/testimonial/user.png',
    'https://youthconnekt.td/assets/img/logo/favicon.png'
];

const destDir = path.join(__dirname, 'public', 'assets', 'img', 'fetched');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

urls.forEach(url => {
    const filename = path.basename(new URL(url).pathname);
    const destPath = path.join(destDir, filename);

    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', (err) => {
        fs.unlinkSync(destPath);
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
});
