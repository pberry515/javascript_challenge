// from data.js
var tableData = data;

// YOUR CODE HERE!
function showTable(tableData){
    var tbody = d3.select(".table").select("tbody");
    tbody.html("");
    tableData.forEach((x) => {
      var row = tbody.append("tr");
      Object.entries(x).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
  
  //write table to html
  showTable(tableData);
  
  
  //listen for filter button
  var button1 = d3.select("#filter-btn");
  button1.on("click", function() {
    filteredData = tableData
    // Select the input element and get the raw HTML node
    var inputElement1 = d3.select("#datetime");
      var inputValue = inputElement1.property("value");
      var filteredData = filteredData.filter(function(event){
          if(inputValue !== null && inputValue !== ''){
              return event.datetime === inputValue;};
            return event.datetime;
          });
  
    var inputElement1 = d3.select("#city");
      var inputValue = inputElement1.property("value");
      var filteredData = filteredData.filter(function(event){
          if(inputValue !== null && inputValue !== ''){
             return event.city === inputValue;};
                return event.city;
            });
            
    var inputElement1 = d3.select("#state");
      var inputValue = inputElement1.property("value");
      var filteredData = filteredData.filter(function(event){
          if(inputValue !== null && inputValue !== ''){
              return event.state === inputValue;};
                 return event.state;
            });
            
    var inputElement1 = d3.select("#country");
      var inputValue = inputElement1.property("value");
      var filteredData = filteredData.filter(function(event){
          if(inputValue !== null && inputValue !== ''){
              return event.country === inputValue;};
                  return event.country;
            });   
   
    var inputElement1 = d3.select("#shape");
      var inputValue = inputElement1.property("value");
      var filteredData = filteredData.filter(function(event){
          if(inputValue !== null && inputValue !== ''){
              return event.shape === inputValue;};
                  return event.shape;
            });
    //write filtered table to html
    showTable(filteredData);
  });
  
  //clear form filters and show all data
  function resetForm(element) {
    element.form.reset();
    showTable(tableData);
  };