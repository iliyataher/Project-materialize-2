document.addEventListener('DOMContentLoaded', function() {
    var NavbarMenuOnMobile = document.querySelectorAll('.sidenav');
    M.Sidenav.init(NavbarMenuOnMobile, {
        edge:"right",
    });

    var slidertop = document.querySelectorAll('.carousel.top_carousel');
    var instances = M.Carousel.init(slidertop, {
        fullWidth:true,
        indicators:true,
        onCycleTo:function(){
            let slidertext = document.querySelectorAll(".top-text");
            for(const item of slidertext){
                item.classList.remove("isShow");
                setInterval(function(){
                    item.classList.add("isShow");   
                },700)
            }
        }
    });

    var floatingactionbutton = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(floatingactionbutton, {});

    var searchSelector = document.querySelectorAll('select');
    M.FormSelect.init(searchSelector, {});

    setInterval(function(){
        M.Carousel.getInstance(slidertop[0]).next();
    }, 5000)


    var textareainput = document.querySelectorAll(".materialize-textarea");
    M.CharacterCounter.init(textareainput);

    document.querySelector(".btn-send").addEventListener("click" , ()=>{
        M.toast({
            html: 'نظر شما با موفقیت ثبت شد!',
            classes:"toast",
        })
    })
    





  });


  const loginLink = document.querySelector(".link-login");
  const signUpLink = document.querySelector(".link-signUp");
  const loginSection = document.querySelector(".login-section");
  const signUpSection = document.querySelector(".signUp-section");
  const main = document.querySelector("main");

  loginLink.addEventListener("click" , ()=>{
      loginSection.style.display="none";
      signUpSection.style.display="flex";
  })
  signUpLink.addEventListener("click" , ()=>{
      signUpSection.style.display="none";
      loginSection.style.display="flex";
  })









