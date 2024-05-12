# Star Nationals Official Website
Created: 2024-MAR-24 \
Updated: 2024-MAY-12 \
~ \
This is a ReatJS project of a pseudonym startup company called Star Nationals.
 This project incorporates various full stack functionalities such as login & registration and dynamic
 content through database integration and utilization of React framework tools.

----

The project is deployed and accessed here: https://starnationals-website.onrender.com/ \
The project API can be accessed here: https://starnationals-website-api.onrender.com

----

**To run this project locally**, download project as zip file or using Git and open this project using a cmd line pointed at projects root directory. Run 'npm start' and both frontend and backends should run on ports 3000 and 3001 respectively.

# Development Logs and Resources:
- Routing Implementation completed following this useful guide: https://hygraph.com/blog/routing-in-react.
- DB solution chosen for this project is MongoDB for flexibility and to test it for more complex storage handling and processing.
- Backend implementation of NodeJS and ExpressJS completed following: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
- Package scripting to run project locally with one key implemented!
    - Acomplished utilizing concurrently; https://blog.logrocket.com/running-react-express-concurrently/
- Deployments split between static site and web service for frontend and backend respective:
    - https://community.render.com/t/trying-to-deploy-full-stack-web-app-on-render-any-tips/7935/3

# Debugging Logs and Resources:
- [Useful video of setting up an effective ENV file](https://www.youtube.com/watch?v=hZUNMYU4Kzo)
- [MongoDB collections must be lowercase to be accessed by Mongoose](https://stackoverflow.com/questions/71842510/mongoose-query-always-returns-empty-array)
- [Node vs. Nodemon..](https://stackoverflow.com/questions/3302959/how-to-restart-a-node-js-server)
- **MongoDB CRUD troubleshooting**:
    - https://www.youtube.com/watch?v=ACUXjXtG8J4
    - https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/
    - https://www.youtube.com/watch?v=51JCCLjImnA
- [Axios vs. Fetch](https://stackoverflow.com/questions/40844297/what-is-difference-between-axios-and-fetch)
- **Using the Conditional/Ternary Operator**:
    - https://stackoverflow.com/questions/58519950/how-can-show-no-data-available-message-if-there-will-be-not-data-available-in
    - https://javascript.info/ifelse
- Application Navigation error with going back or reloading page error
    - https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
    - https://stackoverflow.com/questions/44063229/react-router-not-showing-browser-history