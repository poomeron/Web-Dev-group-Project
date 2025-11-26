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
            //searchBar.setAttribute('class', 'search')
            searchContainer.appendChild(searchBar);

            //search button:
            const searchButton = document.createElement('button');
            searchButton.textContent = item.heading.button_text;
            //searchButton.setAttribute('class', 'search')
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
            //checks if the home pagen link is active
            if (window.location.pathname==="/"+ item.links.l_home){
                home_a.setAttribute('id', 'active');
            }
            
            
            //About link
            const about = document.createElement('li');
            const about_a = document.createElement('a');
            about_a.textContent = item.ul.about;
            about_a.href = item.links.l_about;
            ulElement.appendChild(about);
            about.appendChild(about_a);
            about_a.setAttribute('class', 'nav-link');
            //checks if the about page link is active
            if (window.location.pathname==="/"+ item.links.l_about){
                about_a.setAttribute('id', 'active');
            }
        

            //goals link
            //const goals = document.createElement('ul');
            //const goals_a = document.createElement('a');
            //goals_a.textContent = item.ul.goals;
            //goals_a.href = item.links.l_goals;
            //ulElement.appendChild(goals);
            //goals.appendChild(goals_a);
            //goals_a.setAttribute('class', 'nav-link')
            //to be continued

            //creates a div for the 3 goals to sit in:
            const goals = document.createElement('li');
            const goals_a = document.createElement('a');
            goals_a.textContent = item.ul.goals;
            goals_a.setAttribute('class', 'nav-link dropdown-toggle');
            goals_a.setAttribute('aria-haspopup', 'true');
            goals_a.setAttribute('aria-expanded', 'false');
            goals.appendChild(goals_a);
            ulElement.appendChild(goals);

            //dropdown menu
            const goalUl = document.createElement('ul');
            goalUl.setAttribute('class', 'menu');
            goalUl.setAttribute('role', 'menu');


            //all the goal nav links : 
            const goal_7= document.createElement('li');
            const goal_7_a= document.createElement('a');
            goal_7_a.textContent = item.ul.goal_7;
            goal_7_a.href = item.links.l_goal7;
            goal_7_a.setAttribute('role', 'menu_item');
            goalUl.appendChild(goal_7);
            goal_7.appendChild(goal_7_a);

            const goal_13= document.createElement('li');
            const goal_13_a= document.createElement('a');
            goal_13_a.textContent = item.ul.goal_13;
            goal_13_a.href = item.links.l_goal13;
            goal_13_a.setAttribute('role', 'menu_item');
            goalUl.appendChild(goal_13);
            goal_13.appendChild(goal_13_a);

            const goal_15= document.createElement('li');
            const goal_15_a= document.createElement('a');
            goal_15_a.textContent = item.ul.goal_15;
            goal_15_a.href = item.links.l_goal15;
            goal_15_a.setAttribute('role', 'menu_item');
            goalUl.appendChild(goal_15);
            goal_15.appendChild(goal_15_a);
            


            //newsletter link (form)
            const newsletter = document.createElement('li');
            const newsletter_a = document.createElement('a');
            newsletter_a.textContent = item.ul.newsletter;
            newsletter_a.href= item.links.l_newsletter;
            ulElement.appendChild(newsletter);
            newsletter.appendChild(newsletter_a);
            newsletter_a.setAttribute('class', 'nav-link')
            //checks if the newsletter form page is active
            if (window.location.pathname==="/"+ item.links.l_newsletter){
                newsletter_a.setAttribute("id", 'active');
            }

            const team = document.createElement('li');
            const team_a = document.createElement('a');
            team_a.textContent = item.ul.team;
            team_a.href = item.links.l_team;
            ulElement.appendChild(team);
            team.appendChild(team_a);
            team_a.setAttribute('class', 'nav-link')
            //checks if the team page link is active
            if (window.location.pathname ==="/"+ item.links.l_team){
                team_a.setAttribute('id', 'active');
            }




            


        };
    })
    .catch(error=> console.error("Error fetching Json file"));
});


goals_a.addEventListener('click', (e)=>{
    e.prevendDefualt();
    const expanded = goals_a.getAttribute('aria-expanded') === 'false';
    goal_a .setAttribute('aria-expanded', String(!expanded));
    goal_a.style.display= expanded? 'none': 'flex';
})