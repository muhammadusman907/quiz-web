
var html = [
    {
        question: "What does HTML stand for?",
        option1: " Hyperlinks and Text Markup Language ",
        option2: "Home Tool Markup Language",
        option3: "Hyper Text Markup Language  ",
        correctOption: "Hyper Text Markup Language  ",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Microsoft ",
        option2: "Mozilla",
        option3: "The World Wide Web Consortium",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: " Choose the correct HTML element for the largest heading:",
        option1: "<h1>",
        option2: "<h6>",
        option3: "<Heading>",
        correctOption: "<h1>",
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<http://www.w3schools.coma>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <thead> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        option4: '<dl>',
        correctOption: "<ul>"
    },
    {
        question: 'What is the correct HTML for inserting an image?',
        option1: '<img alt="MyImage">image.gif</img>',
        option2: '<img href="image.gif" alt="MyImage">',
        option3: '<img src="image.gif" alt="MyImage">',
        option4: '<image src="image.gif" alt="MyImage">',
        correctOption: '<img src="image.gif" alt="MyImage">'
    },
    {
        question: 'What is the correct HTML for making a checkbox?',
        option1: '<input type="check">',
        option2: '<check>',
        option3: '<checkbox>',
        option4: '<input type="checkbox">',
        correctOption: '<input type="checkbox">'
    },
    {
        question: "What is the correct HTML for making a text input field?",
        option1: '<input type="textfield">',
        option2: '<input type="text">',
        option3: '<textfield>',
        option4: '<textinput type="textfield">',
        correctOption: '<input type="text">'
    },
    {
        question: 'What is the correct HTML for making a drop-down list?',
        option1: '<input type="list">',
        option2: '<list>',
        option3: '<input type="dropdown">',
        option4: '<select>',
        correctOption: '<select>'
    },
    {
        question: 'What is the correct HTML for making a text area?',
        option1: '<input type="textbox">',
        option2: '<input type="textarea">',
        option3: '<textarea>',
        correctOption: '<textarea>'
    },
    {
        question: 'What is the correct HTML for inserting a background image?',
        option1: '<background img="background.gif">',
        option2: '<body bg="background.gif">',
        option3: '<body style="background-image:url(background.gif)">',
        correctOption: '<body style="background-image:url(background.gif)">'
    }
];
var css = [
    {
        question: 'What does CSS stand for?',
        option1: 'Colorful Style Sheet',
        option2: 'Computer Style Sheet',
        option3: 'Cascading Style Sheet',
        option4: 'Creative Style Sheet',
        correctOption: 'Cascading Style Sheet'
    },
    {
        question: 'What is the correct HTML for referring to an external style sheet?',
        option1: '&lt stylesheet&gt  mystyle.css&lt/stylesheet&gt',
        option2: '&ltstyle src="mystyle.css"&gt',
        option3: '&ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt',
        correctOption: '&ltlink rel="stylesheet" type="text/css" href="mystyle.css"&gt'
    },
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        option1: 'In the &ltbody&gt section',
        option2: 'In the &lthead&gt section',
        option3: 'At the end of the document',
        correctOption: 'In the &lthead&gt section'
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        option1: '<&ltcss&gt',
        option2: '<&ltstyle&gt',
        option3: '<&ltscript&gt',
        correctOption: '<&ltstyle&gt'
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        option1: 'styles',
        option2: 'font',
        option3: 'style',
        option3: 'class',
        correctOption: 'style'
    },
    {
        question: 'Which is the correct CSS syntax?',
        option1: 'body{color: black;}',
        option2: '{body:color=black;}',
        option3: 'body:color=black;',
        option4: '{body;color:black;}',
        correctOption: 'body{color: black;}'
    },
    {
        question: 'How do you insert a comment in a CSS file?',
        option1: '/*this is a comment*/',
        option2: '//this is a comment',
        option3: '//this is a comment//',
        option3: "'this is a comment",
        correctOption: '/*this is a comment*/'
    },
    {
        question: 'Which property is used to change the background color?',
        option1: 'bgcolor',
        option2: 'color',
        option3: 'background-color',
        correctOption: 'background-color'
    },
    {
        question: 'How do you add a background color for all &lth1&gt elements?',
        option1: 'h1 {background-color:#FFFFFF;}',
        option2: 'h1.all {background-color:#FFFFFF;}',
        option3: 'all.h1 {background-color:#FFFFFF;}',
        correctOption: 'h1 {background-color:#FFFFFF;}'
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        option1: 'color',
        option2: 'text-color',
        option3: 'fgcolor',
        correctOption: 'color'
    },
    {
        question: 'Which CSS property controls the text size?',
        option1: 'font-size',
        option2: 'text-style',
        option3: 'text-size',
        option4: 'font-style',
        correctOption: 'font-size'
    },
    {
        question: 'What is the correct CSS syntax for making all the <p> elements bold?',
        option1: 'p {font-weight:bold;}',
        option2: '&ltp style="font-size:bold;"&gt',
        option3: '&ltp style="text-size:bold;"&gt',
        option4: 'p {text-size:bold;}',
        correctOption: 'p {font-weight:bold;}'
    },
    {
        question: 'How do you display hyperlinks without an underline?',
        option1: 'a {underline:none;}',
        option2: 'a {decoration:no-underline;}',
        option3: 'a {text-decoration:no-underline;}',
        option4: 'a {text-decoration:none;}',
        correctOption: 'a {text-decoration:none;}'
    },
    {
        question: 'How do you make each word in a text start with a capital letter?',
        option1: 'text-style:capitalize',
        option2: 'text-transform:capitalize',
        option3: 'You can not do that with CSS',
        option4: 'transform:capitalize',
        correctOption: 'text-style:capitalize'
    },
    {
        question: 'Which property is used to change the font of an element?',
        option1: 'font-style',
        option2: 'font-weight',
        option3: 'font-family',
        correctOption: 'font-family'
    },
    {
        question: 'How do you make the text bold?',
        option1: 'style:bold;',
        option2: 'font:bold;',
        option3: 'font-weight:bold;',
        correctOption: 'font-weight:bold;'
    },
    {
        question: 'Which property is used to change the left margin of an element?',
        option1: 'margin-left',
        option2: 'padding-left',
        option3: 'indent',
        correctOption: 'margin-left'
    },
    {
        question: 'When using the padding property; are you allowed to use negative values?',
        option1: 'Yes',
        option2: 'No',
        correctOption: 'No'
    },
    {
        question: 'How do you make a list that lists its items with squares?',
        option1: 'list: square;',
        option2: 'list-type: square;',
        option3: 'list-style-type: square;',
        correctOption: 'list-style-type: square;'
    },
    {
        question: 'How do you select an element with id "demo"?',
        option1: '#demo',
        option2: '.demo',
        option3: 'demo',
        option4: '*demo',
        correctOption: '#demo'
    }
]


