$("#search-btn").click(function () {
  let searchQuery = $("#search-query").val();
  let url = `https://api.github.com/search/users?q=${searchQuery}`;
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      $("#search-results tbody").empty();
      data.items.forEach((item) => {
        $("#search-results tbody").append(`
            <tr>
              <td ><img src="${item.avatar_url}" width="50" height="50" /></td>
              <td >${item.login}</td>
              <td style="display:flex; align-item:center;"><a href="${item.html_url}" style=" margin-top: 5px; padding: 10px; color:#fff; text-decoration:none; border-radius:5px; background-color:black; text-align:center;" target="_blank">View Profile</a></td>
            </tr>
          `);
      });
    },
    error: function (xhr, textStatus, errorThrown) {
      alert("Error: " + xhr.responseText);
    },
  });
});