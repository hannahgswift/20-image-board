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
const Photo = use('App/Model/Photo');

Route.on('/').render('welcome');

Route.get('/photos', function * (req, res) {
  const photos = yield Photo.all();

  yield res.sendView('photos', { photos: photos.toJSON() });
});

Route.post('/photos', function * (req, res) {
  const url = req.input('url');
  const caption = req.input('caption');
  yield Photo.create({ url, caption });

  res.redirect('/photos');
});
