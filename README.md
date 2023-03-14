[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10410906)
# Milestones

## Milestone 1
Github Repo created and Canvas quiz pertaining to group members fully submitted

## Milestone 2

### Description

Our project, Homebase, is designed to be a minimalistic clone of Discord, the popular chat and voice communication service. Within our service, users will be able to make accounts, and edit their accounts to have a personalized name, profile picture, and bio. The user will also then be able to join a server off of a unique invite code being given to them, unique to an individual server. If the user does not wish to join another server, they also have the opportunity to make their own in which they will be owner and administrator on. Within servers, users will be able to view text channels within the server, the sent messages within those text channels, and the member list of the server showing which users are online/offline. If a user is an administrator for a server they also have the opportunity to perform CRUD (create, read, update delete) operations for new and existing text channels, and create/assign roles to individual users If they are the owner, they can delete the server in its entirety also. Within a channel, a user can post a message which can include both plain text, images which will be auto embedded, and hyperlinks to other websites. While idlely browsing servers, a user will be able to see messages as they come in real time. When a user is done using the software, they will be able to log out, or potentially delete their account if they no longer want to use the service. A user can return by signing in again, and if they cannot remember their password that they used before, can request to have it reset.



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

## Use Cases

Use Case 9: Join Server
Primary actor: User
Description: Allows a user to join a server.
Pre-condition: User is logged in.
Post-condition: User has server listed on their server list and receives notifications.

Main scenario:
    1. User selects server from list.
    2. User joins server.
    3. Server updated to reflect the new membership of user on the server.
    4. User is able to send and receive messages, and view members of server.
Extensions:
    1.1: Server is unavailable. Error is shown. Prompt to try again.

Use Case 10: Leave Server
Primary actor: User
Description: User leaves a server they are a member of.
Pre-condition: User belongs to the server.
Post-condition: User is no longer in the server.

Main scenario:
    1. User selects to leave the server as part of the server options.
    2. The server is updated to not include user as a member.
    3. The user no longer has access to the server.
Extensions:
    1.1: User is the owner of a server.
        1.1.1: Error is shown. User is asked to pass ownership of server via roles.

Use Case 11: Change profile information.
Primary actor: User
Description: User changes name, profile picture, and other profile info.
Pre-condition: User is logged into profile.
Post-condition: User information is updated on the database.

Main scenario:
    1. User clicks on their profile icon.
    2. User is taken to their profile editing page.
    3. User changes information, and confirms changes via button.
    4. Database is updated with new information.
Extensions:
    4.1: Database is inaccessible or information is not updated. Error is shown and changes are rolled back to last.

Use Case 12: Change text channels in server.
Primary actor: User
Description: User is able to change a text channel within the same server and send messages in the new one.
Pre-condition: User is a member of the server and the server has multiple text channels.
Post-condition: User is directed to the new text channel.

Main scenario:
    1. User is in a server's text channel and selects a different text channel in another server.
    2. User is switched to new text channel.
    3. User is able to send messages in text channels.

Use Case 13: CRUD operations on owned server.
Primary actor: User
Description: User is able to create text channels in servers that they own. They are able to change server names, update server information, and delete servers they own.
Pre-condition: User is owner of a server.
Post-condition: User updates server information on the database.

Main scenario:
    1. User accesses control panel for server they own.
    2. User chooses one of the CRUD operations.
    3. Database is updated with new information.
    4. Changes are reflected in webapp
Extensions:
    2.1: User is prompted to confirm destructive actions (deleting servers).
    3.1: Database is inaccessible. Error is shown and user is prompted to try again.

Use Case 14: Send message in text channel.
Primary actor: User
Description: User sends a message/image in a text channel and members are notified.
Pre-condition: User is member of a server and is in a text channel.
Post-condition: None

Main scenario:
    1. User is in a server text channel types a message/enters an image.
    2. User confirms sending.
    3. Other members of the server are notified.
Extensions:
    1.1: Internet connection is lost while sending message. Notify user and prompt to send again.

Use Case 15: Receive incoming messages.
Primary actor: User
Description: User is notified of incoming messages.
Pre-condition: User is member of server where message is sent.
Post-condition: None

Main scenario:
    1. Another user has sent a message in the server.
    2. Member user receives notification of the new message.
Extensions:
    2.1: User has turned off notifications. User does not receive a notification.

Use Case 16: View existing members.
Primary actor: User
Description: Users in a server can see the list of members of a server.
Pre-condition: User is member of a server.
Post-condition: None

Main scenario:
    1. User is a member of a server and clicks on the server information button.
    2. User is shown list of all members and their roles.
Extensions:
    2.1: If no role is set for members, no information about them is displayed.
  