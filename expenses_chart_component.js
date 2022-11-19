$(document).ready(function(){
  $('.data').mouseover(function(){
    $(this).css({
      'opacity': '50%',
      'cursor': 'pointer'
    });
    let height = $(this).css('height');
    let amount = Math.ceil((parseFloat(height) / 3) * 100)/ 100;
    if(!$(this).prev('.amount').text()){
      $(this).prev('.amount').text(`$${amount}`);
    }
    $(this).prev('.amount').css('visibility', 'visible');
  });
  $('.data').mouseout(function(){
    $(this).css('opacity', '100%');
    $(this).prev('.amount').css('visibility', 'hidden');
  });
});