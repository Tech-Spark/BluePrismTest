# BluePrismTest

Setup:

Install dependencies with npm install

Stake:

React.js
Axios
Node.js
Express.js
ExpressAsyncHandler
MongoDB
Dotenv
Eslient

Description:  As given the instructions. Part of This application should meet the following uses cases.

•	As a user I initially get presented with list of available schedules 
•	As a user I can view a schedule corresponding log entries by selecting its card.
•	As a user I can switch a schedule to retired and / unretired 

Schedule card component:

I tried to implement my ideas around these specific requirements.  On the left side of the page I implemented scrollable schedules card list as told to do so. And all the data coming from the endpoint http://localhost:3000/api/shcedules. I have created a static data.js file in the backend folder and retrieve mock data from that file. I could do it from mongodb atlas collection hence I used it for the table. So initially you will get presented list of schedules cards from this endpoint. As a user you can distribute the schedules card to these four team members on the table. 
When you click the retire button it will open a mini window with the title, id, descriptions auto fill. And you can choose the name to whom you want to give the task. When you click save, it will save a log record on the table under the name of the team member. It will post the data to this endpoint http://localhost:3000/api/retire . and save it to mongodb atlas schedules collection. But if the schedule has been given already. It will show an error message.  if you check the network tab and response you will see the message come from the server. I could implement and show it to the user but I leave it like that.  Moreover, if the schedule card already give to someone and you click on the schedule card area it will highlight the box on the table and change the background to green, show the title and status of the schedule.  I tried to demonstrate selecting the schedules card correspond to the log entries.  When you click save button from mini window it does retired / archived schedules into the database. 
On the card list, if you click red cross icon on the top left corner of the schedule card it should delete the schedule from the database but I did not implement the api in the server.js. I could do it as well. I am already too much late to submit the project. 

Schedule Table component: 

I sent a get request to the endpoint http://localhost:3000/api/schedulesLog  and get all available schedules from the server. And Filter it by name to display on the table section accordingly. 

Header component: 
When you click on the menu bar top right corner of the header it will open dropdown menu. By selecting the name you can filter the schedule cards to show the schedules for specific team member. I could implement that by filtering the collection. If it true the app will change the state and only show that.  
