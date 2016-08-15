$(document).ready(function() {
  $("form").submit(function(event) {
      var items = ["answer1", "answer2", "answer3", "answer4"];
      var lists = [];

      items.forEach(function(item) {
        lists.push($("input#" + item).val());
      });

      // lists.sort(items);
      // $("#answers").text(lists);
      lists = lists.sort();
      

      lists.forEach(function(list) {
        $("#grocery_list").append("<li>" + list.toUpperCase() + "</li>")
      });

          event.preventDefault();
        // alert(list);
  });
});
