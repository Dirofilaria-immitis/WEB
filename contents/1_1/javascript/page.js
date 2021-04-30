
$(document).ready(function () {


$(document).on('click', '.btn', function (event) {
  history.pushState(null, null, event.target.href);
  $('article').load(event.target.href+' article>.content');
  event.preventDefault();
});

$(window).on('popstate', function(event){
  $('article').load(location.href+' article>.content');
})

var audio = new Audio('contents/1_1/contents/chopin.mp3');
  $(document).on('click', '#play', function(event){
    audio.play();
  });

  $(document).on('click', '#pause', function(event){
    audio.pause();
  });


});
