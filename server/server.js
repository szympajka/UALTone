const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { storage } = require('./test');
const { client } = require('./test2')
const words = require('./words');

const app = express();
const port = process.env.PORT || 9999;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`API started on port ${port}`);
});

app.route('/').get((req, res) => {
  res.send(words)
  // client
  // .labelDetection('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006.jpg/220px-Clock_Tower_-_Palace_of_Westminster%2C_London_-_September_2006.jpg')
  // .then(results => {
  //   // const labels = results[0].labelAnnotations;

  //   res.send(results);

  //   // console.log('Labels:');
  //   // labels.forEach(label => console.log(label.description));
  // })
  // .catch(err => {
  //   console.error('ERROR:', err);
  // });

  // storage
  //   .getBuckets()
  //   .then((results) => {
  //     const buckets = results[0];

  //     res.send(results);
  //   })
  //   .catch((err) => {
  //     console.error('ERROR:', err);
  //   });
}); // eslint-disable-line

module.exports = app;