/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    
    // Navbar toggler
        const navBtn = document.getElementById("btn");
        const navList = document.getElementById("list");
        navBtn.addEventListener("click",function () {
          navList.classList.toggle("hidden");
        });
    
     //Portfolio Button
     const portfolioBtn = function () {
        //Btn Group
        const pastelBtn = document.getElementById("portfolio-link-pastel");
        const acrylicBtn = document.getElementById("portfolio-link-acrylic");
        const digitalBtn = document.getElementById("portfolio-link-digital");
        const watercolorBtn = document.getElementById("portfolio-link-watercolor");
        //Different Set
        const pastelSet = document.getElementById("pastel");
        const acrylicSet = document.getElementById("acrylic");
        const digitalSet = document.getElementById("digital");
        const watercolorSet = document.getElementById("watercolor");

        //Pastel Event
        pastelBtn.addEventListener("click",function(){
            if (pastelSet.classList.contains("hidden") == true) {
                pastelSet.classList.remove("hidden");
                if (acrylicSet.classList.contains("hidden") == false) {
                    acrylicSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
                if (watercolorSet.classList.contains("hidden") == false) {
                    watercolorSet.classList.add("hidden"); 
                }
            }
            if (pastelBtn.classList.contains("link-hover") == false) {
                pastelBtn.classList.add("link-hover");
                if (acrylicBtn.classList.contains("link-hover") == true) {
                    acrylicBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
                if (watercolorBtn.classList.contains("link-hover") == true) {
                    watercolorBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Acrylic Event
        acrylicBtn.addEventListener("click",function(){
            if (acrylicSet.classList.contains("hidden") == true) {
                acrylicSet.classList.remove("hidden");
                if (pastelSet.classList.contains("hidden") == false) {
                    pastelSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
                if (watercolorSet.classList.contains("hidden") == false) {
                    watercolorSet.classList.add("hidden"); 
                }
            }
            if (acrylicBtn.classList.contains("link-hover") == false) {
                acrylicBtn.classList.add("link-hover");
                if (pastelBtn.classList.contains("link-hover") == true) {
                    pastelBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
                if (watercolorBtn.classList.contains("link-hover") == true) {
                    watercolorBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Digital Event
        digitalBtn.addEventListener("click",function(){
            if (digitalSet.classList.contains("hidden") == true) {
                digitalSet.classList.remove("hidden");
                if (pastelSet.classList.contains("hidden") == false) {
                    pastelSet.classList.add("hidden"); 
                }
                if (acrylicSet.classList.contains("hidden") == false) {
                    acrylicSet.classList.add("hidden"); 
                }
                if (watercolorSet.classList.contains("hidden") == false) {
                    watercolorSet.classList.add("hidden"); 
                }
            }
            if (digitalBtn.classList.contains("link-hover") == false) {
                digitalBtn.classList.add("link-hover");
                if (pastelBtn.classList.contains("link-hover") == true) {
                    pastelBtn.classList.remove("link-hover");  
                }
                if (acrylicBtn.classList.contains("link-hover") == true) {
                    acrylicBtn.classList.remove("link-hover");  
                }
                if (watercolorBtn.classList.contains("link-hover") == true) {
                    watercolorBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Watercolor Event
        watercolorBtn.addEventListener("click",function(){
            if (watercolorSet.classList.contains("hidden") == true) {
                watercolorSet.classList.remove("hidden");
                if (pastelSet.classList.contains("hidden") == false) {
                    pastelSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
                if (acrylicSet.classList.contains("hidden") == false) {
                    acrylicSet.classList.add("hidden"); 
                }
            }
            if (watercolorBtn.classList.contains("link-hover") == false) {
                watercolorBtn.classList.add("link-hover");
                if (pastelBtn.classList.contains("link-hover") == true) {
                    pastelBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
                if (acrylicBtn.classList.contains("link-hover") == true) {
                    acrylicBtn.classList.remove("link-hover");  
                }
            }   
        })
    }
    portfolioBtn();

    //Portfolio Button Responsive
    const portfolioBtnResponsive = function () {
        //Btn Group
        const pastelBtn = document.getElementById("portfolio-link-pastel");
        const acrylicBtn = document.getElementById("portfolio-link-acrylic");
        const digitalBtn = document.getElementById("portfolio-link-digital");
        const watercolorBtn = document.getElementById("portfolio-link-watercolor");
        //Different Set
        const pastelSet = document.getElementById("pastel-2");
        const acrylicSet = document.getElementById("acrylic-2");
        const digitalSet = document.getElementById("digital-2");
        const watercolorSet = document.getElementById("watercolor-2");

        //Pastel Event
        pastelBtn.addEventListener("click",function(){
            if (pastelSet.classList.contains("hidden") == true) {
                pastelSet.classList.remove("hidden");
                if (acrylicSet.classList.contains("hidden") == false) {
                    acrylicSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
                if (watercolorSet.classList.contains("hidden") == false) {
                    watercolorSet.classList.add("hidden"); 
                }
            }
            if (pastelBtn.classList.contains("link-hover") == false) {
                pastelBtn.classList.add("link-hover");
                if (acrylicBtn.classList.contains("link-hover") == true) {
                    acrylicBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
                if (watercolorBtn.classList.contains("link-hover") == true) {
                    watercolorBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Acrylic Event
        acrylicBtn.addEventListener("click",function(){
            if (acrylicSet.classList.contains("hidden") == true) {
                acrylicSet.classList.remove("hidden");
                if (pastelSet.classList.contains("hidden") == false) {
                    pastelSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
                if (watercolorSet.classList.contains("hidden") == false) {
                    watercolorSet.classList.add("hidden"); 
                }
            }
            if (acrylicBtn.classList.contains("link-hover") == false) {
                acrylicBtn.classList.add("link-hover");
                if (pastelBtn.classList.contains("link-hover") == true) {
                    pastelBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
                if (watercolorBtn.classList.contains("link-hover") == true) {
                    watercolorBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Digital Event
        digitalBtn.addEventListener("click",function(){
            if (digitalSet.classList.contains("hidden") == true) {
                digitalSet.classList.remove("hidden");
                if (pastelSet.classList.contains("hidden") == false) {
                    pastelSet.classList.add("hidden"); 
                }
                if (acrylicSet.classList.contains("hidden") == false) {
                    acrylicSet.classList.add("hidden"); 
                }
                if (watercolorSet.classList.contains("hidden") == false) {
                    watercolorSet.classList.add("hidden"); 
                }
            }
            if (digitalBtn.classList.contains("link-hover") == false) {
                digitalBtn.classList.add("link-hover");
                if (pastelBtn.classList.contains("link-hover") == true) {
                    pastelBtn.classList.remove("link-hover");  
                }
                if (acrylicBtn.classList.contains("link-hover") == true) {
                    acrylicBtn.classList.remove("link-hover");  
                }
                if (watercolorBtn.classList.contains("link-hover") == true) {
                    watercolorBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Watercolor Event
        watercolorBtn.addEventListener("click",function(){
            if (watercolorSet.classList.contains("hidden") == true) {
                watercolorSet.classList.remove("hidden");
                if (pastelSet.classList.contains("hidden") == false) {
                    pastelSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
                if (acrylicSet.classList.contains("hidden") == false) {
                    acrylicSet.classList.add("hidden"); 
                }
            }
            if (watercolorBtn.classList.contains("link-hover") == false) {
                watercolorBtn.classList.add("link-hover");
                if (pastelBtn.classList.contains("link-hover") == true) {
                    pastelBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
                if (acrylicBtn.classList.contains("link-hover") == true) {
                    acrylicBtn.classList.remove("link-hover");  
                }
            }   
        })
    }
    portfolioBtnResponsive();

    //Commission Button
    const commissionBtn = function () {
        //Btn Group
        const sketchBtn = document.getElementById("sketch-btn");
        const paintingBtn = document.getElementById("painting-btn");
        const digitalBtn = document.getElementById("digital-btn");
        //Different Set
        const sketchSet = document.getElementById("sketch-commission");
        const paintingSet = document.getElementById("painting-commission");
        const digitalSet = document.getElementById("digital-commission");

        //Sketch Event
        sketchBtn.addEventListener("click",function(){
            if (sketchSet.classList.contains("hidden") == true) {
                sketchSet.classList.remove("hidden");
                if (paintingSet.classList.contains("hidden") == false) {
                    paintingSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
            }
            if (sketchBtn.classList.contains("link-hover") == false) {
                sketchBtn.classList.add("link-hover");
                if (paintingBtn.classList.contains("link-hover") == true) {
                    paintingBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Painting Event
        paintingBtn.addEventListener("click",function(){
            if (paintingSet.classList.contains("hidden") == true) {
                paintingSet.classList.remove("hidden");
                if (sketchSet.classList.contains("hidden") == false) {
                    sketchSet.classList.add("hidden"); 
                }
                if (digitalSet.classList.contains("hidden") == false) {
                    digitalSet.classList.add("hidden"); 
                }
            }
            if (paintingBtn.classList.contains("link-hover") == false) {
                paintingBtn.classList.add("link-hover");
                if (sketchBtn.classList.contains("link-hover") == true) {
                    sketchBtn.classList.remove("link-hover");  
                }
                if (digitalBtn.classList.contains("link-hover") == true) {
                    digitalBtn.classList.remove("link-hover");  
                }
            }   
        })

        //Digital Event
        digitalBtn.addEventListener("click",function(){
            if (digitalSet.classList.contains("hidden") == true) {
                digitalSet.classList.remove("hidden");
                if (paintingSet.classList.contains("hidden") == false) {
                    paintingSet.classList.add("hidden"); 
                }
                if (sketchSet.classList.contains("hidden") == false) {
                    sketchSet.classList.add("hidden"); 
                }
            }
            if (digitalBtn.classList.contains("link-hover") == false) {
                digitalBtn.classList.add("link-hover");
                if (paintingBtn.classList.contains("link-hover") == true) {
                    paintingBtn.classList.remove("link-hover");  
                }
                if (sketchBtn.classList.contains("link-hover") == true) {
                    sketchBtn.classList.remove("link-hover");  
                }
            }   
        })
    }
    commissionBtn();
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

  
  window.addEventListener("scroll", reveal);
    //NavBar scrolldown Opacity
    window.onscroll = function() {scrollFunction()};