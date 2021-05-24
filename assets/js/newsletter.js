import $ from 'jquery'

var submitButton = document.getElementById('newsletter-submit-btn')
var emailField = document.getElementById('newsletter-input-field')

submitButton.onclick = function(){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/9080/',
        type:'post',
        data:$("#newsletter-form").serializeArray(),
        success: function(){
          // alert("SUCCESS! Welcome to our Newsletter")
          let m = document.getElementById("newsletter-modal");
          $(m).removeClass("hidden");
          setTimeout(function() { $(m).addClass("hidden"); }, 3000);
        },
        error: function(){
          alert("There was an error :(")
        }
    });
    emailField.value = '';
};

/*new Code*/
/*Shows the pop up for Newsletter after 10seconds*/
$(document).ready(function(){
    let newsAlert = document.getElementById("newsletter");
    setTimeout(function() { 
      let x = document.getElementById("x-button");
      $(x).removeClass("hidden");
      $(newsAlert).addClass("popUp");}, 5000);
});

/*close pop up for Newsletter*/
$('.close').on("click touch", function(){
    let newsAlert = document.getElementById("newsletter");
    $(newsAlert).removeClass('popUp');
    let x = document.getElementById("x-button");
    x.remove();
});

let navOffsetY = 500

if(window.screen.width >= 992){
window.addEventListener('scroll', function() {
    let x = document.getElementById("x-button");
    let newsAlert = document.querySelector("#newsletter");
    let footerOffsetY = document.querySelector('#footer').offsetTop;
    if (newsAlert != null) {
        if (window.pageYOffset < footerOffsetY-800) {
          newsAlert.classList.add('scrolled');
          $(x).removeClass("hidden");
        }
        else {
          newsAlert.classList.remove('scrolled');
          $(x).addClass("hidden");
        }  
    }
});
}