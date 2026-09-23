// Google Analytics for amandalmia.com.
// Loaded from header.html, which every page on the site pulls in, so this is
// the only file that needs the ID. The 404 page loads it directly, because it
// does not use header.html.
var GA_MEASUREMENT_ID = 'G-C2CL4NLBEF';

var gaScript = document.createElement('script');
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);

// Count presses on every link in the header ("Talk to me", "Writing", ...).
// Each shows up in Google Analytics as its own event, e.g. nav_talk_to_me.
document.addEventListener('click', function (e) {
    var link = e.target.closest('header a');
    if (!link) return;
    var name = link.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_');
    gtag('event', 'nav_' + name);
});
