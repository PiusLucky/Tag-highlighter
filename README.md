# Tag-highlighter
Highlighting tags with few lines of code...

![demo](https://github.com/PiusLucky/Tag-highlighter/blob/master/static/img/Tags%20Highlighter.png?raw=true)

```javascript
/*
  Road Map

  0. By default, the first button should be active 
     [with the class of "current" being applied]
  1. Click on the Button
  2. Once the button is in active click state, 
     add some badge styling class called "current"
  3. Once another button is clicked on, remove 
     the "current" class from all other buttons and add
     "current" to the new click
  4. Making it as efficient as possible

*/


/*
  Specs

  1. main object = $(`.stack-items_${main_index}`)
  2. sibling object = $(`.stack-items_${main_index}`).siblings()

*/

$(document).ready(function() {
  // This line is to get the first stack item and
  // add a class of "current" to that item
  $( ".stack-items" ).first().addClass("current")

  // Here, we loop over all the items that has the 
  // "stack-items" class 
  $( ".stack-items" ).each(function( main_index, element ) {
    /*
      We decided to add a new class with the index number to
      all the stack-items classes to give them like a unique ID
      With this, we already have class like stack-items_0 ... stack-items_nth
    */
    $(this).addClass(`stack-items_${main_index}`)

    // When you click on a ~specific button~, do some logic
    $(`.stack-items_${main_index}`).on("click", function(){
        // remove the initial current state on the first button
        // now nothing is current
        $( ".stack-items" ).first().removeClass("current")
        /*
          Now that we know our specific button, the quickest
          way to get the other buttons (excluding the specific one
          being click upon) is by using the "siblings" method
        */
        const siblings_object = $(`.stack-items_${main_index}`).siblings()

        /*
          Don't be overwelmed with my usage of .next() length etc. All these
          are possible when you console.log the siblings object
          click on the caret in your console and retrieve any
          DOM value you want
          ==================
          We are trying to target the last ".stack-items_nth" and
          we can do this by checking the length property inside of
          the next function. If it is zero, that means that item is
          the last in the object($(`.stack-items_${main_index}`)
        */
        if ($(`.stack-items_${main_index}`).next().length == 0){
          // if the last item in our main object is clicked on
          // add the class "current" to it
          $(element).addClass("current") 
         }else{
          // if the last item in our main object is not clicked on
          // remove the class "current" from it
          $(`.stack-items_${main_index}`).siblings().removeClass("current")
         }
        // we loop through each item in the siblings_object   
        // we can get the index and the child_element
        siblings_object.each(function( index, child_element ) {
         /* 
            main index is the index of what we clicked on [0 - 18]
            index is the index of the siblings object (excluding "1" index) [0-17]  
            console.log(main_index, index)
            Now we you console log the above, there is an "EQUALITY" and that's what
            we are gonna work on
            The EQUALITY tells us the current button being clicked on
          */
          if(main_index === index){ 
            // Now, we can add the "current" class to the 
            // specific element of target
            $(`.stack-items_${index}`).addClass("current")  
          }else{
            /*
              When the element is not clicked on, remove the "current" class
              There is one more thing to take care of, you remember the 
              siblings object negates one index and as such the last index 
              is no longer taken care of. Optimization demands that we correct
              this, hence, the little "next and length logic" at the top
            */
            $(`.stack-items_${index}`).removeClass("current")  
          }   
        });
    })
  })
});

```
