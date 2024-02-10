const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1'
const port = 3000

// request adalah = data masuk dari luar
// response adalah = data keluar dari sistem                        

const server = http.createServer(function (request, response) {
    const nama = "AJI SUKRIANA WAHID";
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisa uang.txt', sisa, () => {
        console.log('data uang berhasil di simpan')
    });

    const sisaRAM = os.freemem();

    const hasil = `Halo nama saya ${nama}.saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}.
    sisa RAM PC saya: ${sisaRAM}🔥`

    response.statusCode = 201;
    response.end(hasil);
});

server.listen(port, host,'', function () {
    console.log(`server menyala di ${host}:${port} `);
});