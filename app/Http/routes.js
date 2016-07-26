'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('welcome');

Route.get('/photos', function * (req, res) {
  const { url, caption } = yield req.session.all();

  yield res.sendView('photos', { url, caption });
});

Route.post('/photos', function * (req, res) {
  const url = req.input('url');
  const caption = req.input('caption');

  yield req.session.put({ url, caption });

  res.redirect('/photos');
});