var radioInput = document.getElementsByName("answers");
var questionId = document.getElementById("question");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var nextBtn = document.getElementById("next-btn");

var minute = document.getElementById("minut");
var second = document.getElementById("second");
var totalQuestion = document.getElementById("total-question");
var correctQuestion = document.getElementById("correct-question");
var questionAnswerShow = document.getElementById("question-answer");
var result = document.getElementById("result");
var passFail = document.getElementById("pass-fail");
//  ================== sign up page=============
var userName = document.getElementById("user-name");
var signupEmail = document.getElementById("signup-email");
var signupPassword = document.getElementById("signup-password");
// ================ regex ====================
var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// =====================login =========================
var loginEmail = document.getElementById("login-email")
var loginPassword = document.getElementById("login-password")
var names = document.getElementById("name")
// ===============================logout=================
var logoutBtn = document.getElementById("logout")

var index = 0;
var score = 0;
var sec = 59;
var min = 1;
// =======================================================
// =================== signup function====================
// =======================================================
function signup() {
    if (userName.value.trim() !== "" && signupEmail.value.trim() !== "" && signupPassword.value.trim() !== "") {
        if (signupEmail.value.toLowerCase().match(regex)) {
            if (signupPassword.value.length < 7) {
                Swal.fire({
                    icon: 'error',
                    title: 'passwod chota hai',
                    showConfirmButton: true,
                  })
                // alert("passwod chota hai")
            }
            else {
                var obj = {
                    user_name: userName.value,
                    signup_email: signupEmail.value,
                    signup_password: signupPassword.value,
                }
                console.log(obj)
                var userDataStr = JSON.stringify(obj);
                localStorage.setItem("userData", userDataStr);
                Swal.fire({
                    icon: 'succsess',
                    title: 'signup successfully',
                    showConfirmButton: true,
                  })
                location.href = "./login.html"

                // console.log(userName.value) // ================ user name
                // console.log(signupEmail.value);// ============= user email
                // console.log(signupPassword.value); ============ user password
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'email incorrect',
                showConfirmButton: true,
              })
            // alert("email incorrect")
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'input not filled',
            showConfirmButton: true,
          })
        // alert("not found")
    }
}
// ========================= login ======================== //

