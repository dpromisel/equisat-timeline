document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');
  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    {id: 1, content: 'error 1', start: '2014-04-20'},
    {id: 2, content: 'item 2', start: '2014-04-14'},
    {id: 3, content: 'item 3', start: '2014-04-18'},
    {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
    {id: 5, content: 'item 5', start: '2014-04-25'},
    {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
  ]);
  // Configuration for the Timeline
  var options = {};
  // Create a Timeline
  var timeline = new vis.Timeline(container, items, options);

  var data = getErrorCodes();

  console.log("data", data);
});
  
function getErrorCodes() {
  fetch('http://api.brownspace.org/equisat/error-codes/latest')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
}

