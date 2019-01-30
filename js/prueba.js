
var colorSwitch = 0;

$(window).on('keyup', function(e) {
 
  if(e.keyCode === 13) {
   
    $('button').trigger('click');
   
  }
})

$('h1').on('click', function() {
 
  $('button').trigger("click");

});

function colorChanged() {
  var colorType;
  colorSwitch++;
  switch(colorSwitch) {
    case 0:
      colorType = 'red';
      break;
    case 1:
      colorType = 'blue';
      break;
    case 2:
      colorType = 'orange';
      break;
    case 3:
      colorType = 'white';
      break;
    case 4:
      colorType = 'violet';
      break;
    case 5:
      colorType = 'green';
      break;
    case 6:
      colorType = 'darkgray';
      break;
    case 7:
      colorType = 'yellow';
      colorSwitch = -1;
      break;
  }
    $('body').css('background-color', colorType);
}