# Milestones

[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10410906)

## Milestone 1

Github Repo created and Canvas quiz pertaining to group members fully submitted

## Milestone 2

### Description

Our project, Homebase, is designed to be a minimalistic clone of Discord, the popular chat and voice communication service. Within our service, users will be able to make accounts, and edit their accounts to have a personalized name, profile picture, and bio. The user will also then be able to join a server off of a unique invite code being given to them, unique to an individual server. If the user does not wish to join another server, they also have the opportunity to make their own in which they will be owner and administrator on. Within servers, users will be able to view text channels within the server, the sent messages within those text channels, and the member list of the server showing which users are online/offline. If a user is an administrator for a server they also have the opportunity to perform CRUD (create, read, update delete) operations for new and existing text channels, and create/assign roles to individual users If they are the owner, they can delete the server in its entirety also. Within a channel, a user can post a message which can include both plain text, images which will be auto embedded, and hyperlinks to other websites. While idlely browsing servers, a user will be able to see messages as they come in real time. When a user is done using the software, they will be able to log out, or potentially delete their account if they no longer want to use the service. A user can return by signing in again, and if they cannot remember their password that they used before, can request to have it reset.

### Requirements

#### User/Functional Requirements

-   User must be able to log in
-   User must be able to log out
-   User must be able to make an account
-   User must be able to delete account
-   User must be able to reset password
-   User must be able to make a server
-   User must be able to delete servers they are owners of
-   User must be able to assign roles to themselves and other users on servers they are administrators on
-   User must be able to join a server
-   User must be able to leave a server
-   User must be able to change their profile including:
    -   Changing PFP
    -   Changing Name
    -   Changing Short Bio
    -   Roles for server (if admin)
-   User must be swap between text channels for servers they are in
-   User must be able to perform CRUD operations for text channels for servers they are admins
-   User must be able to send message for a given channel in a server, and has the potential to include:
    -   Basic Text
    -   Images/Files
    -   Hyperlinks
-   User must receive incoming messages as they are posted
-   User must be able to view members of server

#### Non-Functional Requirements

-   ~~Webpage must load within 5 seconds maximum~~
-   ~~Newly receiving messages must load within 3 seconds maximum~~
-   Servers must be able to support at least 20 members minimum
-   Webpage will be developed using node.js with Express backend
-   Webpage will employ ejs for templating
-   Webpage will employ JavaScript for scripting
-   Testing will be made automatic through Github Actions and Jest
-   Workflow will employ CI/CD through Github Actions
-   Workflow will be based on Agile/Kanban, with tasks achieved in sprints with R&R before next sprint

### Use Case Diagram

![This is an image](/img/UseCaseDiagram.png)

### Use Cases

Use Case 1: Log In

Primary Actor: User

Description: User logs into account

Pre-condition: User must be connected to service

Post-condition: User is logged into account

Main scenario: 1. User accesses service 2. User locates login button 3. User enters credentials and logs in

Extensions:

    3.1 User enters invalid credentials
        3.1.1 If user has invalid credentials, errors are shown

Use Case 2: Log out

Primary Actor: User

Description: User logs out of account

Pre-condition: User must be logged into account

Post-condition: User is logged out of account

Main scenario: 1. User accesses profile 2. User locates logout button from profile page 3. User logs out of service

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

Main scenario: 1. User locates "create server" Button 2. User inputs name of new server 3. User can add picture for server 4. User adds text channels in server 5. Server is then created and added to service database

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

Main scenario: 1. User creates role on server 2. User assigns other users to created roles 3. User can assign itself to created roles

Use Case 9: Join Server

Primary actor: User

Description: Allows a user to join a server.

Pre-condition: User is logged in.

Post-condition: User has server listed on their server list and receives notifications.

Main scenario: 1. User selects server from list. 2. User joins server. 3. Server updated to reflect the new membership of user on the server. 4. User is able to send and receive messages, and view members of server.

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

## Milestone 3

Planning documents in [./docs](docs/), including architecture, sequence, class diagrams, DFD's and Testing Report.

## Milestone 4

R&R Report in [docs/R&R/RR_Report1.md](docs/R&R/RR_Report1.md).
