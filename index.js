function updateTime() {
    const now = new Date();
    document.getElementById("utcTime").textContent = now.toUTCString();
}
setInterval(updateTime, 1000);
updateTime();