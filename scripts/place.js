document.addEventListener('DOMContentLoaded', () => {
    // Footer Date
    const yearSpan = document.getElementById('current-year');
    const lastModifiedPara = document.getElementById('lastModified');
    
    const today = new Date();
    yearSpan.textContent = today.getFullYear();
    lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;

    const temp = 28;
    const windSpeed = 15;
    
    const windChillSpan = document.getElementById('wind-chill');

    function calculateWindChill(t, v) {
        return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
    }

    if (temp <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temp, windSpeed);
        windChillSpan.textContent = `${chill.toFixed(1)} °C`;
    } else {
        windChillSpan.textContent = "N/A";
    }
});
