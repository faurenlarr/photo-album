

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

  // albums.forEach(function(el) {
  //   el.coverPhoto.forEach(function(currVal) {
  //   var pictext = picTemplate(currVal);
  //     $('.column1').append(pictext)
  //
  //   });
  //
  // });

// var coverphoto = "<img src='" + albums.photos + "'>";
//
// $('.column1').html(coverphoto);










});
