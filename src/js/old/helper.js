// [ scrollPositionProperties ] function
scrollPositionProperties = () => {

    // header selector
    let header = document.querySelector('#header');

    // mode button selector
    let mode = document.querySelector('.mode');
    // test mode button
    console.log(mode);

    // event [ window ] : scroll position listener
    window.addEventListener('scroll', ()=> {
        
        // position variable [ undefined ]
        let pos;

        // set a min section height for comparison
        let sectionHeight = '100vh';
        
        // if scroll position is less than section height
        if (window.scrollY < sectionHeight) {
            
            // get current position
            pos = window.scrollY;
            
            // assign header position prop to relative [ native placement ]
            header.style.position = 'relative'; 

            // assign nav position prop to top of header [ native placement ]
            nav.style.top = '0';
    
            // test 
            // console.log('[ window IF ] :' + pos + 'px');
        }
        else {

            // get current position
            pos = window.scrollY;

            // test
            // console.log(pos);
            
            // assign header position to fixed [ from relative ]
            menu.style.position = 'fixed';
            mode.style.position = 'fixed';

            // header props
            menu.style.top = '0';
            menu.style.left = '0';
            menu.style.background = 'var(--mode-background)';
            menu.style.zIndex = '4';

            mode.style.top = '0';
            mode.style.right = '0';
            mode.style.background = 'var(--mode-background)';
            mode.style.zIndex = '4';

            

            // nav component props
            nav.style.top = pos + 'px';
                        
            // test 
            // console.log('[ window Else ] :' + pos + 'px');
        }
    
    });

}

// init [ scrollPositionProperties ] function
scrollPositionProperties();