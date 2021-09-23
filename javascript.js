/* 자바스크립트 제이쿼리 */



// $(".innerbox").on('click', e => {
//     console.log("클릭됨");
//     $(span).slideToggle(1000);
// });


//  $("#svgBtn").on('click', e => {
//      console.log(e.target)
//     //  $("#aaa") 
//     //   .slideToggle()
//     //   .slideUp();
//   });




window.onload = function(){
  
  
    // $(svgBtn).on('click', function(e){
    //     console.log(e.target, this);
    //     const $target = $(this);
        
    //   //   // this용법6 : jquery each메소드 안의 callback함수에서 this는 이번턴에 전달된 요소를 가리킨다.
    //     $("p.content").each(function(i, p){
    //       console.log(i, p, this);
    
    //   //     // 현재 p.content가 이벤트발생객체 다음 p.content인 경우는 slideToggle, 그외는 slideUp처리한다.
    //   //     // jquery객체 비교메소드 is(selector | jquery객체)
    //       if($(this).is($target.next())){
    //         $(this).slideToggle();
    //       }
    //       else {
    //         $(this).slideUp();
    //       }
    //     });
    //   });



    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 1
            }
          }
        ]
      });
      jQuery(document).ready(function($){


        $( "#svgBtn1" ).click(function(e) {
            e.preventDefault();
                $(".svg").not(".svg1").slideUp();
                $( ".svg1" ).slideToggle( "slow", function() {
          });
         });
         
        $( "#svgBtn2" ).click(function(e) {
            e.preventDefault();
                $(".svg").not(".svg2").slideUp();
                $( ".svg2" ).slideToggle( "slow", function() {
          });
        });
        
        $( "#svgBtn3" ).click(function(e) {
            e.preventDefault();
                $(".svg").not(".svg3").slideUp();
                $( ".svg3" ).slideToggle( "slow", function() {
          });
         });
    
    
    });


    
  }
  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




  
   


    




