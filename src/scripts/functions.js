export function get(url, callback, json = true) {
  let req = new XMLHttpRequest();
  let res;

  url = 'https://api.github.com' + url;

  console.log('sent request to ', url);

  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {

      // Convert response into object
      res = json && JSON.parse(req.responseText) || req.responseText;

      return callback(res);
    }
  };

  // Open the request
  req.open('GET', url, true);

  req.send(null);
};
