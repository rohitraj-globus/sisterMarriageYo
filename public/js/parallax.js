// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC79-UDXHHxEMUDPgOwki4RIDC6AGs58as",
  authDomain: "weddinginvitation-3d6e4.firebaseapp.com",
  databaseURL: "https://weddinginvitation-3d6e4.firebaseio.com",
  projectId: "weddinginvitation-3d6e4",
  storageBucket: "weddinginvitation-3d6e4.appspot.com",
  messagingSenderId: "15175306409",
  appId: "1:15175306409:web:355a7280bf874047632db8",
  measurementId: "G-1ZV5FLWVJD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/* snackbar & fireBase */
var invitationListRef = firebase.database().ref('WeddingInvitation');
function submitForm() {
  var name = $('#name').val();
  if(name){
    saveMessages();
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    $('#name').val(null); $('#contactNo').val(' '); $('#emailId').val(' '); $('#message').val(null); $( "#guest" ).val('1');
  }else{
    var x = document.getElementById("snackbarId");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
}

function saveMessages(){
  var name = $('#name').val();
  var contact = $('#contactNo').val();
  var email = $('#emailId').val();
  var message = $('#message').val();
  var guest = $( "#guest" ).val();
  var WedddingAtend = $( "#WedddingAtend" ).is(':checked');
  var ReceptionAtend = $( "#ReceptionAtend" ).is(':checked');
  //console.log(name+"/"+contact+"/"+email+"/"+message+"/"+guest);
    var nodeName = name+"-"+contact ;
    var newMessage = invitationListRef.child(nodeName);
    newMessage.set({
      name:name,
      contact:contact,
      email:email,
      message:message,
      guest:guest,
      attendHaldi:WedddingAtend,
      attendVivah:ReceptionAtend
    });
    $(".SendForm").addClass("hide");
}
/* snackbar & fireBase */

$(window).resize(function(){
  section1DivResize();
});

$(window).load(function(){
  section1DivResize();

  $(".heartBackground").animate({
    height: "150",
    width: "150",
    opacity: 1
  },'5000','linear');
});



$(window).scroll(function() {
  var heights = $(window).width()/2.1 - 49; 
  if( $(window).scrollTop() >= heights ){
    $("#rr_navigation").css({"top": 0 }) ;
    $("#rr_navigation").css({"position": 'fixed' }) ;
  }else{
    section1DivResize();
    $("#rr_navigation").css({"position": 'absolute' }) ;
  }
  parallax();
});

function section1DivResize() {
  //console.log($(window).width());
  var heights = $(window).width()/2.1 ; 
  //console.log(heights);
    $(".rr_staticParallax1").css({"height": heights }) ;
    $(".rr_staticParallax2").css({"height": heights }) ;
    //show hide mobile/desktop header
    if($(window).width()<675){
      $(".rr_menuContainer").removeClass("hide");
      $("#rr_navigation").addClass("hide");
      $(".familyMemberPic").attr("width","100");
      $(".familyMemberPic").attr("height","100");
    }else{
      $(".rr_menuContainer").addClass("hide");
      $("#rr_navigation").removeClass("hide");
      $("#rr_navigation").css({"top": (heights-50) }) ;
      $(".familyMemberPic").attr("width","150");
      $(".familyMemberPic").attr("height","150");
    }
}

function toggleMenu() {
  $(".menu").toggleClass("open");
  $(".rr_mobileMenu").toggleClass("hide");
}

/* Image Carousel */
var slideIndex = 1;
showSlides(slideIndex);

var interval = setInterval(function(){ 
  slideIndex++;
  showSlides(slideIndex);
}, 7000);  // Change image every 7 seconds

function plusSlides(n) {
  showSlides(slideIndex += n);
  //clearInterval(interval);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/* Image Carousel */

/*  digital clock */
var clock;
$(document).ready(function() {
  // Grab the current date
  var currentDate = new Date();

    // Set some date in the future. In this case, it's always Jan 1
    var futureDate  = new Date(2021, 3, 27);

    // Calculate the difference in seconds between the future and current date
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
});
/*  digital clock */

function parallax() {
var wScroll = $(window).scrollTop();
//console.log("wScroll-"+wScroll)
  $('.rr_parallax--bg').css('background-position', 'center ' + (wScroll*0.96)+'px');
}

function openCurtainEffect(family) {
  $(".cover-left").css("left","-50%");
  $(".cover-right").css("right","-50%");
  if(family==="bridesmaides"){
    $(".bridesmaidesShe").removeClass("hide");
    $(".groomsmenHe").addClass("hide");
  }else{
    $(".groomsmenHe").removeClass("hide");
    $(".bridesmaidesShe").addClass("hide");
  }
}

function closeFamily(family) {
  $(".cover-left").css("left","0px");
  $(".cover-right").css("right","0px");
}

setTimeout(function(){ window.scrollTo(0, 0); }, 700);
