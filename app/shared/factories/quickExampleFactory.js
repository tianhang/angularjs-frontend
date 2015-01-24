/**
    This is a slightly different way of arranging the opening lines. If you compare this to
    the controllers, you'll see they all have the same info, but just differently arranged.
    This is here for example, but best practice within a project is to keep it consistent,
    with whatever pattern the team prefers.
**/

angular
  .module('meanExchange')
  .factory('quickExampleFactory', quickExampleFactory);

function quickExampleFactory() {
    /* a few lines showing what a storage factory might look like */
    var storageFactory = {};
    storageFactory.name = '';
    return storageFactory;
}

