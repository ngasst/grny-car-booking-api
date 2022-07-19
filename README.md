# grny-car-booking-api

## useful commands

`docker exec -it mongodb bash`
This command, useful the first time you clone the repo when mongo is not yet configured, allows you access to the running container to configure db user data.

`mongo -u root -p 'example' --authenticationDatabase 'admin'`
Launch mongo console, authenticated with password defined in docker-compose file.

```js
db.createUser({user: "api", pwd: passwordPrompt(), roles: ["readWrite"]})
```
Create an "api" user, get prompt to enter password