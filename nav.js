// This is setup with bootstrap 3
let menu = document.getElementsByClassName  ( 'nav' )[0];     
let menu_slider = document.getElementById ( 'nav_slide' );
// Values are set
if ( menu && menu_slider ) {
    let menu_width = menu.offsetWidth;
    // We only want the <li> </li> tags
    menu = menu.getElementsByTagName( 'li' );            
    if ( menu.length > 0 ) {
        var marginLeft = [];
        // Loop through nav children i.e li
        [].forEach.call( menu, ( el, index ) => {
            // Dynamic width/margin calculation for hr              
            var width = getPercentage(el.offsetWidth, menu_width);                              
            var tempMarginLeft = 0;
            // We don't want to modify first elements positioning
            if ( index != 0 )  {
                tempMarginLeft = getArraySum( marginLeft );
            }            
            // Set hover effects
            el.onmouseover = () => {                          
                menu_slider.style.width =  width + '%';                    
                menu_slider.style.marginLeft = tempMarginLeft + '%';
                // Execute once
                // el.onmouseover = null;
            }
            /* We store it in array because the later accumulated value 
               Is used for positioning */
            marginLeft.push( width );

        } );
    }
}

// Might make this dynamic for px, %, pt, em 
function getPercentage( min, max ) {
    return min / max * 100;
}

// Not using reduce, because IE8 doesn't supprt it
function getArraySum( arr ) {
    let sum = 0;
    [].forEach.call( arr, ( el, index ) => {
        sum += el;
    } );
    return sum;
}
