#Use a light version of Node
FROM mhart/alpine-node:latest
#Set the working directory
WORKDIR /client
#Copy package.json
COPY package*.json /client/
#install dependencies
RUN npm install
#Copy contents into container
COPY . /client/
#Make port 3000 available
EXPOSE 3000
#Run the app
CMD ["npm", "start"]