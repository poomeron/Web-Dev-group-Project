let headerElement = document.querySelector('#form_title');
let ulElement = document.querySelector('.nav-bar');
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
            searchButton.textContent = item.heading.button_text;

            searchContainer.appendChild(searchButton);

            headerElement.appendChild(searchContainer);


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



           //checks if the home pagen link is active
           //#####JAVA SCRIPT FOR INDEX PAGE HERE:!!!!!!!!!!
            if (window.location.pathname==="/"+ item.links.l_home){
                home_a.setAttribute('id', 'active');
            };

            //checks if the about page link is active
            //######JAVA SCRIPT FOR ABOUT PAGE HERE !!!!!!:
            if (window.location.pathname==="/"+ item.links.l_about){
                about_a.setAttribute('id', 'active');
            };



            //checks if the goal page is active:
            //######JAVA SCRIPT FOR THE GOAL PAGES HERE !!!!!!:
            if (window.location.pathname ==="/"+ item.links.l_goal7 || window.location.pathname ==="/"+ item.links.l_goal13 || window.location.pathname ==="/"+ item.links.l_goal15){
                goals_a.setAttribute('id', 'active')
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
                            console.log(responseData);
                            confirmMessage.textContent = `Hi ${responseData.first_name} ${responseData.last_name}, your message has been recieved, we will contact you at ${responseData.email}`
                        });

                    })
                };




            };
            


            //checks if the team page link is active
            //####JAVA SCRIPT FOR THE TEAM PAGE HERE !!!!!!
            if (window.location.pathname ==="/"+ item.links.l_team){
                team_a.setAttribute('id', 'active');
            };

        };
    })
    .catch(error=> console.error("Error fetching Json file"));
});


