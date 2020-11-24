$(document).ready(function(){
    $('.js-section').waypoints(function(direction){
        if(direction == "down"){
        $('nav').addClass('stricky');
        }else{
            $('nav').removeClass('stricky');
        }
    });

   
    
    $('js-wap-1').waypoints(function(direction){
      $('js-wap-1').addclass('animated fadeinup');
    },{
    offset:'50%'
  });
    
  /*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/
});
