$(document).ready(function(){
  $("#fortuneQuestions").submit(function(event){
    event.preventDefault();
    lucky = [];
    unlucky = [];
    $("input:checkbox[name=fortune]:checked").each(function(){
      var luck = $(this).val();
      if (luck === "lucky"){
        lucky.push(luck);
      }
      else {
        unlucky.push(luck);
      }
    });

    if (lucky.length > 3){
      $("#fortunate").show();
      $("#unFortunate").hide();
      $("#normal").hide();
    }else if (unlucky.length > 3){
      $("#fortunate").hide();
      $("#unFortunate").show();
      $("#normal").hide();
    }else if (unlucky.length === lucky.length){
      $("#fortunate").hide();
      $("#unFortunate").hide();
      $("#normal").show();
    }
  });
});
