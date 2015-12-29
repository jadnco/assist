# Assist

[![Build Status](https://travis-ci.org/jadnco/assist.svg)](https://travis-ci.org/jadnco/assist)

Assist is a [React](https://facebook.github.io/react/) app that helps you find open-source projects to contribute to by searching your starred repos for any issues with the *help wanted* label.

### Installation

Clone this repo to your local machine:

```sh
git clone https://github.com/jadnco/assist.git
```

Install the dependencies using npm:

```sh
npm install
```

Run the default Gulp task to watch files and start a BrowserSync server:

```sh
gulp
```

BrowserSync will give you a URL to access, it should be `http://localhost:3000`.

Once *Assist* is running in your browser, enter your username into the input field and the repos will be loaded in.

### Testing

Run tests by running:

```sh
npm test
```

### Demo

To see a working demo, head over to [jaden.io/assist](http://jaden.io/assist). The demo will most likely not work because of the GitHub API rate limits, it should be ran locally by following the above steps.

### Issues

GitHub limits API responses to 100 records, so some repos might not get displayed.

### License

MIT © Jaden Dessureault. See [LICENSE](LICENSE) for details.