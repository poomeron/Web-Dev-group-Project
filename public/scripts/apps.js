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
            
            
            //About link
            const about = document.createElement('li');
            const about_a = document.createElement('a');
            about_a.textContent = item.ul.about;
            about_a.href = item.links.l_about;
            ulElement.appendChild(about);
            about.appendChild(about_a);
            about_a.setAttribute('class', 'nav-link')

            //goals link
            const goals = document.createElement('li');
            const goals_a = document.createElement('a');
            goals_a.textContent = item.ul.goals;
            goals_a.href = item.links.l_goals;
            ulElement.appendChild(goals);
            goals.appendChild(goals_a);
            goals_a.setAttribute('class', 'nav-link')

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




            


        };
    })
    .catch(error=> console.error("Error fetching Json file"));
});