function login() {
    if (loginPassword.value.trim() !== "" && loginEmail.value.trim() !== "") {
        if (loginEmail.value.toLowerCase().match(regex)) {
            if (loginPassword.value.length < 7) {
                // alert(" passwod chota hai")
                Swal.fire({
                    icon: 'error',
                    title: 'passwod chota hai',
                    showConfirmButton: true,
                  })
            }
            else {
                console.log(loginEmail.value);
                console.log(loginPassword.value);
                var userDataParse = JSON.parse(localStorage.getItem("userData"))
                console.log(userDataParse)
                if (loginEmail.value === userDataParse.signup_email) {
                    if (loginPassword.value === userDataParse.signup_password) {
                        Swal.fire({
                            icon: 'success',
                            title: 'login successfully',
                            showConfirmButton: true,
                          })
                        // alert("login successfully")
                        location.href = "./quiz.html"
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'incorrect password',
                            showConfirmButton: true,
                          })
                        // alert("incorrect password")
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'email not found',
                        showConfirmButton: true,
                      })
                    // alert("email not found")
                }

            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'email incorrecrt',
                showConfirmButton: true,
              })
            // alert("email incorrecrt")
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'input not filled',
            showConfirmButton: true,
          })
        // alert("input not filled")
    }
}
// ================================= logout =============================//
 function logout(){
      location.href = "./index.html";
 }
// ================================= user name===========================//
var parsename = JSON.parse(localStorage.getItem("userData"))
if (names){
    names.innerText = parsename.user_name;
}


    // ===================== quiz functionalty
function next() {
    for (var i = 0; i < radioInput.length; i++) {

        console.log(radioInput[i].checked) //========= checked true input radio ===========//
        if (radioInput[i].checked) {
            var userAnswer = html[index - 1][`option${radioInput[i].value}`]
            nextBtn.disabled = true;
            sec = 59;
            min = 1;
            // =====================================================//
            // console.log(nextBtn) //=========== nextbtn ==========//
            // console.log(userAnswer) //======= user answer =======//
            // =====================================================//

            console.log(html[index - 1].correctOption)
            radioInput[i].checked = false;
            //======================================================== 
            // =================== user answer correct answer match //
            //======================================================== 

            if (html[index - 1].correctOption === userAnswer) {
                score++
                console.log(score)
            }
        }
    }
    // ============================= result ==================//
    if (html.length === index) {
        //========================= question answer display none ==============//
        questionAnswerShow.style.display = "none";
        // ========================= result display show =================//
        result.style.display = "block";
        correctQuestion.innerHTML = score;
        totalQuestion.innerHTML = html.length;
        var total = Math.round((score / html.length) * 100);
        // =============================logout button show===========
          logoutBtn.style.display = "block";
        // ====================== progress bar ==================//
        var progressDiv = document.getElementById("progress-div");
        progressDiv.style.width = total + "%";
        progressDiv.innerHTML = total + "%";
        if (total < 60) {
            progressDiv.style.backgroundColor = "red";
            passFail.innerHTML = "Sorry You Faild"
        }
        else {
            passFail.innerHTML = "Congrulation , You Passed"
            progressDiv.style.backgroundColor = "green";

        }
    }
    // ************************************************
    // ================ QUESTION RENDER==================
    // ************************************************

    if (questionId) {
        questionId.innerHTML = `
    <h3>${html[index].question}</h3>
    `
    }
    // ************************************************
    // ================ ANSWER RENDER ==================
    // ************************************************
    if (ans1 && ans2 && ans3) {
        ans1.innerText = `${html[index].option1}`
        ans2.innerText = `${html[index].option2}`
        ans3.innerText = `${html[index].option3}`
    }


    index++
}
next()
// ==================== next button disble function
function btnDisabled() {
    nextBtn.disabled = false;
}
// ==================== Timer question quizz
setInterval(function () {
    if (minute && second) {
        minute.innerText = min;
        second.innerText = sec--;
        if (min < 0) {
            min = 1
            next()
        }
        if (sec < 1) {
            sec = 59;
            min--
        }
    }
}, 1000)


