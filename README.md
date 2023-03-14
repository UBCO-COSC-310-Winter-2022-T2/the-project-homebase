[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10410906)
# Milestones

## Milestone 1
Github Repo created and Canvas quiz pertaining to group members fully submitted

## Milestone 2

### Description

Our project, Homebase, is designed to be a minimalistic clone of Discord, the popular chat and voice communication service. Within our service, users will be able to make accounts, and edit their accounts to have a personalized name, profile picture, and bio. The user will also then be able to join a server off of a unique invite code being given to them, unique to an individual server. If the user does not wish to join another server, they also have the opportunity to make their own in which they will be owner and administrator on. Within servers, users will be able to view text channels within the server, the sent messages within those text channels, and the member list of the server showing which users are online/offline. If a user is an administrator for a server they also have the opportunity to perform CRUD (create, read, update delete) operations for new and existing text channels, and create/assign roles to individual users If they are the owner, they can delete the server in its entirety also. Within a channel, a user can post a message which can include both plain text, images which will be auto embedded, and hyperlinks to other websites. While idlely browsing servers, a user will be able to see messages as they come in real time. When a user is done using the software, they will be able to log out, or potentially delete their account if they no longer want to use the service. A user can return by signing in again, and if they cannot remember their password that they used before, can request to have it reset.

### Use Case Diagram

![This is an image](/img/UseCaseDiagram.png)

### Use Cases

Use Case 1: Log In

Primary Actor: User

Description: User logs into account

Pre-condition: User must be connected to service

Post-condition: User is logged into account

Main scenario:
	
	1. User accesses service
	2. User locates login button
	3. User enters credentials and logs in

Extensions:

	3.1 User enters invalid credentials
		3.1.1 If user has invalid credentials, errors are shown



Use Case 2: Log out

Primary Actor: User

Description: User logs out of account

Pre-condition: User must be logged into account

Post-condition: User is logged out of account

Main scenario:
	
	1. User accesses profile
	2. User locates logout button from profile page
	3. User logs out of service



Use Case 3: Make account

Primary Actor: User

Description: User can make a new account

Pre-condition: User is connected to service

Post-condition: User creates a new profile and is able to login

Main scenario:

	1. User accesses service
	2. User locates "make account" button
	3. User enter information and creates password
	4. User is granted an account

Extension:

	3.1 User enters invalid information or invalid password creation
		3.1.1 errors shown



Use Case 4: Delete account

Primary Actor: User

Description: User is able to delete account from service/database

Pre-condition: User must have a valid account

Post-condition: User is deleted from database

Main scenario: 

	1. User accesses profile page
	2. User locates "delete account"
	3. User is asked if they really want to delete account
	4. User deletes account
	5. User details are removed from service database and account deleted



Use Case 5: Reset Password

Primary Actor: User

Description: User is allowed to reset password

Pre-condition: User must have a valid account

Post-condition: User changes password, new password is updated in database

Main scenario:

	1. User can access the new password feature either from profile page or login page
	2. User enters a security question to allow new password creation
	3. User enters new password
	4. Database is updated with the new password for the profile

Extension:
	
	3.1 User enters invalid password that does not meet requirements
		3.1.1 If user enters invalid password, Error shown and user prompted to try again



Use Case 6: Make a server 

Primary Actor: User

Description: User is allowed to create a new server 

Pre-condition: User must have a valid account

Post-condition: User is made an admin of the newly created server

Main scenario:
	
	1. User locates "create server" Button
	2. User inputs name of new server
	3. User can add picture for server
	4. User adds text channels in server
	5. Server is then created and added to service database



Use Case 7: Delete server 

Primary Actor: User

Description: User is able to delete server, removed from database

Pre-condition: User must be owner/admin of the server

Post-condition: Server is deleted from the service/database

Main scenario:

	1. User accesses servers settings and locates the delete button
	2. User is shown a confirmation button before proceeding
	3. User is prompted with security question before deleting
	4. Server is removed from service/database

Extension: 
	
	3.1 Invalid answer to security question
		3.1.1 If answer is invalid, error shown and user prompted to answer again. will be locked out after 3 attempts


Use Case 8: Assigning roles

Primary Actor: User 

Description: Users are able to assign roles to themselves and other users on servers they are administrators on

Pre-condition: User must have an account and be an admin 

Post-condition: User is assigned a role

Main scenario:
	
	1. User creates role on server
	2. User assigns other users to created roles
	3. User can assign itself to created roles

# The Project

The project provides you an opportunity to build upon the foundational knowledge acquired in this course. It is designed to help you develop an advanced understanding of software engineering principles, tools, and techniques using structured requirements gathering and analysis, software development process, design patterns, software architecture, and software testing.  You will also need to consider your development methodology (don’t use waterfall), software metrics, and software quality assurance.

