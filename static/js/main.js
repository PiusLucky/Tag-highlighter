'use strict';
$(document).ready(function() {
  $( ".stack-items" ).first().addClass("current")
  $( ".stack-items" ).each(function( main_index, element ) {
    $(this).addClass(`stack-items_${main_index}`)
    $(`.stack-items_${main_index}`).on("click", function(){
        $( ".stack-items" ).first().removeClass("current")
        const siblings_object = $(`.stack-items_${main_index}`).siblings()
        if ($(`.stack-items_${main_index}`).next().length == 0){
          $(element).addClass("current") 
         }else{
          $(`.stack-items_${main_index}`).siblings().removeClass("current")
         }
        siblings_object.each(( index, child_element )=>{
          if(main_index === index){ 
            $(`.stack-items_${index}`).addClass("current")  
          }else{
            $(`.stack-items_${index}`).removeClass("current")  
          }   
        });
    })
  })
});

