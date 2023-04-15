# Final Report

Video: https://www.youtube.com/watch?v=e4F-1zhNybU 

## General Development

1. What did your team build? Is it feature complete and running?

    We built the basic functionality of and frontend of a Discord clone webapp. We are mostly feature complete, being able to create users, edit them, login and be authenticated, and have multiple users chatting in the same chatroom. The app is functional and is ran using a `socket.io` server using `express`.

2. How many of your initial requirements that your team set out to deliver did you actually deliver (a checklist/table would help to summarize)?  Were you able to deliver everything or are there things missing?  Did your initial requirements sufficiently capture the details needed for the project?
   
    Out of our initially outlined 16 requirements, we managed to implement 11, which compose the main functionality. The full list is:
    - [x] Log in
    - [x] Log out
    - [x] Make an account
    - [x] Delete an account
    - [x] Reset password
    - [x] Make a server (partially)
    - [ ] Delete a server
    - [ ] Roles
    - [x] Join a server (partially)
    - [ ] Leave a server
    - [x] Edit profile
      - [ ] PFP
      - [x] Name
      - [x] Short Bio
    - [ ] Swap channels
    - [ ] CRUD on servers
    - [x] Sending messages
      - [x] Text
      - [x] Link
      - [ ] Images
    - [x] Receive incoming messages
    - [x] View members of server

    We divided these into the features we thought most important for functionality and focused our efforts into having a working prototype. We feel that the features we missed were perhaps overly ambitious for the time frame we had, but felt that we did well in managing our expectations and efforts. We feel that our requirements were good at capturing the needs of the project, but could have perhaps been more explicit, and did not cover all of the complexities that arose in the project.


3. What is the architecture of the system? What are the key components? What design patterns did you use in the implementation? This needs to be sufficiently detailed so that the reader will have an understanding of what was built and what components were used/created. You will need to reflect on what you planned to build vs what you built.

    We sought out to create a webapp which used technologies actually used in industry, and so we built our app using `node.js`, and implemented our messaging using `socket.io`. As we chose to create this app using `express`, we implemented the Model-View-Controller design pattern. Each route of our app has an `.ejs` component which defines the template for it, a `.js` file which controls the functionality of the route, and all routes are served through the `app.js` file, which defines a server using `socket.io`. Our app in its current state is not quite three-tiered, but it is in essence employing this architecture. We have a database implemented using `MongoDB`, a server, and client code.

    We partially employed a service oriented architecture by having some parts of our app employ npm package modules, such as our testing modules which were created using the `jest` module. 

    We think that our original scope for the project was slightly too ambitious. We were hoping to be able to have multiple chat rooms and servers, but this would have probably required a larger planning period and more effort dedicated into the backend.

4. What degree and level of re-use was the team able to achieve and why?
   
   Generally speaking, the modules we each created are mostly self contained. This meant that, across modules, we did not have many opportunities for code reuse. However, some of the prebuilt functions of the `jest` package, such as `beforeAll()` and `beforeEach()`, allowed us to streamline the testing process by adding commonly used functionality (such as our mock database) to every test.

5. How many tasks are left in the backlog?
   
   We were left with 5 in in process tasks and 4 "nice-to-haves" which were not started.

## CI/CD

1. What testing strategies did you implement? Comment on their degree of automation and the tools used.  Would you (as a team) deal with testing differently in the future?  Make sure to ensure that your testing report is updated to reflect what's actually been done.

    We found that a lot of the complexity in testing came from the vagueness of some of the implementation details of our modules. Because a lot of our components were developed in isolation from each other, it was sometimes difficult to determine which specific technology would be used for a given feature. This meant that we sometimes had to wait to see how the code was developing before actually writing some tests, which was counter to the test-driven development. Although this was only a problem in a couple of occasions, we think being more diligent in that part of the planning would have solved this.

    For automation, we set up GitHub Actions to automatically apply our test suite to the code as it was merged into the repository. We also set up an automatic formatter as part of Actions, to keep the code consistent in its style.

2. How did your branching workflow work for the team?  Were you successful in properly reviewing the code before merging as a team?

    We felt this was one of the most successful aspects of the project. We were diligent in keeping features in the own branches as they developed, and were careful in reviewing each other's code as we pushed it to the repo. We found that some members of the team were more experienced with the technology stack we picked; this helped create a nice dynamic were we were able to provide quality feedback to each other and make sure the main branch was always secure. We found that the branching workflow helped each teammate work with more peace of mind, as we would not have to worry about new API keys or dependencies introduced by other people's code and could instead focus on working from a common place were things are tested.

3. How would your project be deployed?  Is it docker ready and tested?  Provide a brief description of the level of dockerization you have implemented and what would be required to deploy.

    Our project is not dockerized, but we think this process would not be too complex. We have a `MongoDB` database that could easily be deployed and scaled with a container, and our webapp's logic could be deployed in a docker container by changing our environment values. We would have liked to make the project containerized, but did not have time to do so.

## Reflections

1. How did your project management work for the team?  What was the hardest thing and what would you do the same/differently the next time you plan to complete a project like this? 

    In terms of project management, every member was responsible for updating their tasks in the GitHub projects as well as creating smaller issues as they came up. Although the board was occasionally updated by a designated member of the team after our weekly meeting, everyone was very much cooperative in keeping the board as up to date as possible. We found that the hardest part for the management of the project was the tracking of small issues and bugs in different branches of code. This was especially problematic as the stack became more complex, and we think we could have improved in this area.

2. Do you feel that your initial requirements were sufficiently detailed for this project?  Which requirements did you miss or overlook?

    We think we overlooked some requirements in terms of specific implementation details. We could have been more explicit in defining how exactly our app was going to work while setting the requirements. This would have made some of the task subdivision a little easier. Overall, however, we felt that we did a good job in capturing the needs of the application, and felt that the distribution of work for the project was fair as a result.

3. What did you miss in your initial planning for the project (beyond just the requirements)?
4. What process did you use (ie Scrum, Kanban..), how was it managed, and what was observed? 
5. As a team, did you encounter issues with different team members developing with different IDEs?  In the future, would the team change anything in regard to the uniformity of development environments?
6. If you were to estimate the efforts required for this project again, what would you consider?  (Really I am asking the team to reflect on the difference between what you thought it would take to complete the project vs what it actually took to deliver it).   
7. What did your team do that you feel is unique or something that the team is especially proud of (was there a big learning moment that the team had in terms of gaining knowledge of a new concept/process that was implemented).