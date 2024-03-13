// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
  // Parse the request url
  const parsedUrl = url.parse(req.url, true);

  // Get the path
  let pathname = `.${parsedUrl.pathname}`;

  // Read the file
  fs.readFile(pathname, (err, data) => {
    if (err) {
      // If the file is not found, send a 404 error
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.write('404 Not Found');
      res.end();
    } else {
      // If the file is found, write the data to the response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

```html
<!-- Path: index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <form action="/submit" method="post">
      <input type="text" name="comment" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

```html
<!-- Path: comments.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Comments</title>
  </head>
  <body>
    <h1>Comments</h1>
    <form action="/submit" method="post">
      <input type="text" name="comment" />
      <button type="submit">Submit</button>
    </form>
    <div>
      <h2>Comments</h2>
      <ul>
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
      </ul>
    </div>
  </body>
</html>
```

## Express

```javascript
// Path: comments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;
