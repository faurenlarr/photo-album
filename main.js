

$(document).ready(function(){


    $('.allcolumns').on('click','div',function(event) {
      console.log(this);
      console.log($(this).children('span').text());



    });

    $('.pic1').on('click','div', function(event){
        console.log($(this).children('span').text());

    });

// clickable albums

    $('.column1').click(function(event) {
      event.preventDefault();
       $('.allpicsview').removeClass("hidden");
       $('.allcolumns').addClass("hidden");
       $('.navbar').text("Alaska");
       $('.navbar').addClass('allpicsstyle');
       $(".column1").siblings().css("display","none");

       var threePicTemplate = _.template($('#threePicTmpl').html());
       // 1. grab three photos associated with column1
       var alaskaAlbum = albums.filter(function(el) {
         return el.albumName === 'Alaska';
       });
       // 2. loop through photos, compile template, and add.
       alaskaAlbum[0].photos.forEach(function(photo, idx) {
          var newpicstring = "";

          newpicstring = threePicTemplate(photo);
          $(('.pic')+(idx+1)).html(newpicstring);
       });

       //
     });

   $('.column2').click(function(event){
     event.preventDefault();
     $('.allpicsview').removeClass("hidden");
     $('.allcolumns').addClass("hidden");
     $('.navbar').text("Italy");
     $('.navbar').addClass('allpicsstyle');
     $(".column2").siblings().css("display","none");

     var threePicTemplate = _.template($('#threePicTmpl').html());
     // 1. grab three photos associated with column1
     var alaskaAlbum = albums.filter(function(el) {
       return el.albumName === 'Italy';
     });
     // 2. loop through photos, compile template, and add.
     alaskaAlbum[0].photos.forEach(function(photo, idx) {
        var newpicstring = "";

        newpicstring = threePicTemplate(photo);
        $(('.pic')+(idx+1)).html(newpicstring);
     });

   });

      $('.column3').click(function(event){
        event.preventDefault();
        $('.allpicsview').removeClass("hidden");
        $('.allcolumns').addClass("hidden");
        $('.navbar').text("New Zealand");
        $('.navbar').addClass('allpicsstyle');
        $(".column3").siblings().css("display","none");

        var threePicTemplate = _.template($('#threePicTmpl').html());
        // 1. grab three photos associated with column1
        var alaskaAlbum = albums.filter(function(el) {
          return el.albumName === 'NZ';
        });
        // 2. loop through photos, compile template, and add.
        alaskaAlbum[0].photos.forEach(function(photo, idx) {
           var newpicstring = "";

           newpicstring = threePicTemplate(photo);
           $(('.pic')+(idx+1)).html(newpicstring);
        });

      });

         $('.column1r2').click(function(event){
           event.preventDefault();
           $('.allpicsview').removeClass("hidden");
           $('.allcolumns').addClass("hidden");
           $('.navbar').text("New Zealand Pt.2");
           $('.navbar').addClass('allpicsstyle');
           $(".column1r2").siblings().css("display","none");

           var threePicTemplate = _.template($('#threePicTmpl').html());
           // 1. grab three photos associated with column1
           var alaskaAlbum = albums.filter(function(el) {
             return el.albumName === 'More NZ';
           });
           // 2. loop through photos, compile template, and add.
           alaskaAlbum[0].photos.forEach(function(photo, idx) {
              var newpicstring = "";

              newpicstring = threePicTemplate(photo);
              $(('.pic')+(idx+1)).html(newpicstring);
           });



         });


            $('.column2r2').click(function(event){
              event.preventDefault();
              $('.allpicsview').removeClass("hidden");
              $('.allcolumns').addClass("hidden");
              $('.navbar').text("Family");
              $('.navbar').addClass('allpicsstyle');
              $(".column2r2").siblings().css("display","none");


              var threePicTemplate = _.template($('#threePicTmpl').html());
              // 1. grab three photos associated with column1
              var alaskaAlbum = albums.filter(function(el) {
                return el.albumName === 'Family';
              });
              // 2. loop through photos, compile template, and add.
              alaskaAlbum[0].photos.forEach(function(photo, idx) {
                 var newpicstring = "";

                 newpicstring = threePicTemplate(photo);
                 $(('.pic')+(idx+1)).html(newpicstring);
              });

            });



               $('.column3r2').click(function(event){
                 event.preventDefault();
                 $('.allpicsview').removeClass("hidden");
                 $('.allcolumns').addClass("hidden");
                 $('.navbar').text("Friends");
                 $('.navbar').addClass('allpicsstyle');
                 $(".column3r2").siblings().css("display","none");


                 var threePicTemplate = _.template($('#threePicTmpl').html());
                 // 1. grab three photos associated with column1
                 var alaskaAlbum = albums.filter(function(el) {
                   return el.albumName === 'Friends';
                 });
                 // 2. loop through photos, compile template, and add.
                 alaskaAlbum[0].photos.forEach(function(photo, idx) {
                    var newpicstring = "";

                    newpicstring = threePicTemplate(photo);
                    $(('.pic')+(idx+1)).html(newpicstring);
                 });


               });

// ----------clickable sidebar
                 $('.ak').click(function(event){
                   event.preventDefault();
                   $('.allpicsview').removeClass("hidden");
                   $('.allcolumns').addClass("hidden");
                   $('.navbar').text("Alaska");
                  //  $('.sidebar2').addClass("hidden");
                   $('.singlepicview').addClass("hidden");


                   var threePicTemplate = _.template($('#threePicTmpl').html());
                   // 1. grab three photos associated with column1
                   var alaskaAlbum = albums.filter(function(el) {
                     return el.albumName === 'Alaska';
                   });
                   // 2. loop through photos, compile template, and add.
                   alaskaAlbum[0].photos.forEach(function(photo, idx) {
                      var newpicstring = "";

                      newpicstring = threePicTemplate(photo);
                      $(('.pic')+(idx+1)).html(newpicstring);
                   });
                  //  $('.singlepicview').addClass("hidden");

                  //  $('.navbar').addClass('allpicsstyle');
                  //  $(".ak").siblings().css("display","none");});
                });

                $('.it').click(function(event){
                  event.preventDefault();
                  $('.allpicsview').removeClass("hidden");
                  $('.allcolumns').addClass("hidden");
                  $('.navbar').text("Italy");
                  $('.sidebar2').addClass("hidden");
                  $('.singlepicview').addClass("hidden");



                  var threePicTemplate = _.template($('#threePicTmpl').html());
                  // 1. grab three photos associated with column1
                  var alaskaAlbum = albums.filter(function(el) {
                    return el.albumName === 'Italy';
                  });
                  // 2. loop through photos, compile template, and add.
                  alaskaAlbum[0].photos.forEach(function(photo, idx) {
                     var newpicstring = "";

                     newpicstring = threePicTemplate(photo);
                     $(('.pic')+(idx+1)).html(newpicstring);
                  });
                  // $('.onepic').addClass("hidden");

                 //  $('.navbar').addClass('allpicsstyle');
                 //  $(".ak").siblings().css("display","none");});
               });

               $('.nz').click(function(event){
                 event.preventDefault();
                 $('.allpicsview').removeClass("hidden");
                 $('.allcolumns').addClass("hidden");
                 $('.navbar').text("New Zealand");
                 $('.sidebar2').addClass("hidden");
                 $('.singlepicview').addClass("hidden");


                 var threePicTemplate = _.template($('#threePicTmpl').html());
                 // 1. grab three photos associated with column1
                 var alaskaAlbum = albums.filter(function(el) {
                   return el.albumName === 'NZ';
                 });
                 // 2. loop through photos, compile template, and add.
                 alaskaAlbum[0].photos.forEach(function(photo, idx) {
                    var newpicstring = "";

                    newpicstring = threePicTemplate(photo);
                    $(('.pic')+(idx+1)).html(newpicstring);
                 });
                //  $('.onepic').addClass("hidden");

                //  $('.navbar').addClass('allpicsstyle');
                //  $(".ak").siblings().css("display","none");});
              });

              $('.nz2').click(function(event){
                event.preventDefault();
                $('.allpicsview').removeClass("hidden");
                $('.allcolumns').addClass("hidden");
                $('.navbar').text("New Zealand Pt.2");
                $('.sidebar2').addClass("hidden");
                $('.singlepicview').addClass("hidden");


                var threePicTemplate = _.template($('#threePicTmpl').html());
                // 1. grab three photos associated with column1
                var alaskaAlbum = albums.filter(function(el) {
                  return el.albumName === 'More NZ';
                });
                // 2. loop through photos, compile template, and add.
                alaskaAlbum[0].photos.forEach(function(photo, idx) {
                   var newpicstring = "";

                   newpicstring = threePicTemplate(photo);
                   $(('.pic')+(idx+1)).html(newpicstring);
                });
                // $('.onepic').addClass("hidden");

               //  $('.navbar').addClass('allpicsstyle');
               //  $(".ak").siblings().css("display","none");});
             });

             $('.fam').click(function(event){
               event.preventDefault();
               $('.allpicsview').removeClass("hidden");
               $('.allcolumns').addClass("hidden");
               $('.navbar').text("Family");
               $('.sidebar2').addClass("hidden");
               $('.singlepicview').addClass("hidden");


               var threePicTemplate = _.template($('#threePicTmpl').html());
               // 1. grab three photos associated with column1
               var alaskaAlbum = albums.filter(function(el) {
                 return el.albumName === 'Family';
               });
               // 2. loop through photos, compile template, and add.
               alaskaAlbum[0].photos.forEach(function(photo, idx) {
                  var newpicstring = "";

                  newpicstring = threePicTemplate(photo);
                  $(('.pic')+(idx+1)).html(newpicstring);
               });

              //  $('.navbar').addClass('allpicsstyle');
              //  $(".ak").siblings().css("display","none");});
            });

            $('.frnds').click(function(event){
              event.preventDefault();
              $('.allpicsview').removeClass("hidden");
              $('.allcolumns').addClass("hidden");
              $('.navbar').text("Friends");
              $('.sidebar2').addClass("hidden");
              $('.singlepicview').addClass("hidden");


              var threePicTemplate = _.template($('#threePicTmpl').html());
              // 1. grab three photos associated with column1
              var alaskaAlbum = albums.filter(function(el) {
                return el.albumName === 'Friends';
              });
              // 2. loop through photos, compile template, and add.
              alaskaAlbum[0].photos.forEach(function(photo, idx) {
                 var newpicstring = "";

                 newpicstring = threePicTemplate(photo);
                 $(('.pic')+(idx+1)).html(newpicstring);
              });
              // $('.threepics').addClass("hidden");

             //  $('.navbar').addClass('allpicsstyle');
             //  $(".ak").siblings().css("display","none");});
           });

// ------singlepicview
        //
        // $('.home').click(function(event){
        //   event.preventDefault();
        //   $('.allpicsview').removeClass("hidden");
        //   // $('.lastsidebar').addClass("hidden");
        // });


      $('.pic1').click(function(event){
        event.preventDefault();
        $('.onepic').html($(this).html());
        $('.singlepicview').removeClass("hidden");
        $('.allpicsview').addClass("hidden");
        $('.sidebar2').removeClass("hidden");
        $('.navbar').text(" ");
        // $('.btn1').html($(this).html());
        //



        //
        // var onePicTemplate = _.template($('#onepicTmpl').html());
        // // 1. grab three photos associated with column1
        // var alaskaPhoto= albums.photos.filter(function(el) {
        //   return el.photoName === 'Boat';
        // });
        // // 2. loop through photos, compile template, and add.
        // alaskaPhoto[0].photos.forEach(function(photo, idx) {
        //    var anewpicstring = "";
        //
        //    anewpicstring = onepicTemplate(photo);
        //    $(('.onepic')+(idx+1)).html(anewpicstring);
        // });


      });

      $('.pic2').click(function(event){
        event.preventDefault();
        $('.onepic').html($(this).html());
        $('.singlepicview').removeClass("hidden");
        $('.allpicsview').addClass("hidden");
        $('.sidebar2').removeClass("hidden");
          $('.navbar').text(" ");
          // $('.btn2').html($(this).html());

      });

      $('.pic3').click(function(event){
        event.preventDefault();
        $('.onepic').html($(this).html());
        $('.singlepicview').removeClass("hidden");
        $('.allpicsview').addClass("hidden");
        $('.sidebar2').removeClass("hidden");
        $('.navbar').text(" ");
        // $('.btn3').html($(this).html());

      });

      // ----------

      $('.onepic').click(function(event){
        event.preventDefault();
        $('.allpicsview').removeClass("hidden");
        $('.singlepicview').addClass("hidden");


      });




      // $('.onepic').click(function(event){
      //   event.preventDefault();
      //   $('.allpicsview').removeClass("hidden");
      //   $('.singlepicview').addClass("hidden");
      //   $('.navbar').html('.it');
      //
      // });


// ----------------



var picTemplate = _.template($('#picTmpl').html());
console.log(picTemplate);
picstring = "";
_.each(albums, function(currVal, idx){
  picstring = picTemplate(currVal);
  if(idx < 3) {
    $('.column'+(idx+1)).html(picstring);
  } else {
    $('.column'+(idx + 1 - 3)+"r2").html(picstring);
  }
});
  //
  // albums.forEach(function(el) {
  //   console.log("SHOWME", el.coverPhoto);
  //   el.coverPhoto.forEach(function(currVal) {
  //   var pictext = picTemplate(currVal);
  //     $('.column1').append(pictext);
  //
  //   });
  //
  // });

// var coverphoto = "<img src='" + albums.photos + "'>";
//
// $('.column1').html(coverphoto);

// ------------------------------



// var threepicTemplate = _.template($('#threePicTmpl').html());
//
// threepicstring = "";
// _.each(albums, function(el, idx){
//   console.log(el);
//   threepicstring = threepicTemplate(el);
//   if(idx < 3) {
//     $('.threepics').html(threepicstring);
//   }
//
// });
// //
// albums.forEach(function(el) {
//   el.photos.forEach(function(currVal) {
//     currVal.imageUrl.forEach(function(meh){
//
//
//       var picPrint = threepicTemplate(meh);
//         $('.threepics').append(picPrint);
// });
//     });
//
//   });
//
//
//
// var imageUrl = "<img src='" + albums.photos.imageUrl + "'>";
//
// $('.threepics').html(imageUrl);
//
// //
// //
// //
//
//
//
// $('.column1').click(function(event){
//  event.preventDefault();
//  $('.singlepicview').removeClass('hidden');
//  $('.pic1').html("<img src='" + albums.photos.imageUrl[0] + "'>");
//  $('.pic2').html("<img src='" + albums.photos.imageUrl[1] + "'>");
//  $('.pic3').html("<img src='" + albums.photos.imageUrl[2] + "'>");
//
// });
//
}); //end of doc ready
