require('dotenv').config()  

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const hostname = process.env.HOST;  
const port = process.env.PORT;

mongoose.connect(`mongodb://${hostname}/frexchange`, { useNewUrlParser : true }, (err,connection) => {
  if(err) throw err;
  else console.log(connection,'connection established');
} )

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

app.set("views" , path.join(__dirname, "./server/views"));

app.set("view engine", "ejs");

if(process.env.NODE_ENV === "development"){
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  const compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler,{
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./server/routes/api/api'));

require('./server/modules/passport')(passport);

app.use(require('./server/routes/index'));

app.listen(port, () => {
  console.log(`app is runing on http://${hostname}:${port}/`)
});