// page section selectors
let homepage = document.querySelector('#page');
let information = document.querySelector('#information');
let projects = document.querySelector('#projects');
let technical = document.querySelector('#technical');

// link homepage selector
let link_homepage = document.querySelector('#link_homepage');

// event [ link homepage ]
link_homepage.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    homepage.style.paddingTop = '12vh';
    // scroll the section into view
    homepage.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';
});

// link information selector
let link_information = document.querySelector('#link_information');

// event [ link information ]
link_information.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    information.style.paddingTop = '12vh';
    // scroll the section into view
    information.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';
});

// link projects selector
let link_projects = document.querySelector('#link_projects');
// event [ link projects ]
link_projects.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    projects.style.paddingTop = '12vh';
    // scroll the section into view
    projects.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';
});

// link technical selector
let link_technical = document.querySelector('#link_technical');

// event [ link technical ]
link_technical.addEventListener('click', ()=> {
    // add margin to top of section [ height of sticky nav ]
    technical.style.paddingTop = '12vh';
    // scroll the section into view
    technical.scrollIntoView();
    // assign nav to display propety none
    nav.style.display = 'none';

    // test
    console.log('scrolled to section [ technical ]');
});

// project link buttons
let plan_button = document.querySelector('#plan_button');
// let nifl_button = document.querySelector('#nifl_button');
// let rntl_button = document.querySelector('#rntl_button');
// let coff_button = document.querySelector('#coff_button');


// events [ project_button ] : open live project in a new tab
plan_button.addEventListener('click', ()=> {

    // open planets live website [ new tab ]
    window.open('https://decode-harris.github.io/planets/');

    // test
    console.log('pro planets : go to location');

    // open planets live website [ direct tab ]
    // window.location = 'https://decode-harris.github.io/planets/';

});
// nifl_button.addEventListener('click', ()=> {
    
//     // test
//     console.log('pro niflheim : go to location');

// });
// rntl_button.addEventListener('click', ()=> {

//     // test
//     console.log('pro rntlpay : go to location');

// });
// coff_button.addEventListener('click', ()=> {

//     // test
//     console.log('pro coffee : go to location');

// });