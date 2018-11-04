document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded
  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');
  // Create a DataSet (allows two way data-binding)
  // create a DataSet
  var options = {};
  var data = new vis.DataSet(options);
  // Configuration for the Timeline
  var options = {};
  // Create a Timelins

  getErrorCodes(50).then(function(response) {
    for (let i = 0; i < response.data.length; i++)
    {
      let date = response.data[i].added.substring(0, 10);
      let error = response.data[i].error_location;

      data.add({id: i, start: date, text: error});
      console.log(date, error);
    }
    var timeline = new vis.Timeline(container, data, options);
  })

});
