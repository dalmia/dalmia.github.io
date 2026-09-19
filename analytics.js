// Google Analytics for amandalmia.com.
// Loaded from header.html, which every page on the site pulls in, so this is
// the only file that needs the ID. The 404 page loads it directly, because it
// is built by the Jekyll theme and does not use header.html.
var GA_MEASUREMENT_ID = 'G-C2CL4NLBEF';

var gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);
