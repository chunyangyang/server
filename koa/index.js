const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const serve = require('koa-static');
const route = require('koa-route');
const compose = require('koa-compose');
const app = new Koa();

// app.use(
//     ctx=>{
//         ctx.response.body='heloo'
//     }
// )
// const main = ctx => {
//     console.log(ctx.request)
//     if (ctx.request.accepts('xml')) {
//       ctx.response.type = 'xml';
//       ctx.response.body = '<data>Hello World</data>';
//     } else if (ctx.request.accepts('json')) {
//       ctx.response.type = 'json';
//       ctx.response.body = { data: 'Hello World' };
//     } else if (ctx.request.accepts('html')) {
//       ctx.response.type = 'html';
//       ctx.response.body = '<p>Hello World</p>';
//     } else {
//       ctx.response.type = 'text';
//       ctx.response.body = 'Hello World';
//     }
//   };


// const html = ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = fs.createReadStream('./static/html/test.html');
//   };
// //设置静态资源的路径 
// const staticPath = './static';
// console.log(__dirname);
// const main = serve(path.join(__dirname),staticPath);

// const main = ctx => {
//     if (ctx.request.path !== '/') {
//       ctx.response.type = 'html';
//       ctx.response.body = '<a href="/">Index Page</a>';
//     } else {
//       ctx.response.body = 'Hello World';
//     }
//   };

// const about = ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page about</a>';
//   };
  
//   const main = (ctx, next)=> {
    // console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    // ctx.response.body = 'Hello World22';
    // ctx.throw(500);
//     ctx.response.status = 404;
//     ctx.response.body = 'Page Not Found';
//     next();
//   };

//   const logger = (ctx, next) => {
//     console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
//     next();
//   }
//   app.use(logger);

// app.use(route.get('/', main));
// app.use(route.get('/about', about));

// const redirect = ctx => {
//     ctx.response.redirect('/');
//     ctx.response.body = '<a href="/">Index Page</a>';
//   };
  
//   app.use(route.get('/redirect', redirect));

//   app.use(main);
//   app.use(html);


// const one = (ctx, next) => {
//     console.log('>> one');
//     // next();
//     console.log('<< one');
//   }
  
//   const two = (ctx, next) => {
//     console.log('>> two');
//     // next(); 
//     console.log('<< two');
//   }
  
//   const three = (ctx, next) => {
//     console.log('>> three');
//     // next();
//     console.log('<< three');
//   }
  
//   app.use(one);
//   app.use(two);
//   app.use(three);


// const middlewares = compose([main,logger]);
//   app.use(middlewares);

// const handler = async (ctx, next) => {
//     try {
//       await next();
//     } catch (err) {
//       ctx.response.status = err.statusCode || err.status || 500;
//       ctx.response.body = {
//         message: err.message
//       };
//       ctx.app.emit('error', err, ctx);
//     }
//   };
  
//   const main = ctx => {
//     ctx.throw(500);
//   };
// app.use(handler);

const main = function(ctx) {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
  }
app.use(main);

app.listen(3000,()=>{
    console.log('启动成功端口3000');
    console.log('filename==>'+__filename);
    console.log('filename==>'+__dirname);
});
app.on('error', function(err) {
    console.log('logging error 3333', err.message);
    console.log(err);
  });
