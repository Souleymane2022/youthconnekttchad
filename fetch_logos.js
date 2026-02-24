const https = require('https');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom'); // Assuming jsdom is installed from previous steps or can be run via raw HTTP fetching

const SITE_URL = 'https://youthconnekt.td/';
const DOWNLOAD_DIR = path.join(__dirname, 'public', 'assets', 'img', 'brand');

// Ensure directory exists
if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

https.get(SITE_URL, (res) => {
    let html = '';
    res.on('data', chunk => {
        html += chunk;
    });

    res.on('end', () => {
        const regex = /<img[^>]+src="([^">]+\/brand\/[^">]+)"/gi;
        const matches = [...html.matchAll(regex)];

        const urls = matches.map(m => m[1]);

        // Also adding generic image tag finding for anything that looks like a sponsor 
        const regex2 = /src="([^">]+logo[^">]+\.(?:png|jpg|jpeg|svg))"/gi;
        const matches2 = [...html.matchAll(regex2)];
        matches2.map(m => m[1]).forEach(url => {
            if (!urls.includes(url)) urls.push(url)
        })

        console.log(`Found ${urls.length} potential partner logo URLs.`);

        urls.forEach((urlPath, index) => {
            // Handle relative paths
            let fullUrl = urlPath;
            if (urlPath.startsWith('/')) {
                fullUrl = `https://youthconnekt.td${urlPath}`;
            } else if (!urlPath.startsWith('http')) {
                // Might be a relative path without leading slash
                fullUrl = `https://youthconnekt.td/${urlPath}`;
            }

            const fileName = path.basename(new URL(fullUrl).pathname);
            const dest = path.join(DOWNLOAD_DIR, fileName);

            console.log(`Downloading: ${fullUrl}`);
            const file = fs.createWriteStream(dest);

            https.get(fullUrl, (response) => {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Saved: ${fileName}`);
                });
            }).on('error', (err) => {
                fs.unlink(dest, () => { });
                console.error(`Error downloading ${fileName}:`, err.message);
            });
        });
    });
}).on('error', (err) => {
    console.error(`Error fetching site HTML:`, err.message);
});
