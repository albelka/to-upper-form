$(document).ready(function() {
  $(".blanks form").submit(function(event){
    var sentenceInput = $("input#sentence").val();
    sentenceInput = sentenceInput.toUpperCase();
    $(".uppercase").text(sentenceInput);

    event.preventDefault();
  });
});
