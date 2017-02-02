(function(){
  console.log("starting...")
  var logic = {};

  //get all elements with only text content > a given length
  logic.getTargetElements = function (min_length){

    min_length = min_length || 40;
    var elements = $('body *').filter(
      function(idx){
        return $(this).text().length > min_length;
      }
    );
    console.log(elements);
    return elements;
  }

  logic.getSourceText = function(){
    //grabs everything on the page
    return $(":root").text();
  }

  logic.go = function() {
    var source = logic.getSourceText();
    var mkv = new markov(source, 'string', /([.,?"();\-!':—^\w]+ ){2}/g);
    var targets = logic.getTargetElements();
    console.log(targets);
    $(targets).each(function(){
      var text = $(this).text();
      text = mkv.gen(Math.round(text.length/7));
      $(this).text(text);
    });

  }
  logic.go();
})();
