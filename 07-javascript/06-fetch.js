const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const books = await response.json();
    document.querySelector("#loading").remove();
    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.alignItems = "center";

    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("mb-4");

      bookElement.innerHTML = `
        <h2>${book.name}</h2>
        <p>by ${book.authors.join(", ")}</p>
        <p>${new Date(book.released).getFullYear()}</p>
        <p>${book.numberOfPages} pages</p>
      `;

      app.appendChild(bookElement);
    });
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

fetchData(url);
