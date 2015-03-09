UI.registerHelper('formatDate', function(date) {
  return moment(date).format('DD. MMMM YYYY');
});