#Use a light version of Node
FROM mhart/alpine-node:latest
#Set the working directory
WORKDIR /api
#Copy package.json
COPY package*.json /api/
#install dependencies
RUN npm install
#Copy contents into container
COPY . /api/
#Make port 9000 available
EXPOSE 80
#Run the app
CMD ["npm", "start"]