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

      var finalTemplate = '';
      var valImage = $("input[name='file']").val();
      var newValImage = valImage.replace("C:\\fakepath\\", "")
      finalTemplate += template.replace("--srcImage--", newValImage)
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
