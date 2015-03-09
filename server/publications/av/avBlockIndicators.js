Meteor.publish('getAllAvBlockIndicators', function() {
  return AvBlockIndicators.find({}, {sort: {blocksShort: 1}, fields: {_id: 1, blocksShort: 1, blocksName: 1}});
});