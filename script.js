document.getElementById("search-btn").addEventListener("click", function () {
  let searchQuery = document.getElementById("search-query").value;
  let url = `https://api.github.com/search/users?q=${searchQuery}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
     
      let resultsContainer = document.getElementById("search-results");
      resultsContainer.innerHTML = "";
      
      data.items.forEach(item => {
        let resultDiv = document.createElement("div");
        resultDiv.classList.add("row", "justify-content-between", "mt-4", "align-items-center", "border-bottom", "pb-2");
        resultDiv.innerHTML = `
      
          <div class="col-3 ms-auto">
          
            <img class="rounded-circle border border-3 avatar img-fluid " src="${item.avatar_url}" alt="">
          </div>
          <div class="col-3 me-1 text-center ">${item.login}</div>
          <div class="col-3 me-auto">
            <div class="btn btn-primary bg-black border-black">
              <a href="${item.html_url}" class="viewProfile" target="_blank">Go to Profile</a>
            </div>
          </div>
        `;
        resultsContainer.appendChild(resultDiv);
      });
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error: " + error.message);
    });
});


// $(document).ready(function () {
//   $("#search-btn").click(function () {
//     let searchQuery = $("#search-query").val();
//     let url = `https://api.github.com/search/users?q=${searchQuery}`;
//     $.ajax({
//       url: url,
//       method: "GET",
//       success: function (data) {
//         $("#search-results").empty();
//         data.items.forEach((item) => {
//           $("#search-results").append(`
//           <div class="row justify-content-between mt-4 align-items-center border-bottom pb-2">
//             <div class="col-3 ms-auto">
//               <img class="rounded-circle border border-3 avatar img-fluid " src="${item.avatar_url}" alt="">
//             </div>
//             <div class="col-3 me-1 text-center ">${item.login}</div>
//             <div class="col-3 me-auto">
//               <div class="btn btn-primary">
//                 <a href="${item.html_url}" class="viewProfile" target="_blank">Go to Profile</a>
//               </div>
//             </div>
//           </div>
//           `);
//         });
//       },
//       error: function (xhr, textStatus, errorThrown) {
//         alert("Error: " + xhr.responseText);
//       },
//     });
//   });
// });
