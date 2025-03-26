function cekIP() {
    let ip = document.getElementById("ipInput").value;
    if (!ip) {
        alert("Masukkan IP terlebih dahulu!");
        return;
    }

    fetch(`https://ip-api.com/json/${ip}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "fail") {
                document.getElementById("hasil").innerHTML = "<p>IP tidak valid!</p>";
            } else {
                document.getElementById("hasil").innerHTML = `
                    <p><strong>IP:</strong> ${data.query}</p>
                    <p><strong>Negara:</strong> ${data.country}</p>
                    <p><strong>Kota:</strong> ${data.city}</p>
                    <p><strong>ISP:</strong> ${data.isp}</p>
                `;
            }
        })
        .catch(err => console.log(err));
}
