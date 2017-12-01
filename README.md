# Scene-It

Scene-it is a React-Rails app discussion platform based off of Reddit. It is a single page web app, with a Rails back end acting strictly as an API. The app utilizes Redux middleware and RESTful react-router routing to manage state and navigation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

This project utilizes a PostgreSQL database. You'll need to have PostgreSQL set up locally, but there are plenty of guides out there like [this one](http://www.techrepublic.com/blog/diy-it-guy/diy-a-postgresql-database-server-setup-anyone-can-handle/) if you're unfamiliar.

### Installing

Start off by forking and/or cloning this repo.

Next, make sure all gem/dependencies are installed on both sides
(from the root directory)
```
bundle install
```
(from the client directory)
```
npm install
```
(Assuming PostgreSQL is properly set up)
Create the database
```
rake db:create
```
Run migrations
```
rake db:migrate
```
Fill database with test users
```
rake db:seed
```
Start up the Rails server on port 4000
```
rails s -p 4000
```
Start up the front end server
```
npm start
```

Now just navigate to localhost:3000 on your web browser and get started! You can experiment with the API via localhost:4000 as well.

## Running the tests

There currently aren't any tests for this repo, but the intent is to add some in the near future.

## Deployment

Not ready for deployment in its current state, but stay tuned!

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/buchheimt/3786e82ddc64f4d09d246a2a639ed143) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Everyone at [Flatiron School/Learn.co](https://flatironschool.com/) for creating a fantastic curriculum and awesome learning environment.
* [uinames.com](uinames.com) for great test user data!
