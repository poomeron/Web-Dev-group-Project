let headerElement = document.querySelector('#form_title');
let ulElement = document.querySelector('.nav-bar');//before nav-bar
//ulElement.setAttribute('class', 'Hidden-nav');//
let formJsonFile = 'data.json';

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(formJsonFile).then(response => response.json())
    .then(responseData=>{console.log(responseData);
        for (item of responseData){
            
            //loads the title and Heading of the Form (Newsletter) Page 
            const page_title = document.createElement('title');
            page_title.textContent = item.heading.title;
            headerElement.appendChild(page_title);

            const page_heading = document.createElement('h1');
            page_heading.textContent = item.heading.header;
            headerElement.appendChild(page_heading);

            //adding search bar:
            const searchContainer = document.createElement('div');
            searchContainer.setAttribute('class', 'search');

            const searchBar = document.createElement('input');
            searchBar.type = 'search';
            searchBar.placeholder= item.heading.search_text;
            searchContainer.appendChild(searchBar);

            //search button:
            const searchButton = document.createElement('button');
            searchButton.innerHTML= '<i class="fa fa-search"></i>';

            searchContainer.appendChild(searchButton);

            headerElement.appendChild(searchContainer);
            
            // makes the buttons for nav and search when screen is a certain size
            const mobileIcon = document.createElement('div');
            mobileIcon.setAttribute('class', 'mobileIcon');

            const searchBtn = document.createElement('button');
            searchBtn.setAttribute('class', 'iconBtn');
            searchBtn.setAttribute('id', 'search-header');
            searchBtn.innerHTML= '<i class="fa fa-search"></i>';

            const menuBtn = document.createElement('button');
            menuBtn.setAttribute('class', 'iconBtn');
            menuBtn.setAttribute('id', 'menu-header');
            menuBtn.innerHTML= '<i class= "fa fa-bars"></i>';

            mobileIcon.appendChild(searchBtn);
            mobileIcon.appendChild(menuBtn);
            headerElement.appendChild(mobileIcon);


            //loads the nav bar:

            //Home LINK
            const home = document.createElement('li');
            const home_a = document.createElement('a');
            home_a.textContent = item.ul.home;
            home_a.href= item.links.l_home;
            ulElement.appendChild(home);
            home.appendChild(home_a);
            home_a.setAttribute('class', 'nav-link')
            
            
            
            
            //About link
            const about = document.createElement('li');
            const about_a = document.createElement('a');
            about_a.textContent = item.ul.about;
            about_a.href = item.links.l_about;
            ulElement.appendChild(about);
            about.appendChild(about_a);
            about_a.setAttribute('class', 'nav-link');
            
    
            //creates a div for the 3 goals to sit in:
            const goals = document.createElement('li');
            const goals_a = document.createElement('a');
            goals_a.innerHTML = item.ul.goals_up;
            goals_a.setAttribute('class', 'nav-link dropdown-toggle');
            goals_a.setAttribute('aria-haspopup', 'true');
            goals_a.setAttribute('aria-expanded', 'false');
            goals.appendChild(goals_a);
            ulElement.appendChild(goals);

            //dropdown menu
            const goalUl = document.createElement('ul');
            goalUl.setAttribute('class', 'menu');
            goalUl.setAttribute('role', 'menu');
            goals.appendChild(goalUl);


            //all the goal nav links : 
            const goal_7= document.createElement('li');
            const goal_7_a= document.createElement('a');
            goal_7_a.textContent = item.ul.goal_7;
            goal_7_a.href = item.links.l_goal7;
            goal_7_a.setAttribute('class', 'menu_item')
            goal_7_a.setAttribute('role', 'menu_item');
            goalUl.appendChild(goal_7);
            goal_7.appendChild(goal_7_a);
            //goal 13 
            const goal_13= document.createElement('li');
            const goal_13_a= document.createElement('a');
            goal_13_a.textContent = item.ul.goal_13;
            goal_13_a.href = item.links.l_goal13;
            goal_13_a.setAttribute('class', 'menu_item');
            goal_13_a.setAttribute('role', 'menu_item');
            goalUl.appendChild(goal_13);
            goal_13.appendChild(goal_13_a);
            //goal 15
            const goal_15= document.createElement('li');
            const goal_15_a= document.createElement('a');
            goal_15_a.textContent = item.ul.goal_15;
            goal_15_a.href = item.links.l_goal15;
            goal_15_a.setAttribute('class', 'menu_item');
            goal_15_a.setAttribute('role', 'menu_item');
            goalUl.appendChild(goal_15);
            goal_15.appendChild(goal_15_a);

            

            //lislents for the use to click on the gosl item and then changes some values to make the drop-down appear
            goals_a.addEventListener('click', (e)=>{
                e.preventDefault();
                const expanded = goals_a.getAttribute('aria-expanded') === 'true';
                goals_a .setAttribute('aria-expanded', String(!expanded));
                goals_a.innerHTML= expanded? item.ul.goals_up: item.ul.goals_down;
                });
            //checks if mouse is over the goals tab and changes the arror from up to down and vice versa:
            goals_a.addEventListener('mouseenter', (e)=>{
                e.preventDefault();
                goals_a.innerHTML = item.ul.goals_down;
            })
            goals_a.addEventListener('mouseleave', (e)=>{
                e.preventDefault();
                goals_a.innerHTML = item.ul.goals_up;
            })
            goalUl.addEventListener('mouseenter', (e)=>{
                e.preventDefault();
                goals_a.innerHTML = item.ul.goals_down;
            })
            goalUl.addEventListener('mouseleave', (e)=>{
                e.preventDefault();
                goals_a.innerHTML = item.ul.goals_up;
            })

            //newsletter link (form)
            const newsletter = document.createElement('li');
            const newsletter_a = document.createElement('a');
            newsletter_a.textContent = item.ul.newsletter;
            newsletter_a.href= item.links.l_newsletter;
            ulElement.appendChild(newsletter);
            newsletter.appendChild(newsletter_a);
            newsletter_a.setAttribute('class', 'nav-link')


            const team = document.createElement('li');
            const team_a = document.createElement('a');
            team_a.textContent = item.ul.team;
            team_a.href = item.links.l_team;
            ulElement.appendChild(team);
            team.appendChild(team_a);
            team_a.setAttribute('class', 'nav-link')

            //when screen is small, opens nav bar when pressed
            menuBtn.addEventListener('click', (e)=>{
                e.preventDefault();
                ulElement.classList.toggle('open');
            })
            searchBtn.addEventListener('click', (e)=>{
                e.preventDefault();
                searchContainer.classList.toggle('open');
            })

            //adds the footer content at the bottom of the page 
            const footer = document.querySelector('footer');
            const foot = document.createElement('p');
            foot.textContent = item.footer.footer_text;
            footer.append(foot);

           //checks if the home pagen link is active
           //#####JAVA SCRIPT FOR INDEX PAGE HERE:!!!!!!!!!!
            if (
                window.location.pathname === "/" ||
                window.location.pathname === "/" + item.links.l_home
            ) {
                home_a.setAttribute("id", "active");

                const homeSection = document.getElementById("home-content");

                if (homeSection && item.home) {
                    homeSection.innerHTML = `
                        <article class="services">
                            <h3>${item.home.heading}</h3>
                            <p>${item.home.para1}</p>
                            <p>${item.home.para2}</p>
                            <p>${item.home.para3}</p>
                        </article>
                    `;
                }
            }

            //checks if the about page link is active
            //######JAVA SCRIPT FOR ABOUT PAGE HERE !!!!!!:
            if (window.location.pathname==="/"+ item.links.l_about){
                about_a.setAttribute('id', 'active');
                //creates the main element
                const mainAbout = document.querySelector('.mainAbout')

                //creates page title:
                const h2About = document.querySelector('#about-page-title');
                h2About.textContent = item.about.small_heading;
     

                //creates the page paragraph:
                const h3About = document.querySelector('#about-para')


                const h3AboutPara1 = document.createElement('p');
                h3AboutPara1.textContent = item.about.para1;
                h3About.appendChild(h3AboutPara1);

                const h3AboutPara2 = document.createElement('p');
                h3AboutPara2.textContent = item.about.para2;
                h3About.appendChild(h3AboutPara2);

                const h3AboutPara3 = document.createElement('p');
                h3AboutPara3.textContent = item.about.para3;
                h3About.appendChild(h3AboutPara3);

                const h3AboutPara4 = document.createElement('p');
                h3AboutPara4.textContent = item.about.para4;
                h3About.appendChild(h3AboutPara4);

                const h3AboutPara5 = document.createElement('p');
                h3AboutPara5.textContent = item.about.para5;
                h3About.appendChild(h3AboutPara5);
                
                const imgG7 = document.createElement('img');
                imgG7.setAttribute('id', 'about-img');
                imgG7.src = item.about.goal_7;
                imgG7.alt = item.about.alt_7;
                h3About.appendChild(imgG7);

                const imgG13 = document.createElement('img');
                imgG13.setAttribute('id', 'about-img');
                imgG13.src = item.about.goal_13;
                imgG13.alt = item.about.alt_13;
                h3About.appendChild(imgG13);
            

                const imgG15 = document.createElement('img');
                imgG15.setAttribute('id', 'about-img');
                imgG15.src = item.about.goal_15;
                imgG15.alt = item.about.alt_15;
                h3About.appendChild(imgG15);
            
            };



            //checks if the goal page is active:
            //######JAVA SCRIPT FOR THE GOAL PAGES HERE !!!!!!:
            if (window.location.pathname ==="/"+ item.links.l_goal7 || window.location.pathname ==="/"+ item.links.l_goal13 || window.location.pathname ==="/"+ item.links.l_goal15){
                goals_a.setAttribute('id', 'active')
                if (document.querySelector("#goal_7")) {
                        // Grab the first object inside goal_7
                        const goal_7 = item.goals.goal_7[0];

                        // Title
                        const page_title = document.createElement('title');
                        page_title.textContent = goal_7.heading[0].title;
                        headerElement.appendChild(page_title);

                        // Image
                        const imageElement = document.createElement('img');
                        imageElement.setAttribute("id", "goal");
                        imageElement.src = goal_7.imageURL;
                        imageElement.alt = goal_7.alt;
                        topSection.appendChild(imageElement);

                        // Aims
                        const paraElementTop = document.createElement('p');
                        paraElementTop.setAttribute("id", "description");
                        paraElementTop.textContent = goal_7.aims;
                        topSection.appendChild(paraElementTop);

                        // About
                        const firstParaElementMiddle = document.createElement('p');
                        firstParaElementMiddle.setAttribute("id", "about1");
                        firstParaElementMiddle.textContent = goal_7.about1;
                        about_goal.appendChild(firstParaElementMiddle);
                        const secondParaElementMiddle = document.createElement('p');
                        secondParaElementMiddle.setAttribute("id", "about2");
                        secondParaElementMiddle.textContent = goal_7.about2;
                        about_goal.appendChild(secondParaElementMiddle);
                        const thirdParaElementMiddle = document.createElement('p');
                        thirdParaElementMiddle.setAttribute("id", "about3");
                        thirdParaElementMiddle.textContent = goal_7.about3;
                        about_goal.appendChild(thirdParaElementMiddle);

                        // Targets list
                        const targetElement = document.createElement('ul');
                        targetElement.setAttribute("id", "targets");
                        targetElement.textContent = goal_7.targets;
                        targetElement.classList.add("services");

                        const firstTarget = document.createElement('li');
                        firstTarget.setAttribute("id", "goal_lists");
                        firstTarget.textContent = goal_7.target1;
                        targetElement.appendChild(firstTarget);

                        const secondTarget = document.createElement('li');
                        secondTarget.setAttribute("id", "goal_lists");
                        secondTarget.textContent = goal_7.target2;
                        targetElement.appendChild(secondTarget);

                        const thirdTarget = document.createElement('li');
                        thirdTarget.setAttribute("id", "goal_lists");
                        thirdTarget.textContent = goal_7.target3;
                        targetElement.appendChild(thirdTarget);

                        const fourthTarget = document.createElement('li');
                        fourthTarget.setAttribute("id", "goal_lists");
                        fourthTarget.textContent = goal_7.target4;
                        targetElement.appendChild(fourthTarget);

                        const fithTarget = document.createElement('li');
                        fithTarget.setAttribute("id", "goal_lists");
                        fithTarget.textContent = goal_7.target5;
                        targetElement.appendChild(fithTarget);

                        bottomSection.appendChild(targetElement);

                        // Things to do list
                        const helpElement = document.createElement('ul');
                        helpElement.textContent = goal_7.things;
                        helpElement.setAttribute("id", "help");
                        helpElement.classList.add("services");

                        const firstHelp = document.createElement('li');
                        firstHelp.setAttribute("id", "goal_lists");
                        firstHelp.textContent = goal_7.thing1;
                        helpElement.appendChild(firstHelp);

                        const secondHelp = document.createElement('li');
                        secondHelp.setAttribute("id", "goal_lists");
                        secondHelp.textContent = goal_7.thing2;
                        helpElement.appendChild(secondHelp);

                        const thirdHelp = document.createElement('li');
                        thirdHelp.setAttribute("id", "goal_lists");
                        thirdHelp.textContent = goal_7.thing3;
                        helpElement.appendChild(thirdHelp);

                        const fourthHelp = document.createElement('li');
                        fourthHelp.setAttribute("id", "goal_lists");
                        fourthHelp.textContent = goal_7.thing4;
                        helpElement.appendChild(fourthHelp);

                        const fithHelp = document.createElement('li');
                        fithHelp.setAttribute("id", "goal_lists");
                        fithHelp.textContent = goal_7.thing5;
                        helpElement.appendChild(fithHelp);

                        const sixthHelp = document.createElement('li');
                        sixthHelp.setAttribute("id", "goal_lists");
                        sixthHelp.textContent = goal_7.thing6;
                        helpElement.appendChild(sixthHelp);

                        bottomSection.appendChild(helpElement);
                    }


                    //checks for the id goal_13 before loading content in the json file
                    if (document.querySelector("#goal_13")) {
                        // Grab the first object inside goal_13
                        const goal_13 = item.goals.goal_13[0];

                        // Title
                        const page_title = document.createElement('title');
                        page_title.textContent = goal_13.heading[0].title;
                        headerElement.appendChild(page_title);

                        // Image
                        const imageElement = document.createElement('img');
                        imageElement.setAttribute("id", "goal");
                        imageElement.src = goal_13.imageURL;
                        imageElement.alt = goal_13.alt;
                        topSection.appendChild(imageElement);

                        // Aims
                        const paraElementTop = document.createElement('p');
                        paraElementTop.setAttribute("id", "description");
                        paraElementTop.textContent = goal_13.aims;
                        topSection.appendChild(paraElementTop);

                        // About
                        const firstParaElementMiddle = document.createElement('p');
                        firstParaElementMiddle.setAttribute("id", "about1");
                        firstParaElementMiddle.textContent = goal_13.about1;
                        about_goal.appendChild(firstParaElementMiddle);
                        const secondParaElementMiddle = document.createElement('p');
                        secondParaElementMiddle.setAttribute("id", "about2");
                        secondParaElementMiddle.textContent = goal_13.about2;
                        about_goal.appendChild(secondParaElementMiddle);
                        const thirdParaElementMiddle = document.createElement('p');
                        thirdParaElementMiddle.setAttribute("id", "about3");
                        thirdParaElementMiddle.textContent = goal_13.about3;
                        about_goal.appendChild(thirdParaElementMiddle);

                        // Targets list
                        const targetElement = document.createElement('ul');
                        targetElement.textContent = goal_13.targets;
                        targetElement.setAttribute("id", "targets");
                        targetElement.classList.add("services");

                        const firstTarget = document.createElement('li');
                        firstTarget.setAttribute("id", "goal_lists");
                        firstTarget.textContent = goal_13.target1;
                        targetElement.appendChild(firstTarget);

                        const secondTarget = document.createElement('li');
                        secondTarget.setAttribute("id", "goal_lists");
                        secondTarget.textContent = goal_13.target2;
                        targetElement.appendChild(secondTarget);

                        const thirdTarget = document.createElement('li');
                        thirdTarget.setAttribute("id", "goal_lists");
                        thirdTarget.textContent = goal_13.target3;
                        targetElement.appendChild(thirdTarget);

                        const fourthTarget = document.createElement('li');
                        fourthTarget.setAttribute("id", "goal_lists");
                        fourthTarget.textContent = goal_13.target4;
                        targetElement.appendChild(fourthTarget);

                        const fithTarget = document.createElement('li');
                        fithTarget.setAttribute("id", "goal_lists");
                        fithTarget.textContent = goal_13.target5;
                        targetElement.appendChild(fithTarget);

                        bottomSection.appendChild(targetElement);

                        // Things to do list
                        const helpElement = document.createElement('ul');
                        helpElement.textContent = goal_13.things;
                        helpElement.setAttribute("id", "help");
                        helpElement.classList.add("services");

                        const firstHelp = document.createElement('li');
                        firstHelp.setAttribute("id", "goal_lists");
                        firstHelp.textContent = goal_13.thing1;
                        helpElement.appendChild(firstHelp);

                        const secondHelp = document.createElement('li');
                        secondHelp.setAttribute("id", "goal_lists");
                        secondHelp.textContent = goal_13.thing2;
                        helpElement.appendChild(secondHelp);

                        const thirdHelp = document.createElement('li');
                        thirdHelp.setAttribute("id", "goal_lists");
                        thirdHelp.textContent = goal_13.thing3;
                        helpElement.appendChild(thirdHelp);

                        const fourthHelp = document.createElement('li');
                        fourthHelp.setAttribute("id", "goal_lists");
                        fourthHelp.textContent = goal_13.thing4;
                        helpElement.appendChild(fourthHelp);

                        const fithHelp = document.createElement('li');
                        fithHelp.setAttribute("id", "goal_lists");
                        fithHelp.textContent = goal_13.thing5;
                        helpElement.appendChild(fithHelp);
                        
                        const sixthHelp = document.createElement('li');
                        sixthHelp.setAttribute("id", "goal_lists");
                        sixthHelp.textContent = goal_13.thing6;
                        helpElement.appendChild(sixthHelp);
                        
                        const seventhHelp = document.createElement('li');
                        seventhHelp.setAttribute("id", "goal_lists");
                        seventhHelp.textContent = goal_13.thing7;
                        helpElement.appendChild(seventhHelp);

                        const eighthHelp = document.createElement('li');
                        eighthHelp.setAttribute("id", "goal_lists");
                        eighthHelp.textContent = goal_13.thing8;
                        helpElement.appendChild(eighthHelp);

                        const ninthHelp = document.createElement('li');
                        ninthHelp.setAttribute("id", "goal_lists");
                        ninthHelp.textContent = goal_13.thing9;
                        helpElement.appendChild(ninthHelp);

                        bottomSection.appendChild(helpElement);
                    }

                    //checks for the id goal_15 before loading content in the json file
                    if (document.querySelector("#goal_15")) {
                        // Grab the first object inside goal_15
                        const goal_15 = item.goals.goal_15[0];

                        // Title
                        const page_title = document.createElement('title');
                        page_title.textContent = goal_15.heading[0].title;
                        headerElement.appendChild(page_title);

                        // Image
                        const imageElement = document.createElement('img');
                        imageElement.setAttribute("id", "goal");
                        imageElement.src = goal_15.imageURL;
                        imageElement.alt = goal_15.alt;
                        topSection.appendChild(imageElement);

                        // Aims
                        const paraElementTop = document.createElement('p');
                        paraElementTop.setAttribute("id", "description");
                        paraElementTop.textContent = goal_15.aims;
                        topSection.appendChild(paraElementTop);

                        // About
                        const firstParaElementMiddle = document.createElement('p');
                        firstParaElementMiddle.setAttribute("id", "about1");
                        firstParaElementMiddle.textContent = goal_15.about1;
                        about_goal.appendChild(firstParaElementMiddle);
                        const secondParaElementMiddle = document.createElement('p');
                        secondParaElementMiddle.setAttribute("id", "about2");
                        secondParaElementMiddle.textContent = goal_15.about2;
                        about_goal.appendChild(secondParaElementMiddle);
                        const thirdParaElementMiddle = document.createElement('p');
                        thirdParaElementMiddle.setAttribute("id", "about3");
                        thirdParaElementMiddle.textContent = goal_15.about3;
                        about_goal.appendChild(thirdParaElementMiddle);

                        // Targets list
                        const targetElement = document.createElement('ul');
                        targetElement.textContent = goal_15.targets;
                        targetElement.setAttribute("id", "targets");
                        targetElement.classList.add("services");

                        const firstTarget = document.createElement('li');
                        firstTarget.setAttribute("id", "goal_lists");
                        firstTarget.textContent = goal_15.target1;
                        targetElement.appendChild(firstTarget);

                        const secondTarget = document.createElement('li');
                        secondTarget.setAttribute("id", "goal_lists");
                        secondTarget.textContent = goal_15.target2;
                        targetElement.appendChild(secondTarget);

                        const thirdTarget = document.createElement('li');
                        thirdTarget.setAttribute("id", "goal_lists");
                        thirdTarget.textContent = goal_15.target3;
                        targetElement.appendChild(thirdTarget);

                        const fourthTarget = document.createElement('li');
                        fourthTarget.setAttribute("id", "goal_lists");
                        fourthTarget.textContent = goal_15.target4;
                        targetElement.appendChild(fourthTarget);

                        const fithTarget = document.createElement('li');
                        fithTarget.setAttribute("id", "goal_lists");
                        fithTarget.textContent = goal_15.target5;
                        targetElement.appendChild(fithTarget);

                        bottomSection.appendChild(targetElement);

                        // Things to do list
                        const helpElement = document.createElement('ul');
                        helpElement.textContent = goal_15.things;
                        helpElement.setAttribute("id", "help");
                        helpElement.classList.add("services");

                        const firstHelp = document.createElement('li');
                        firstHelp.setAttribute("id", "goal_lists");
                        firstHelp.textContent = goal_15.thing1;
                        helpElement.appendChild(firstHelp);

                        const secondHelp = document.createElement('li');
                        secondHelp.setAttribute("id", "goal_lists");
                        secondHelp.textContent = goal_15.thing2;
                        helpElement.appendChild(secondHelp);

                        const thirdHelp = document.createElement('li');
                        thirdHelp.setAttribute("id", "goal_lists");
                        thirdHelp.textContent = goal_15.thing3;
                        helpElement.appendChild(thirdHelp);

                        const fourthHelp = document.createElement('li');
                        fourthHelp.setAttribute("id", "goal_lists");
                        fourthHelp.textContent = goal_15.thing4;
                        helpElement.appendChild(fourthHelp);

                        bottomSection.appendChild(helpElement);
                    }
                
            };



            //checks if the newsletter form page is active
            //###JAVA SCRIPT FOR THE FORM PAGE HERE!!!!!
            if (window.location.pathname==="/"+ item.links.l_newsletter){
                newsletter_a.setAttribute("id", 'active');

                // creates heading and paragraph about newsletter:
                let headerForm = document.querySelector('.mainForm');
                
                const h2Form = document.querySelector('#page-title');
                h2Form.textContent = item.form.small_heading;
                //headerForm.appendChild(h2Form);

                const h3FormPara = document.querySelector('#page-para');
                h3FormPara.textContent = item.form.paragraph;
                //headerForm.appendChild(h3FormPara);

                let sectionForm = document.querySelector('.sectionForm');

                //creates the form elements and applies attributes:
                const theForm = document.createElement('form');
                theForm.setAttribute('id', 'myForm');
                theForm.setAttribute('method', 'POST');
                theForm.setAttribute('action', '/newsletter');
                sectionForm.appendChild(theForm);

                const theFieldset = document.createElement('fieldset');
                theForm.appendChild(theFieldset);

                //creates legend for the form:
                const theLegend = document.createElement('legend');
                theLegend.textContent = item.form.legend;
                theFieldset.appendChild(theLegend);

                const f_nameLabel = document.createElement('label');
                f_nameLabel.setAttribute('for', 'firstname');
                f_nameLabel.textContent = item.form.f_nameLabel;
                theFieldset.appendChild(f_nameLabel);

                const f_nameInput = document.createElement('input');
                f_nameInput.setAttribute('id', 'firstname');
                f_nameInput.setAttribute('name', 'firstname');
                f_nameInput.setAttribute('type', 'text');
                f_nameInput.setAttribute('required', '');
                theFieldset.appendChild(f_nameInput);

                const l_nameLabel = document.createElement('label');
                l_nameLabel.setAttribute('for', 'lastname');
                l_nameLabel.textContent = item.form.l_nameLabel;
                theFieldset.appendChild(l_nameLabel);

                const l_nameInput = document.createElement('input');
                l_nameInput.setAttribute('id', 'lastname');
                l_nameInput.setAttribute('name', 'lastname');
                l_nameInput.setAttribute('type', 'text');
                l_nameInput.setAttribute('required', '');
                theFieldset.appendChild(l_nameInput);

                const emailLabel = document.createElement('label');
                emailLabel.setAttribute('for', 'email');
                emailLabel.textContent= item.form.emailLabel;
                theFieldset.appendChild(emailLabel)

                const emailInput = document.createElement('input');
                emailInput.setAttribute('id', 'email');
                emailInput.setAttribute('name', 'email');
                emailInput.setAttribute('type', 'text');
                emailInput.setAttribute('required', '');
                theFieldset.appendChild(emailInput)

                const messageLabel = document.createElement('label');
                messageLabel.setAttribute('for', 'message');
                messageLabel.textContent =item.form.messageLabel;
                theFieldset.appendChild(messageLabel)

                const messageInput = document.createElement('textarea');
                messageInput.setAttribute('id', 'message');
                messageInput.setAttribute('required', '');
                messageInput.setAttribute('placeholder', item.form.messagePlaceholder)
                theFieldset.appendChild(messageInput);

                const formButton = document.createElement('input');
                formButton.setAttribute('class', 'submit_button');
                formButton.setAttribute('type', 'submit');
                formButton.setAttribute('value', 'Submit Message');
                theFieldset.appendChild(formButton);

                const pForm = document.createElement('p');
                pForm.setAttribute('class', 'confirmMessage');
                pForm.textContent = item.form.p;
                theFieldset.appendChild(pForm);

                const myForm = document.querySelector('#myForm');
                //
                if (myForm){
                    myForm.addEventListener('submit', (e)=>{
                        e.preventDefault();
                        const confirmMessage = document.querySelector('.confirmMessage');

                        const formBody={
                            first_name: document.querySelector('#firstname').value,
                            last_name: document.querySelector('#lastname').value,
                            email: document.querySelector('#email').value,
                            message: document.querySelector('#message').value,
                        };
                        const requestHeaders = {"Content-Type": "application/json"};
                        //confirmMessage.textContent  = `Hi ${document.querySelector('#firstname').value}, your message has been recieved, we will contact you at ${document.querySelector('#email').value}`;

                        fetch("/newsletter", {
                            method: 'POST',
                            headers: requestHeaders,
                            body: JSON.stringify(formBody)
                        }).then(response => response.json())
                        .then((responseData)=>{
                            let text = `Hi ${responseData.first_name} ${responseData.last_name}, your confirmation email will be sent to ${responseData.email}`;
                            confirmMessage.textContent = text;                     
                        });

                    })
                };


            };
            


            //checks if the team page link is active
            //####JAVA SCRIPT FOR THE TEAM PAGE HERE !!!!!! 
            if (window.location.pathname ==="/"+ item.links.l_team){
                team_a.setAttribute('id', 'active');

                // build the team page content from JSON
                let teamData = item.teamPage;

                let teamTitle = document.querySelector('#team-title');
                let teamIntro = document.querySelector('#team-intro');
                let teamMembers = document.querySelector('#team-members');
                let teamError = document.querySelector('#team-error');

                if (teamData && teamTitle && teamIntro && teamMembers){

                    teamTitle.textContent = teamData.pageTitle;
                    teamIntro.textContent = teamData.intro;

                    teamMembers.innerHTML = "";

                    teamData.members.forEach(function(member){

                        let card = document.createElement('article');
                        card.setAttribute('class', 'team-card');

                        let nameHeading = document.createElement('h3');
                        nameHeading.textContent = member.name;
                        card.appendChild(nameHeading);

                        let rolePara = document.createElement('p');
                        rolePara.setAttribute('class','team-role');
                        rolePara.textContent = member.role;
                        card.appendChild(rolePara);

                        let bioHeading = document.createElement('h4');
                        bioHeading.textContent = "Bio";
                        card.appendChild(bioHeading);

                        let bioPara = document.createElement('p');
                        bioPara.textContent = member.bio;
                        card.appendChild(bioPara);

                        let respHeading = document.createElement('h4');
                        respHeading.textContent = "Responsibilities";
                        card.appendChild(respHeading);

                        let respList = document.createElement('ul');
                        if (member.responsibilities){
                            member.responsibilities.forEach(function(r){
                                let li = document.createElement('li');
                                li.textContent = r;
                                respList.appendChild(li);
                            });
                        }
                        card.appendChild(respList);

                        let contribHeading = document.createElement('h4');
                        contribHeading.textContent = "Contributions";
                        card.appendChild(contribHeading);

                        let contribList = document.createElement('ul');
                        if (member.contributions){
                            member.contributions.forEach(function(c){
                                let li = document.createElement('li');
                                li.textContent = c;
                                contribList.appendChild(li);
                            });
                        }
                        card.appendChild(contribList);

                        teamMembers.appendChild(card);
                    });

                } else if (teamError){
                    teamError.textContent = "Could not load team information.";
                    teamError.classList.remove('hidden');
                }

            };

        };
    })
    .catch(error=> console.error("Error fetching Json file"));
});
