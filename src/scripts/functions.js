export function get(url, callback, json = true) {
  let req = new XMLHttpRequest();
  let res;
  let err;

  url = 'https://api.github.com' + url;

  req.onreadystatechange = function() {
    if (req.readyState === 4) {

      // Response is good
      if (req.status === 200) {
        // Convert response into object
        res = json && JSON.parse(req.responseText) || req.responseText;
      } else {
        err = req.status;
      }

      return callback(res, err);
    }
  };

  // Open the request
  req.open('GET', url, true);

  req.send(null);
};

export function formatDate(date) {}
