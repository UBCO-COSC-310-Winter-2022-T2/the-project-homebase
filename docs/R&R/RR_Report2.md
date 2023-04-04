# R&R Report: Milestone #4

## Progress

### Github Projects Snapshot

### Milestone Snapshot

### Burnup Chart

### Tasks Completed

**Brock**

**Rommel**

**Jaidyn**

**Esteban**

- Testing for Server Create/Delete
- Testing for Server Join/Leave
- Testing for Message Sending/Receiving (WIP)
- Auto-formatting using Prettier
- Issue tracking and documentation (R&R Report)

### Big Picture

The progress for this milestone was good overall, and the team generally feels that more work was done within the same timeframe as before. Despite this, we generally think we were slighly too ambitious for this milestone, as every team member feels like they could use one or two more days to finish off some of the work. We think this is putting us in a good place to reach our Thursday deadline for a fully working prototype.

## Testing

Currently, the main branch is passing all tests save for server joining/leaving, which are in the process of being reviewed for implementation. Additionally, there are missing tests for sending and receiving messages. In addition to our current suite of automatted testing, we have also implemented an auto-formatting workflow using `Prettier`. This allows all team members to use whatever code conventions they find most readable in their personal workflow, while still having a unified and consistent repository that follows a well established, readable, style. 

## Reflection

### Members

**Brock**

**Rommel**

**Jaidyn**

**Esteban**

For this milestone, I found that I worked much more fluidly than before thanks to the better understanding I now have of testing. I feel llike the tests I managed to create are much more productive, and test our application more rigorously. I also had the benefit of seeing how my older tests failed to test for some of the behaviour of our app. In general, this was much more rewarding to work on. Brock helped me properly set up the `Mongo-Memory-Server`, which is a way for us to do mock testing with our app without needing to alter the database. Implementing this changed really helped speed up the process of testing and make it much more reliable. Some tests I could not finish, namely the sending and receiving of messages, because I felt I did not yet understand our ideas for implementing these features enough. Overall, I am still optimistic for the outlook of our project.

### Team

Team morale is better than before, with team members feeling much more familiar with the language and tools we are using. Communication in the team has been excellent overall, with team members feeling comfortable reaching out for help with problems and being honest about their experiences with their respective tasks. Some of us are feeling slightly anxious about the upcoming tasks being more difficult than what we have tackled so far, but we think the bulk of the work is done and more team members will be available for cooperating on larger tasks. We wish we could have done a slightly better job with estimating the time some tasks were going to take, but are still looking forward to our Thursday deadline being a success. 

We have encountered less challenges than before, and were therefore able to take on larger tasks. The velocity of the project (reflected in the burnup chart) is consistent, and satisfactory for this part of the process.

## Future Tasks

After our retrospective, we decided to continue working on tasks which need more refinement, as well as start working on the last crucial tasks for a working prototype.

### Need to Haves (in order of priority)

- User must be able to make a server (#6)
- User must be able to delete servers they are owners of (#7)
- User must be able to join a server (#9)
- User must be able to leave a server (#10)
- User must be able to send message for a given channel in a server, and has the potential to include (#14):
  - Basic Text (#14.1)
- User must receive incoming messages as they are posted (#15)
- Refactor home page
- User sessions

### Nice To Haves (in order of priority)

- User must be able to assign roles to themselves and other users on servers they are administrators on (#8)
- User must be swap between text channels for servers they are in (#12)
- User must be able to perform CRUD operations for text channels for servers they are admins (#13)
- User must be able to send message for a given channel in a server, and has the potential to include:
  - Images/Files (#14.2)
  - Hyperlinks (#14.3)
- User must be able to view members of server (#16)

## Future Sprint Split and Goals

### Split

Based on the above we decided to split it as such:

**Brock**

**Rommel**

**Jaidyn**

**Esteban**

- Testing for all requirements in progress

### Goals

Working prototype by Monday at best, Thursday at worst, so we can focus on bugs / nice to have's
