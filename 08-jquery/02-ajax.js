const url = "https://anapioficeandfire.com/api/books/";
const $app = $("#books");
const $loading = $("#loading");
const addBookToDOM = (item) => {
  console.log(item);
  const $element = $("<div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });
  const $title = $("<h2>").text(item.name);
  const $author = $("<p>").text(`by ${item.authors[0]}`);
  const $published = $("<p>").text(item.released.substr(0, 4));
  const $pages = $("<p>").text(`${item.numberOfPages} pages`);
  $element.append($title, $author, $published, $pages);
  $app.append($element);
};

$.ajax({
  url: url,
  method: "GET",
  dataType: "json",
})
  .done((data) => {
    data.forEach((item) => {
      addBookToDOM(item);
    });
  })
  .fail((error) => {
    console.error(error);
    $app.append($("<p>").text("An error occurred. Please try again."));
  })
  .always(() => {
    $loading.remove();
  });
