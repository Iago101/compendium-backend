const users = require('./users/users.service.js');
const guilds = require('./guilds/guilds.service.js');
const folders = require('./folders/folders.service.js');
const games = require('./games/games.service.js');
const ideas = require('./ideas/ideas.service.js');
const foldersPublic = require('./folders-public/folders-public.service.js');
const foldersPrivate = require('./folders-private/folders-private.service.js');
const gamesPublic = require('./games-public/games-public.service.js');
const gamesPrivate = require('./games-private/games-private.service.js');
const guildsPublic = require('./guilds-public/guilds-public.service.js');
const guildsPrivate = require('./guilds-private/guilds-private.service.js');
const usersPublic = require('./users-public/users-public.service.js');
const usersPrivate = require('./users-private/users-private.service.js');
const ideasPublic = require('./ideas-public/ideas-public.service.js');
const ideasPrivate = require('./ideas-private/ideas-private.service.js');
const ideasInteraction = require('./ideas-interaction/ideas-interaction.service.js');
const likes = require('./likes/likes.service.js');
const tags = require('./tags/tags.service.js');
<<<<<<< HEAD
const tagsService = require('./tags-service/tags-service.service.js');
const comments = require('./comments/comments.service.js');
const commentsPublic = require('./comments-public/comments-public.service.js');
const commentsPrivate = require('./comments-private/comments-private.service.js');
const messages = require('./messages/messages.service.js');
const messagesPrivate = require('./messages-private/messages-private.service.js');
=======
>>>>>>> basicode
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(guilds);
  app.configure(folders);
  app.configure(games);
  app.configure(ideas);
  app.configure(foldersPublic);
  app.configure(foldersPrivate);
  app.configure(gamesPublic);
  app.configure(gamesPrivate);
  app.configure(guildsPublic);
  app.configure(guildsPrivate);
  app.configure(usersPublic);
  app.configure(usersPrivate);
  app.configure(ideasPublic);
  app.configure(ideasPrivate);
  app.configure(ideasInteraction);
  app.configure(likes);
  app.configure(tags);
<<<<<<< HEAD
  app.configure(tagsService);
  app.configure(comments);
  app.configure(commentsPublic);
  app.configure(commentsPrivate);
  app.configure(messages);
  app.configure(messagesPrivate);
=======
>>>>>>> basicode
};
