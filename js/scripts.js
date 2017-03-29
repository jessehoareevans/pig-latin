function translatePigLatin(str) {
  var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var answer = year.split("");
  var empty = [];

  if (vowels.includes(year.charAt(0))) {
    return str += "way" ;
  } else {
    for (var i = 0; i <year.length; i++) {
      if (!vowels.includes(year[i])) {
        answer.push(answer.shift());
      } else {
      answer.push("ay");
      return answer.join ("");
    }
    }
  }
}


$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var year = $("input#sentence").val();
    var result = translatePigLatin(answer);

    ("ul").append(result);
  });
});
