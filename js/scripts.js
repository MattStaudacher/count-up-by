$(function() {
  $("#btn-submit").click(function(event){
    event.preventDefault();
    var finalCount = parseInt($("#final-count").val());
    var multiple = parseInt($("#multiple").val());

    if(isNaN(finalCount)||isNaN(multiple)||(!isPositive(finalCount))||(!isPositive(multiple)))
    {
      alert("Please enter a postive number.");
    }
    else
    {
      $("#output").text("Output: ");
      for(var index = 0; index <= finalCount; index += multiple)
      {
        $("#output").append(index.toString()+" ");
      }
    }
  });
});

function isNaN(value)
{
  return (value === NaN);
}

function isPositive(value)
{
  return (value >= 0);
}
