## Description

A trending gifs with infinite scroll

### Error handling decision

I feel like not display a toast message when failed during scroll is better UX, most app that have infinite scroll does follow this behave since when the connection is restore, the scrolling fucntion go back to normal

### Dockerize with Heroku

Since Heroku doesnt allow you to mapping it's network on a container, I must utilize the provided $PORT variable to map the random port from heroku to the nginx container serving port. 

This setup is ready to use within Heroku environtment. But if you wish to run the container locally, please provide `e PORT=<your mapping port> -p <your mapping port>:<your mapping port>` options in your command. 

### Testing

Still need to improve on this. But mainly I want to test the infinite scroll behavior.



