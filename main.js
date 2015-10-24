

$(document).ready(function(){


  // $('.column1').click(function(event){
  //   event.preventDefault();
  //   $('.column1').css('display', 'block');
  //   $('.column2').css('display', 'none');
  //   $('.column3').css('display','none');
  //   $('.column1r2').css('display', 'none');
  //   $('.column2r2').css('display', 'none');
  //   $('.column3r2').css('display','none');});

// diff views
// var showPhoto = function () {
//   $(".album").addClass("hidden");
//   $(".photoDetails").removeClass("hidden");
//   $(".photoDetails").append(photoText);
//   $("aside").addClass("hidden");
// };

// clickable albums

    $('.column1').click(function(event){
      event.preventDefault();
       $('.allpicsview').removeClass("hidden");
       $('.allcolumns').addClass("hidden");
       $('.navbar').text("Alaska");
       $('.navbar').addClass('allpicsstyle');
       $(".column1").siblings().css("display","none");});

   $('.column2').click(function(event){
     event.preventDefault();
     $('.allpicsview').removeClass("hidden");
     $('.allcolumns').addClass("hidden");
     $('.navbar').text("Italy");
     $('.navbar').addClass('allpicsstyle');
     $(".column2").siblings().css("display","none");});

      $('.column3').click(function(event){
        event.preventDefault();
        $('.allpicsview').removeClass("hidden");
        $('.allcolumns').addClass("hidden");
        $('.navbar').text("New Zealand");
        $('.navbar').addClass('allpicsstyle');
        $(".column3").siblings().css("display","none");});

         $('.column1r2').click(function(event){
           event.preventDefault();
           $('.allpicsview').removeClass("hidden");
           $('.allcolumns').addClass("hidden");
           $('.navbar').text("New Zealand Pt.2");
           $('.navbar').addClass('allpicsstyle');
           $(".column1r2").siblings().css("display","none");});


            $('.column2r2').click(function(event){
              event.preventDefault();
              $('.allpicsview').removeClass("hidden");
              $('.allcolumns').addClass("hidden");
              $('.navbar').text("Family");
              $('.navbar').addClass('allpicsstyle');
              $(".column2r2").siblings().css("display","none");});



               $('.column3r2').click(function(event){
                 event.preventDefault();
                 $('.allpicsview').removeClass("hidden");
                 $('.allcolumns').addClass("hidden");
                 $('.navbar').text("2014");
                 $('.navbar').addClass('allpicsstyle');
                 $(".column3r2").siblings().css("display","none");});

// ----------clickable sidebar
                 $('.ak').click(function(event){
                   event.preventDefault();
                   $('.allpicsview').removeClass("hidden");
                   $('.allcolumns').addClass("hidden");
                   $('.navbar').text("Alaska");
                  //  $('.navbar').addClass('allpicsstyle');
                  //  $(".ak").siblings().css("display","none");});
                });

                $('.it').click(function(event){
                  event.preventDefault();
                  $('.allpicsview').removeClass("hidden");
                  $('.allcolumns').addClass("hidden");
                  $('.navbar').text("Italy");
                 //  $('.navbar').addClass('allpicsstyle');
                 //  $(".ak").siblings().css("display","none");});
               });

               $('.nz').click(function(event){
                 event.preventDefault();
                 $('.allpicsview').removeClass("hidden");
                 $('.allcolumns').addClass("hidden");
                 $('.navbar').text("New Zealand");
                //  $('.navbar').addClass('allpicsstyle');
                //  $(".ak").siblings().css("display","none");});
              });

              $('.nz2').click(function(event){
                event.preventDefault();
                $('.allpicsview').removeClass("hidden");
                $('.allcolumns').addClass("hidden");
                $('.navbar').text("New Zealand Pt.2");
               //  $('.navbar').addClass('allpicsstyle');
               //  $(".ak").siblings().css("display","none");});
             });

             $('.fam').click(function(event){
               event.preventDefault();
               $('.allpicsview').removeClass("hidden");
               $('.allcolumns').addClass("hidden");
               $('.navbar').text("Family");
              //  $('.navbar').addClass('allpicsstyle');
              //  $(".ak").siblings().css("display","none");});
            });

            $('.frnds').click(function(event){
              event.preventDefault();
              $('.allpicsview').removeClass("hidden");
              $('.allcolumns').addClass("hidden");
              $('.navbar').text("Friends");
             //  $('.navbar').addClass('allpicsstyle');
             //  $(".ak").siblings().css("display","none");});
           });

// ------singlepicview

      $('.pic1').click(function(event){
        event.preventDefault();
        $('.singlepicview').removeClass("hidden");
        $('.allpicsview').addClass("hidden");
        $('.navbar').text(" ");
        $('.lastsidebar').text("*Home*");


      });

      $('.pic2').click(function(event){
        event.preventDefault();
        $('.singlepicview').removeClass("hidden");
        $('.allpicsview').addClass("hidden");
          $('.navbar').text(" ");
      });

      $('.pic3').click(function(event){
        event.preventDefault();
        $('.singlepicview').removeClass("hidden");
        $('.allpicsview').addClass("hidden");
        $('.navbar').text(" ");
      });



var picTemplate = _.template($('#picTmpl').html());


picstring = "";
_.each(albums, function(currVal, idx){
  console.log(currVal);
  picstring = picTemplate(currVal);
  if(idx < 3) {
    $('.column'+(idx+1)).html(picstring);
  } else {
    console.log('.column'+(idx+1 - 3)+"r2");
    $('.column'+(idx + 1 - 3)+"r2").html(picstring);
  }
});

  albums.forEach(function(el) {
    el.coverPhoto.forEach(function(currVal) {
    var pictext = picTemplate(currVal);
      $('.column1').append(pictext);

    });

  });

var coverphoto = "<img src='" + albums.photos + "'>";

$('.column1').html(coverphoto);

// ------------------------------



var threepicTemplate = _.template($('#threePicTmpl').html());

threepicstring = "";
_.each(albums, function(el, idx){
  console.log(el);
  threepicstring = threepicTemplate(el);
  if(idx < 3) {
    $('.threepics').html(threepicstring);
  }
  // else {
  //   console.log('.threepics'+(idx+1 - 3)+"r2");
  //   $('.column'+(idx + 1 - 3)+"r2").html(picstring);
  // }
});
//
albums.forEach(function(el) {
  el.photos.forEach(function(currVal) {
    currVal.imageUrl.forEach(function(meh){


      var picPrint = threepicTemplate(meh);
        $('.threepics').append(picPrint);
});
    });

  });



var imageUrl = "<img src='" + albums.photos.imageUrl + "'>";

$('.threepics').html(imageUrl);

//
//
//
//
//
//


}); //end of doc ready
