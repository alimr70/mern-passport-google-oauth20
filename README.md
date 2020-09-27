# mern-passport-google-oauth20

Authentication boilerblate for MERN stack app using passport-google-oauth20 Strategy.

I tried in this app to do the shortest way for google authentication and trying not to use too complex third party liberaries to be begginner friendly as I can.

## Installation

### 1. Clone the repository & install dependencies

```bash
git clone https://github.com/alimr70/mern-passport-google-oauth20.git

cd mern-passport-google-oauth20

npm install

cd server & npm install

cd ../

cd client & npm install

cd ../
```

### 2. Obtain OAuth 2.0 credentials from the Google API Console.

Visit the [Google API Console](https://console.developers.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application.
Don't store your client secret in your React app. You should store client secret in node app.

### 3. Client Side Setup

1. execute these commands

In the root of the client create a new file and name it ".env.local"

2. open `.env.local` file add

```bash
REACT_APP_API_URL = http://localhost:5000
```

### 4. Server Side Environment Variables Setup

In the config folder of the server create a new file and name it "dev.env"

Now open the dev.env file and add the following:

```bash
PORT=5000
MONGO_URI=Your mongo db uri
GOOGLE_CLIENT_ID=value from google apis
GOOGLE_CLIENT_SECRET=value from google apis
CLIENT_URL = http://localhost:3000/
```

### 5. Run 'dev' script

```bash
npm run dev
```

## Contributing

Please help me with the documentation and code improvment. I'll appreciate that.

## License

[Unlicense](https://choosealicense.com/licenses/unlicense/)
