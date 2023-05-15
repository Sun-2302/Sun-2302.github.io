/*----------------Input Alert (Fail) ----------------*/
const contact = function() {
    const myEmail = document.getElementById("my-mail");
    const myName = document.getElementById("my-name");
    const mySubject = document.getElementById("mysubject");
    const myMessage = document.getElementById("my-message");
    const alertMsg = document.getElementById("alert");
    const sendMesg = document.getElementById("send");
    const InputBtn = document.getElementById("cta");

    InputBtn.addEventListener("click",function(){
        const mail = myEmail.value;
        const name = myName.value;
        const subject = mySubject.value;
        const message = myMessage.value;
        if (mail == "" || mail == null 
        ) {
            alertMsg.classList.remove("hidden");
        }
    })
}

contact();

/*----------------Scrolling animation----------------*/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active-2");
      } else {
        reveals[i].classList.remove("active-2");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);