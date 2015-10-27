

$(document).ready(function(){



// });
// var albumPage = {

// clickable albums

$('.allcolumns').on('click','img', function() {
  console.log(this);
  var el = $(this);
  var alby = $(this).data('album-name');
  console.log('albumname', alby);
  var correctAlbum = _.filter(albums, function(el) {
    return alby === el.albumName;
  });
  console.log('albumobject', correctAlbum);
  var threePicTemplate = _.template($('#threePicTmpl').html());
  correctAlbum[0].photos.forEach(function(photo, idx) {
        var newpicstring = "";

        newpicstring = threePicTemplate(photo);
        $(('.pic')+(idx+1)).html(newpicstring);
     });

  $('.allpicsview').removeClass("hidden");
  $('.allcolumns').addClass("hidden");
  $('.navbar').text(alby);
   $('.navbar').addClass('allpicsstyle');
   $(el.parent()).siblings().css("display","none");
});
  //     $('.column1').click(function(event) {
  //     event.preventDefault();
  //      $('.allpicsview').removeClass("hidden");
  //      $('.allcolumns').addClass("hidden");
  //      $('.navbar').text("Alaska");
  //      $('.navbar').addClass('allpicsstyle');
  //      $(".column1").siblings().css("display","none");
  //
  //      var threePicTemplate = _.template($('#threePicTmpl').html());
  //      // 1. grab three photos associated with column1
  //      var alaskaAlbum = albums.filter(function(el) {
  //        return el.albumName === 'Alaska';
  //      });
  //      // 2. loop through photos, compile template, and add.
  //      alaskaAlbum[0].photos.forEach(function(photo, idx) {
  //         var newpicstring = "";
  //
  //         newpicstring = threePicTemplate(photo);
  //         $(('.pic')+(idx+1)).html(newpicstring);
  //      });
  //
  //      //
  //    });
  //
  //  $('.column2').click(function(event){
  //    event.preventDefault();
  //    $('.allpicsview').removeClass("hidden");
  //    $('.allcolumns').addClass("hidden");
  //    $('.navbar').text("Italy");
  //    $('.navbar').addClass('allpicsstyle');
  //    $(".column2").siblings().css("display","none");
  //
  //    var threePicTemplate = _.template($('#threePicTmpl').html());
  //    // 1. grab three photos associated with column1
  //    var alaskaAlbum = albums.filter(function(el) {
  //      return el.albumName === 'Italy';
  //    });
  //    // 2. loop through photos, compile template, and add.
  //    alaskaAlbum[0].photos.forEach(function(photo, idx) {
  //       var newpicstring = "";
  //
  //       newpicstring = threePicTemplate(photo);
  //       $(('.pic')+(idx+1)).html(newpicstring);
  //    });
  //
  //  });
  //
  //     $('.column3').click(function(event){
  //       event.preventDefault();
  //       $('.allpicsview').removeClass("hidden");
  //       $('.allcolumns').addClass("hidden");
  //       $('.navbar').text("New Zealand");
  //       $('.navbar').addClass('allpicsstyle');
  //       $(".column3").siblings().css("display","none");
  //
  //       var threePicTemplate = _.template($('#threePicTmpl').html());
  //       // 1. grab three photos associated with column1
  //       var alaskaAlbum = albums.filter(function(el) {
  //         return el.albumName === 'NZ';
  //       });
  //       // 2. loop through photos, compile template, and add.
  //       alaskaAlbum[0].photos.forEach(function(photo, idx) {
  //          var newpicstring = "";
  //
  //          newpicstring = threePicTemplate(photo);
  //          $(('.pic')+(idx+1)).html(newpicstring);
  //       });
  //
  //     });
  //
  //        $('.column1r2').click(function(event){
  //          event.preventDefault();
  //          $('.allpicsview').removeClass("hidden");
  //          $('.allcolumns').addClass("hidden");
  //          $('.navbar').text("New Zealand Pt.2");
  //          $('.navbar').addClass('allpicsstyle');
  //          $(".column1r2").siblings().css("display","none");
  //
  //          var threePicTemplate = _.template($('#threePicTmpl').html());
  //          // 1. grab three photos associated with column1
  //          var alaskaAlbum = albums.filter(function(el) {
  //            return el.albumName === 'More NZ';
  //          });
  //          // 2. loop through photos, compile template, and add.
  //          alaskaAlbum[0].photos.forEach(function(photo, idx) {
  //             var newpicstring = "";
  //
  //             newpicstring = threePicTemplate(photo);
  //             $(('.pic')+(idx+1)).html(newpicstring);
  //          });
  //
  //
  //
  //        });
  //
  //
  //           $('.column2r2').click(function(event){
  //             event.preventDefault();
  //             $('.allpicsview').removeClass("hidden");
  //             $('.allcolumns').addClass("hidden");
  //             $('.navbar').text("Family");
  //             $('.navbar').addClass('allpicsstyle');
  //             $(".column2r2").siblings().css("display","none");
  //
              //
              // var threePicTemplate = _.template($('#threePicTmpl').html());
              // // 1. grab three photos associated with column1
              // var alaskaAlbum = albums.filter(function(el) {
              //   return el.albumName === 'Family';
              // });
  //             // 2. loop through photos, compile template, and add.
  //             alaskaAlbum[0].photos.forEach(function(photo, idx) {
  //                var newpicstring = "";
  //
  //                newpicstring = threePicTemplate(photo);
  //                $(('.pic')+(idx+1)).html(newpicstring);
  //             });
  //
  //           });
  //
  //
  //
  //              $('.column3r2').click(function(event){
  //                event.preventDefault();
  //                $('.allpicsview').removeClass("hidden");
  //                $('.allcolumns').addClass("hidden");
  //                $('.navbar').text("Friends");
  //                $('.navbar').addClass('allpicsstyle');
  //                $(".column3r2").siblings().css("display","none");
  //
  //
  //                var threePicTemplate = _.template($('#threePicTmpl').html());
  //                // 1. grab three photos associated with column1
  //                var alaskaAlbum = albums.filter(function(el) {
  //                  return el.albumName === 'Friends';
  //                });
  //                // 2. loop through photos, compile template, and add.
  //                alaskaAlbum[0].photos.forEach(function(photo, idx) {
  //                   var newpicstring = "";
  //
  //                   newpicstring = threePicTemplate(photo);
  //                   $(('.pic')+(idx+1)).html(newpicstring);
  //                });
  //
  //
  //              });

// ----------clickable sidebar

// $('.sidebar').on('click','a', function() {
//    event.preventDefault();
//   console.log(this);
//   var el = $(this);
//   var alby = $(this).data('album-name');
//   console.log('albumname', alby);
//   var correctAlbum = _.filter(albums, function(el) {
//     return alby === el.albumName;
//   });
//   console.log('albumobject', correctAlbum);
//   var threePicTemplate = _.template($('#threePicTmpl').html());
//   correctAlbum[0].photos.forEach(function(photo, idx) {
//         var newpicstring = "";
//
//         newpicstring = threePicTemplate(photo);
//         $(('.pic')+(idx+1)).html(newpicstring);
//      });
//             //
//             //  $('.allpicsview').removeClass("hidden");
//             //  $('.allcolumns').addClass("hidden");
//             //  $('.navbar').text("Alaska");
//             // //  $('.sidebar2').addClass("hidden");
//             //  $('.singlepicview').addClass("hidden");
// });

// $('.sidebar').on('click','a', function() {
//   console.log(this);
//   var item = $(this);
//   var newthingy = $(this).data('album-name');
//   console.log('albumname', newthingy);
//   var correctThingy = _.filter(albums, function(item) {
//     return newthingy === el.albumName;
//   });
//   console.log('albumobject', correctAlbum);
//
//
// });
                //
// var clicked = '.' + $(this).attr('class');
$('.sidebar').on('click','a', function(event) {
  event.preventDefault();
  console.log(this);
  item = $(this);
  var newthingy = $(this).text();
  console.log('albumname', newthingy);
  var correctThingy = _.filter(albums, function(item) {
    return newthingy === item.albumName || newthingy === item.AlbumTitle;
  });
  console.log('albumobject', correctThingy);
  var threePicTemplate = _.template($('#threePicTmpl').html());
  correctThingy[0].photos.forEach(function(photo, idx) {
        var newpicstring = "";

        newpicstring = threePicTemplate(photo);
        $(('.pic')+(idx+1)).html(newpicstring);
     });
     $('.allpicsview').removeClass("hidden");
     $('.allcolumns').addClass("hidden");
     $('.navbar').text(newthingy);
    //  $('.sidebar2').addClass("hidden");
     $('.singlepicview').addClass("hidden");

});
$('.sidebar2').on('click','a', function(event) {
  event.preventDefault();
  console.log(this);
  item = $(this);
  var newthingy = $(this).text();
  console.log('albumname', newthingy);
  var correctThingy = _.filter(albums, function(item) {
    return newthingy === item.albumName || newthingy === item.AlbumTitle;
  });
  console.log('albumobject', correctThingy);
  var threePicTemplate = _.template($('#threePicTmpl').html());
  correctThingy[0].photos.forEach(function(photo, idx) {
        var newpicstring = "";

        newpicstring = threePicTemplate(photo);
        $(('.pic')+(idx+1)).html(newpicstring);
     });
     $('.allpicsview').removeClass("hidden");
     $('.allcolumns').addClass("hidden");
     $('.navbar').text(newthingy);
    //  $('.sidebar2').addClass("hidden");
     $('.singlepicview').addClass("hidden");

});



          //        $('.ak').click(function(event){
          //          event.preventDefault();
          //          $('.allpicsview').removeClass("hidden");
          //          $('.allcolumns').addClass("hidden");
          //          $('.navbar').text("Alaska");
          //         //  $('.sidebar2').addClass("hidden");
          //          $('.singlepicview').addClass("hidden");
           //
           //
          //          var threePicTemplate = _.template($('#threePicTmpl').html());
          //          var alaskaAlbum = albums.filter(function(el) {
          //            return el.albumName === 'Alaska';
          //          });
          //          alaskaAlbum[0].photos.forEach(function(photo, idx) {
          //             var newpicstring = "";
           //
          //             newpicstring = threePicTemplate(photo);
          //             $(('.pic')+(idx+1)).html(newpicstring);
          //          });
           //
          //       });
           //
          //       $('.it').click(function(event){
          //         event.preventDefault();
          //         $('.allpicsview').removeClass("hidden");
          //         $('.allcolumns').addClass("hidden");
          //         $('.navbar').text("Italy");
          //         $('.sidebar2').addClass("hidden");
          //         $('.singlepicview').addClass("hidden");
           //
           //
           //
          //         var threePicTemplate = _.template($('#threePicTmpl').html());
          //         // 1. grab three photos associated with column1
          //         var alaskaAlbum = albums.filter(function(el) {
          //           return el.albumName === 'Italy';
          //         });
          //         // 2. loop through photos, compile template, and add.
          //         alaskaAlbum[0].photos.forEach(function(photo, idx) {
          //            var newpicstring = "";
           //
          //            newpicstring = threePicTemplate(photo);
          //            $(('.pic')+(idx+1)).html(newpicstring);
          //         });
          //         // $('.onepic').addClass("hidden");
          //         //
          //         // $('.navbar').addClass('allpicsstyle');
          //         // $(".ak").siblings().css("display","none");});
          //      });
           //
          //      $('.nz').click(function(event){
          //        event.preventDefault();
          //        $('.allpicsview').removeClass("hidden");
          //        $('.allcolumns').addClass("hidden");
          //        $('.navbar').text("New Zealand");
          //        $('.sidebar2').addClass("hidden");
          //        $('.singlepicview').addClass("hidden");
           //
           //
          //        var threePicTemplate = _.template($('#threePicTmpl').html());
          //        // 1. grab three photos associated with column1
          //        var alaskaAlbum = albums.filter(function(el) {
          //          return el.albumName === 'NZ';
          //        });
          //        // 2. loop through photos, compile template, and add.
          //        alaskaAlbum[0].photos.forEach(function(photo, idx) {
          //           var newpicstring = "";
           //
          //           newpicstring = threePicTemplate(photo);
          //           $(('.pic')+(idx+1)).html(newpicstring);
          //        });
          //       //  $('.onepic').addClass("hidden");
           //
          //       //  $('.navbar').addClass('allpicsstyle');
          //       //  $(".ak").siblings().css("display","none");});
          //     });
           //
          //     $('.nz2').click(function(event){
          //       event.preventDefault();
          //       $('.allpicsview').removeClass("hidden");
          //       $('.allcolumns').addClass("hidden");
          //       $('.navbar').text("New Zealand Pt.2");
          //       $('.sidebar2').addClass("hidden");
          //       $('.singlepicview').addClass("hidden");
           //
           //
          //       var threePicTemplate = _.template($('#threePicTmpl').html());
          //       // 1. grab three photos associated with column1
          //       var alaskaAlbum = albums.filter(function(el) {
          //         return el.albumName === 'More NZ';
          //       });
          //       // 2. loop through photos, compile template, and add.
          //       alaskaAlbum[0].photos.forEach(function(photo, idx) {
          //          var newpicstring = "";
           //
          //          newpicstring = threePicTemplate(photo);
          //          $(('.pic')+(idx+1)).html(newpicstring);
          //       });
          //       // $('.onepic').addClass("hidden");
           //
          //      //  $('.navbar').addClass('allpicsstyle');
          //      //  $(".ak").siblings().css("display","none");});
          //    });
           //
          //    $('.fam').click(function(event){
          //      event.preventDefault();
          //      $('.allpicsview').removeClass("hidden");
          //      $('.allcolumns').addClass("hidden");
          //      $('.navbar').text("Family");
          //      $('.sidebar2').addClass("hidden");
          //      $('.singlepicview').addClass("hidden");
           //
           //
          //      var threePicTemplate = _.template($('#threePicTmpl').html());
          //      // 1. grab three photos associated with column1
          //      var alaskaAlbum = albums.filter(function(el) {
          //        return el.albumName === 'Family';
          //      });
          //      // 2. loop through photos, compile template, and add.
          //      alaskaAlbum[0].photos.forEach(function(photo, idx) {
          //         var newpicstring = "";
           //
          //         newpicstring = threePicTemplate(photo);
          //         $(('.pic')+(idx+1)).html(newpicstring);
          //      });
           //
          //     //  $('.navbar').addClass('allpicsstyle');
          //     //  $(".ak").siblings().css("display","none");});
          //   });
           //
          //   $('.frnds').click(function(event){
          //     event.preventDefault();
          //     $('.allpicsview').removeClass("hidden");
          //     $('.allcolumns').addClass("hidden");
          //     $('.navbar').text("Friends");
          //     $('.sidebar2').addClass("hidden");
          //     $('.singlepicview').addClass("hidden");
           //
           //
          //     var threePicTemplate = _.template($('#threePicTmpl').html());
          //     // 1. grab three photos associated with column1
          //     var alaskaAlbum = albums.filter(function(el) {
          //       return el.albumName === 'Friends';
          //     });
          //     // 2. loop through photos, compile template, and add.
          //     alaskaAlbum[0].photos.forEach(function(photo, idx) {
          //        var newpicstring = "";
           //
          //        newpicstring = threePicTemplate(photo);
          //        $(('.pic')+(idx+1)).html(newpicstring);
          //     });
          //     // $('.threepics').addClass("hidden");
           //
          //    //  $('.navbar').addClass('allpicsstyle');
          //    //  $(".ak").siblings().css("display","none");});
          //  });

// ------singlepicview
        //
        // $('.home').click(function(event){
        //   event.preventDefault();
        //   $('.allpicsview').removeClass("hidden");
        //   // $('.lastsidebar').addClass("hidden");
        // });

        $('.threepics').on('click','div', function(event) {
          event.preventDefault();
          $('.onepic').html($(this).html());
          $('.singlepicview').removeClass("hidden");
          $('.allpicsview').addClass("hidden");
          $('.sidebar2').removeClass("hidden");
          $('.navbar').text(" ");
        });


      // $('.pic1').click(function(event){
      //   event.preventDefault();
      //   $('.onepic').html($(this).html());
      //   $('.singlepicview').removeClass("hidden");
      //   $('.allpicsview').addClass("hidden");
      //   $('.sidebar2').removeClass("hidden");
      //   $('.navbar').text(" ");
      // });
      //
      // $('.pic2').click(function(event){
      //   event.preventDefault();
      //   $('.onepic').html($(this).html());
      //   $('.singlepicview').removeClass("hidden");
      //   $('.allpicsview').addClass("hidden");
      //   $('.sidebar2').removeClass("hidden");
      //     $('.navbar').text(" ");
      // });
      //
      // $('.pic3').click(function(event){
      //   event.preventDefault();
      //   $('.onepic').html($(this).html());
      //   $('.singlepicview').removeClass("hidden");
      //   $('.allpicsview').addClass("hidden");
      //   $('.sidebar2').removeClass("hidden");
      //   $('.navbar').text(" ");
      // });

      // ----------

      $('.onepic').click(function(event){
        event.preventDefault();
        $('.allpicsview').removeClass("hidden");
        $('.singlepicview').addClass("hidden");
      });





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

// ------------------------------




//

//
});
 //end of doc ready
