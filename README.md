## Dev environment requirements {#prerequisites}

#### Install Node.js
Download and install from nodejs.org.

#### Install Homebrew
```
ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"
```

#### Install Redis 2.6
```
brew install redis
```

## Spinning up Dev Environment for Basic Development {#install-andbang.com}
If you're working on the interface, design, or related logic, and don't need the API, this is all you'll need to run.

#### Install Prequisites

Follow the instructions for [dev environment requirements](#prequisites).

#### Check out andbang.com
```
git clone git@github.com:andyet/andbang.com.git
```

#### Check for required node environment
```
cd andbang.com
npm install
```

#### Start Redis (from anywhere)
```
redis-server
```

#### Run And Bang
```
cd andbang.com
node server
```

## Spinning up Dev Environment for Accounts and API {#install-accounts-and-api}
In cases where you're going to be working on the API or Accounts apps, you'll need to run the following.

#### Install Prequisites

Follow the instructions for [dev environment requirements](#prequisites).

#### Check out andbang-api
```
git clone git@github.com:andyet/andbang-api.git
```

#### Check for required node environment
```
cd andbang-api
npm install
```

#### Start Redis (from anywhere)
```
redis-server
```

#### Run tests to install fixtures
This only needs to be done the first time or if you flush the database.

```
cd andbang-api
npm test
```

#### Run the Accounts app
```
cd andbang-api/accounts
node server
```

#### Run the API app
```
cd andbang-api/api
node server
```

## Spinning up Dev Environment for Accounts, API, and And Bang
In cases where you want to run And Bang against a local installation of the Accounts and API apps, you'll need to do the following.

#### Install And Bang

Follow the instructions for [installing andbang.com](#install-andbang.com).

#### Install Accounts and API apps

Follow the instructions for [installing Accounts and API](#install-accounts-and-api).

#### Start Redis (from anywhere)
```
redis-server
```

#### Run tests to install fixtures
This only needs to be done the first time or if you flush the database.

```
cd andbang-api
npm test
```

#### Setup And Bang to point to your local installation
In ```andbang.com/dev_config.json```, change ```local``` to ```true```.

#### Run the Accounts app, API app, and And Bang
```
cd andbang-api
./startall.sh
```
Alternatively, you can run ```node server``` in the appropriate directory to run each app individually (`andbang-api/accounts`, `andbang-api/api`, `andbang.com`).

----------------

#andbang.com
The web app running on: https://andbang.com
The official web client for the andbang API (https://docs.andbang.com)

### It's open source?!

&yes. &yet <3 open source

### You mean I can fork it/patch-it etc?

Yes, in fact, please do! You can even run your own fork if you'd like, or build a different client app altogether.

### How can you do that? It's a paid service, right? How does this make any sense?

It's pretty simple -- we want you using the And Bang API for your team. We believe in open source. We get paid based on its usage, not which client you use to access it.

In fact, we make it silly-simple for you to sell your client to other And Bang subscribers. You just build your client and when you regsiter your app, just specify what you'd like to charge for it write a description and we'll make it available as an alternate client that users can choose.

## Contributing

There are 3 main branches:

- *qa:* runs in our private QA environment
- *notyet:* runs in public beta: https://notyet.andbang.com
- *master:* runs in production: https://andbang.com

If you want to contribute, the flow goes something like this:

1. Make a fork starting with our `qa` branch. For some ideas on items to tackle you can look at existing issues or open up a new one to discuss the bug/idea.
1. Make your changes, enhancements, etc.
1. Submit a pull request from your fork to the `qa` branch.
1. From here, if your change is approved it will immediately get pushed to &yet's internal test server. In addition to some automated testing, we run our teams in this environment as a real-world quality control step. Depending on the size and impact of the change, as well as the other enhancements being tested, this could be a couple of hours or a couple of weeks.
1. Once a change is "blessed" by our QA managers, they'll do a pull request from `qa` to `notyet`. That pull request triggers an auto-deployment to http://notyet.andbang.com.
1. This last step is repeated from `qa` to `master`, once it's pulled in, it just goes to production.
1. Depending on the awesomeness of the contribution we may praise your awesomeness on twitter, or send you a t-shirt, and it's not impossible that we may even want to talk to you about a job opportunity :)

## API Docs
http://docs.andbang.com
