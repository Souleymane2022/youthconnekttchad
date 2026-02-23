const https = require('https');
const fs = require('fs');

const SITE_URL = 'https://youthconnekt.td/';

https.get(SITE_URL, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        const bgRegex = /url\(['"]?([^'"\)]+)['"]?\)/g;
        const urls = new Set();

        let match;
        while ((match = imgRegex.exec(data)) !== null) {
            urls.add(match[1]);
        }
        while ((match = bgRegex.exec(data)) !== null) {
            urls.add(match[1]);
        }

        const output = [];
        urls.forEach(urlPath => {
            if (urlPath.startsWith('data:')) return;
            let fullUrl = urlPath;
            if (!fullUrl.startsWith('http')) {
                try {
                    fullUrl = new URL(urlPath, SITE_URL).href;
                } catch (e) {
                    // ignore
                }
            }
            output.push(fullUrl);
        });

        fs.writeFileSync('extracted_images.txt', output.join('\n'));
        console.log('Written to extracted_images.txt');
    });
});
