# Vouched NodeJS Example
This example repo consists of two parts
1. Tests to highlight usage of [REST API](https://docs.vouched.id/#section/Submit-a-verification/REST-Submit-job) 
2. Development Server to highlight [JS Plugin](https://docs.vouched.id/#section/Submit-a-verification/JS-Plugin)


## REST API

#### 1. Install dependencies

```
yarn install
```

#### 2. Add your Private Key

- If necessary, [create a Private Key](https://docs.vouched.id/#section/Dashboard/Manage-keys)
- Create ```.env``` file in project and add the following contents to file:
```
API_KEY=<PRIVATE_KEY>
```

#### 3. Run the tests

```
yarn test
```

#### 4. View each endpoint and learn more

- [Jobs Endpoints](https://docs.vouched.id/#tag/jobs)
- [Invites Endpoints](https://docs.vouched.id/#tag/invites)
- [Aamva Enpoints](https://docs.vouched.id/#tag/aamva)
- [Crosscheck](https://docs.vouched.id/#tag/crosscheck)


## JSPlugin

#### 1. Install dependencies

```
yarn install
```

#### 2. Add your Public Key

- If necessary, [create a Public Key](https://docs.vouched.id/#section/Dashboard/Manage-keys)
- Open `static/configureVouched.js`
- Replace `<PUBLIC_KEY>` with your Public Key

#### 3. Start Development Server

```
PORT=3000 node server.js
```

In a browser, head to http://localhost:3000/static/index.html to see the Vouched JS Plugin in action.

#### 4. Modify configuration for the Plugin

Feel free to modify any configurations in `static/configureVouched.js`. Here is the full list of [configuration options](https://docs.vouched.id/#section/SDKs/JS-Plugin)
