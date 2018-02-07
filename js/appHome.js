$profileSection = $('#profile');
$friendsSection = $('#friends');
$navBar = $('#principal-nav');
$logout = $('#logout');
$siteFooter = $('footer');
//buttons//
$profileBtn = $('#profile-btn');
$friendsBtn = $('#friends-btn');
$logoutBtn = $('#logout-btn');
//DOCUMENT//
$(document).ready(function(e){
  //Nav, Modals and Select//
  $('.button-collapse').sideNav();
  $('select').material_select(); //activates selections in modals
  $('.modal').modal();

//Activating button SHARE//
//hola
  $('#post-btn').prop('disabled', true);
     $('#new-post').keyup(function() {
        if($(this).val() != '') {
           $('#post-btn').prop('disabled', false);
        }
     });
//END activating button//

  $('#post-btn').click(function(){
    console.log("hola 1");
    //Template to make the publication card

      //template card
      var template =   '<div class="row">'+
      '<div class="container">'+
        '<div class="card-panel bkg-white">' +
          '<div class="card-title">' +
            '<small>' + '<span class="left">Posted by' +
              '<img class="user-pic" src="--srcUserPic--" />'+
              '<p id="posted-by" class="post-title text-gray">Dummy Name'+'</p>'+'</span>'+'</small>'+
              '<small>'+'<span class="right">"--Date--"' +
                '<p id="post-date" class="post-title text-gray">Dummy Date'+'</p>'+'</span>'+'</small>'+
              '</div>'+
              '<div class="card-content mt-40 center">'+
                '<div class="card-image">'+
                  '<img class="responsive-img" src="--srcImage--"/>'+
                '</div>'+
              '</div>'+
              '<div class="card-footer center">'+
                '<nav class="bkg-aqua1">'+
                  '<ul class="col s12">'+
                    '<li>'+'<a href="#" class="">'+'<i class="fa fa-heart">'+'</i>'+'</a>'+'</li>'+
                    '<li>'+'<a href="#" class="">'+'<i class="fa fa-comment">'+'</i>'+'</a>'+'</li>'+
                    '<li>'+'<a href="#" class="">'+'<i class="fa fa-send">'+'</i>'+'</a>'+'</li>'+
                    '<li>'+'<a href="#" class="">'+'<i class="fa fa-plus">'+'</i>'+'</a>'+'</li>'+
                    '<li>'+'<a href="#" class="">'+'<i class="fa fa-download">'+'</i>'+'</a>'+'</li>'+
                    '<li>'+'<a href="#" class="">'+'<i class="fa fa-trash-o">'+'</i>'+'</a>'+'</li>'+
                  '</ul>'+
                '</nav>'+
              '</div>'+
            '</div>';


      var option='';
      var letrasOne = $("#btnOne")
      var letrasOneImg = "../assets/imagesBtn/letrasOne.jpg";
      localStorage.setItem(letrasOneImg, letrasOne);
      var letrasTwo = "../assets/imagesBtn/letrasTwo.jpg";
      var letrasThree = "../assets/imagesBtn/letrasThree.jpg";
      var letrasFour = "../assets/imagesBtn/letrasFour.jpg";

      // $('#btnGoUp').click(function () {
      //   console.log("hola");
      // })


      // $("#btnGoUp").click(function() {
      //     console.log("hola1");
      //     if ($(".optionUserOne").click()) {
      //     var imgOne = '../assets/imagesBtn/letrasFive.jpg';
      //       option+=imgOne;
      //       console.log("hola");
      //     } else if ($(".optionUseTwo").click()) {
      //       var imgTwo = $("img[name='optionUserTwo']".val())
      //       localStorage.setItem(option);
      //     } else if ($(".optionUseThree").click()) {
      //       var imgThree = $("img[name='optionUserThree']".val())
      //       option+=imgThree;
      //     } else if ($(".optionUserFour").click()) {
      //       var imgFour = $("img[name='optionUserFour']".val())
      //       option+=imgFour;
      //     } else if ($(".optionUseFive").click()) {
      //       var imgFive = $("img[name='optionUserFive']".val())
      //       option+=imgFive;
      //     }else if ($(".optionUseTwo").click()) {
      //       var imgSix = $("img[name='optionUserSix']".val())
      //       option+=imgSix
      //     }
      // })

      var finalTemplate = '';
      // var valImage = $("input[name='file']").val();
      // console.log(valImage);
      //var newValImage = valImage.replace("C:\\fakepath\\", "")
      finalTemplate += template.replace("--srcImage--", option);
      //.replace("--srcUserPic--","../assets/images/logolab.jpg")


      $("#timeline").prepend(finalTemplate)
      });




});
  //Function to get the time with format hh:mm//
  // function getDate() {
  //    var time = new Date();
  //    var hours = time.getHours();
  //    var minutes = time.getMinutes();
  //    var meridian = '';
  //    if (minutes < 10) {
  //        minutes = (String(0) + String(minutes));
  //    }
  //    if (hours >= 13) {
  //        hours = hours - 12;
  //        meridian = 'PM';
  //    } else {
  //        meridian = 'AM';
  //    }
  //    return hours + ':' + minutes + ' ' + meridian;
  // }
