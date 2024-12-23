const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// 中介軟體
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 設定郵件服務
const transporter = nodemailer.createTransport({
    service: 'Gmail', // 或其他郵件服務，例如 Outlook、Yahoo
    auth: {
        user: '您的信箱@gmail.com', // 您的信箱
        pass: '您的信箱密碼',       // 信箱密碼或應用程式專用密碼
    },
});

// 表單提交處理
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: '您的信箱@gmail.com', // 接收郵件的信箱
        subject: `來自網站訪客：${name}`,
        text: `訪客訊息內容：\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('郵件發送失敗，請稍後再試。');
        } else {
            res.send('郵件發送成功！感謝您的聯繫！');
        }
    });
});

// 啟動伺服器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`伺服器運行於 http://localhost:${PORT}`));
