const fs = require('fs');
const html = fs.readFileSync('team_extracted.html', 'utf8');

// The HTML structure is like:
// <div class="tp-team-2__thumb">
//    <img class="w-100" src="assets/img/team/ALHAFIZ HASSAN AHAMAT.png" alt="">
// ...
// <h4 class="tp-team-titile"><a>ALHAFIZ HASSAN AHAMAT</a></h4>
// <span>Coordonnateur National</span>

const regex = /<img[^>]*src="([^"]+)"[^>]*>.*?<h4[^>]*><a[^>]*>(.*?)<\/a><\/h4>\s*<span>(.*?)<\/span>/gs;

let match;
const team = [];
while ((match = regex.exec(html)) !== null) {
    team.push({
        image: match[1],
        name: match[2].trim(),
        role: match[3].trim()
    });
}

console.log(JSON.stringify(team, null, 2));