As a team, you will select a project, develop a set of requirements, conduct a formal analysis of the project, develop an architecture, and then using TDD and an Agile workflow, iterate and develop your projects.  During your project, you MUST consider design patterns and anti-patterns, TDD, dockerization, and CI/CD.  The goal is not necessarily to build a complex system, but to practice and become comfortable with the techniques, be able to analyze and decompose a problem, and incrementally develop and deploy a solution using a branching workflow.

Internally, within your team, you are free to manage efforts and tasks with the understanding that everyone is expected to contribute equally in some fashion.  During the project, you will have the chance to confidentially conduct peer reviews using the credit-earned model (see document on Canvas regarding this) at a number of key points.   Your individual project grade will be impacted using the results of the peer evaluation.   The key point is that if you don’t contribute to the project, your mark will reflect this.  This will be discussed in class.

You must have:

* Unit tests and integration tests to ensure code quality and functionality
* A deployment pipeline using CI/CD to automatically test and deploy changes to the codebase
* Identified what design patterns you are using and describe why
* Dockerized deployment
* Continual and ongoing work using TDD 
*A team between 3-5 people (no more, no less) - target for 4

## Project Goals:

* To deepen the students' understanding of software engineering principles, tools, and techniques.
* To enable students to apply software engineering principles, tools, and techniques to the development of complex software systems.
* To introduce students to agile development methodologies, software metrics, and software quality assurance.
* To foster collaboration and teamwork among students in the development of software systems.

## Project Objectives:

By the end of this project, students will be able to:

* Apply the software development process model, to the development of a software system
* Design software systems using appropriate design patterns and principles
* Develop software architectures for complex software systems
* Use software testing techniques to ensure the quality of software systems
* Apply agile development methodologies to the development of software systems
* Apply software metrics to evaluate the quality of software systems
* Develop software quality assurance plans to ensure the quality of software systems
* Apply and develop a CI/CD pipeline for automated testing and deployment
* Utilize dockerization to containerize your application
* Work collaboratively in teams to develop software systems
* Peer Evaluation: see Peer Evaluation

## Evaluation:

**Milestone #1** – Team Formation and Planning Framework (March 7th) – Set up and join your team.   Let me know who is on your team (2%)

**Milestone #2** – Project Description and Requirements (March 13th).  A summary of “What” your project is, who the users are, and “What” your project will do (functional, non-functional requirements, etc) including use cases (properly dressed with the appropriate level of abstraction.   Consider the tools (proto-personal, journey lines)(13%)

**Milestone #3** – Formal Analysis and Architecture (March 19th).  
 * Use the appropriate models to present the details about what your system will look like, what it will do/be composed of and what your architecture is. (20%)
 * Test plan (5%)

**Milestone #4** – Testing/R&R Report/Release #1 (March 26th) (10%)

**Milestone #5** – Testing/R&R Report/Release #2 (April 2nd) (10%)

**Milestone #6** – Final Report/Demo video (April 9th) (20%)

**CI/CD (2 X 5%)**

**Process (2 x 5%)**

## The Projects:

**Discord Clone:** This project involves the development of a web-based platform for online communication and collaboration, similar to the popular chat app, Discord. The platform should incorporate the Observer design pattern to notify users of new messages, and the Mediator design pattern to manage communication between users and channels. The platform should also implement the Singleton design pattern to ensure that only one instance of the chat server is running at any given time, and the Command design pattern to enable users to execute commands (e.g. change username, join channel). Additionally, the platform should incorporate Continuous Integration and Deployment (CI/CD) and automated testing to ensure that updates are deployed quickly and without errors.

**iClicker Clone:** This project involves the development of a web-based platform for classroom polling and feedback. The platform should allow instructors to pose questions to students and receive instant feedback. The platform should incorporate the Observer design pattern to notify the instructor of student responses, and the Facade design pattern to simplify the interface between the user and the underlying system.  Additionally, the system should incorporate Continuous Integration and Deployment (CI/CD) and automated testing and deploy quickly and without errors. 

**Online Marketplace Application:** This project involves the development of a web-based application that facilitates online transactions between buyers and sellers. The application should incorporate the MVC (Model-View-Controller) design pattern to separate the concerns of the application into different components. The application should also implement the Observer design pattern to notify users of updates to their transactions.  Additionally, the system should incorporate Continuous Integration and Deployment (CI/CD) and automated testing.

**IoT Sensor Monitoring System:** This project involves the development of a system for monitoring and analyzing data from IoT sensors using MQTT. The system should incorporate the Publish-Subscribe design pattern to enable sensors to publish data and clients to subscribe to relevant data streams. The system should also implement the Chain of Responsibility design pattern to manage and filter data streams, and the Adapter design pattern to enable different types of sensors to communicate with the system. Additionally, the system should incorporate Continuous Integration and Deployment (CI/CD) and automated testing to ensure that data is collected accurately and without errors. The system should provide real-time visualizations of sensor data and alert users when thresholds are exceeded.
