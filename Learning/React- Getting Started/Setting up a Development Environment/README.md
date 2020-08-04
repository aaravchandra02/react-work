To set up follow these steps:
# Setting Up a Development Environment
---
#### PS: Production and Test environments still remian to be covered.
---

1) Install node.js

2) Check **npm,npx,node** installation using:

   - ```npm -v```
   - ```npx -v```
   - ```node -v```

3) First method: 
   
   **npm i``stall '-g flag' 'create-app-react package' && 'create-react-app command' 'app-name'**

   ```npm i -g create-app-react && create-app-react my-app```

4) Better way as no local copoy of create-app-react package. Accesses the latest released app using web. x stands for 'execute'.

   **npx create-react-app 'app-name'**

   ```npx create-react-app my-app```

5) Once done, use the followiing commands for each process:
   - ``` npm start```
   > Starts the development server.

   - ``` npm run build```
   > Bundles the app into static files for production.

   - ``` npm run eject```
   > Removes this tool and copies build dependencies, configuration files and scripts into app directory. If you do this, you can't go back!

6) I suggest you begin by typing:

   - ``` cd 'app-name'```
   - ``` npm start ```



