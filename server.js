// 1. เรียกใช้งาน Module http
const http = require('http');

// 2. กำหนด Port
const port = process.env.PORT || 3000;

// 3. สร้าง Server
const server = http.createServer((req, res) => {

    // 3.1 Status Code
    res.statusCode = 200;

    // 3.2 กำหนดชนิดข้อมูล
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 3.3 ส่งหน้าเว็บ
    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Web Server</title>

<style>
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body{
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg,#4facfe,#00f2fe);
    }

    .card{
        background:#fff;
        width:420px;
        padding:35px;
        border-radius:20px;
        box-shadow:0 15px 35px rgba(0,0,0,.2);
        text-align:center;
    }

    .icon{
        font-size:60px;
        margin-bottom:15px;
    }

    h1{
        color:#0077cc;
        margin-bottom:15px;
        font-size:28px;
    }

    h2{
        color:#333;
        font-size:22px;
        margin-bottom:10px;
    }

    p{
        color:#666;
        font-size:16px;
        line-height:1.7;
        margin-bottom:12px;
    }

    .status{
        display:inline-block;
        background:#28a745;
        color:white;
        padding:8px 18px;
        border-radius:30px;
        font-weight:bold;
        margin-top:10px;
    }

    footer{
        margin-top:25px;
        color:#888;
        font-size:13px;
    }
</style>

</head>
<body>

<div class="card">
    <div class="icon">💻</div>

    <h1>Node.js Web Server</h1>

    <h2>นางสาววรัญญา แย้มยิ้ม</h2>

    <p><strong>รหัสนักศึกษา:</strong> 69319010139</p>

    <p>ยินดีต้อนรับเข้าสู่ Web Server ที่พัฒนาด้วย Node.js และกำลังทำงานบน Railway</p>

    <div class="status">🟢 Server Online</div>

    <footer>
        Railway Deployment 🚀
    </footer>
</div>

</body>
</html>
    `);
});

// 4. เริ่มต้น Server
server.listen(port, () => {
    console.log(`Server is running! เครื่องแม่ข่ายเปิดทำงานแล้วที่ช่องทาง: ${port}`);
});
