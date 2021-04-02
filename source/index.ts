const Path = require('path');
const Express = require('express');
const ExpressHandlebars = require('express-handlebars');
const Mongoose = require('mongoose');
// import Express from 'express';
const Config = require('../config');

const ROOT_PATH = Path.join(__dirname, '..');
const DIST_PATH = `${ROOT_PATH}/dist`;
const RENDER_PATH = `${ROOT_PATH}/source/render`;
const MODELS_PATH = `${DIST_PATH}/models`;
const INTERFACES_PATH = `${DIST_PATH}/interfaces`;

const Product = require(`${MODELS_PATH}/product`);

const App = Express();
const PORT = Config.project.port;

// Mongoose.connect('', {
//   useNewUrlParser: true,
//   useFindAndModify: false
// }).then(result => {
//   console.log('DataBase was connected!');
// }, err => {
//   console.log('DataBase was not connected!');
//   console.log(err);
// });

App.set('views', `${RENDER_PATH}/views/`);
App.set('view engine', 'hbs');

App.engine('hbs', ExpressHandlebars({
  extname: 'hbs',
  defaultLayout: 'index',
  layoutsDir: RENDER_PATH + '/layouts/',
  helpers: {
    ifget: (obj, str, options) => {
      if (obj && obj[str]) {return options.fn(this);}
      return options.inverse(this);
    },
    unget: (obj, str, options) => {
      if (!(obj && obj[str])) {return options.inverse(this);}
      return options.fn(this);
    },
    get: (obj, str) => {
      if (obj && str) {
        return obj[str];
      }
      return '';
    }
  }
}));

App.use(Express.urlencoded({extended: true}));

App.use((req, res, next) => {
  let scheme = req.headers['x-forwarded-proto'] || 'http';
  res.locals = {
    head: {title: ''},
    company: {
      name: Config.project.name,
      uri: req.headers.host,
      url: scheme + '://' + req.headers.host,
      time: Date.now(),
    }
	};
  next();
});

App.get('/', (req, res, next) => {
  let loc = res.locals;
  loc.head.title = `${loc.company.name} — Главная`;
  loc.post = {};

  // loc.products = Product.find({});

  res.render('index');
});

App.post('/add', (req, res, next) => {
  // let loc = res.locals;
  // loc.head.title = `${loc.company.name} — Главная`;
  let fields = req.body;

  let product = new Product(fields);
  product.save().then(result => {
    res.redirect('/');
  }, err => {
    console.log('Error');
    console.log(err);
  });
});

App.listen(PORT, () => {
  console.log('\x1b[33m%s\x1b[0m', `Start PORT: ${PORT}`);
});
