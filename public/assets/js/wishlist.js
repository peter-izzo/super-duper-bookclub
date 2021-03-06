// Get all the books that were searched

// goes with wishlist.html
// equals all.html and all.js in activities

fetch("/api/wishlist", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success in getting all books:", data);
    data.forEach(({ title, author, genre, summary, cover }, i) => {
      const wellContainer = document.getElementById("well-section"); //recBox
      const sectionBreak = document.createElement("hr");

      const wellSection = document.createElement("div");
      wellSection.classList.add("well");
      wellSection.setAttribute("id", `book-well-${i}`);
      wellContainer.appendChild(wellSection);

      // Create the elements to show book data
      const titleEl = document.createElement("h2");
      const authorEl = document.createElement("h6");
      const genreEl = document.createElement("h6");
      const summaryEl = document.createElement("h6");
      const coverEl = document.createElement("h6");

      // Add text to the elements we just created
      titleEl.textContent = `${i + 1} ${title}`;
      authorEl.textContent = `Author: ${author}`;
      genreEl.textContent = `Genre: ${genre}`;
      summaryEl.textContent = `Summary: ${summary}`;
      coverEl.textContent = `Cover: ${cover}`;

      // Append the elements with textContent to the well
      wellSection.appendChild(titleEl);
      wellSection.appendChild(authorEl);
      wellSection.appendChild(genreEl);
      wellSection.appendChild(summaryEl);
      wellSection.appendChild(coverEl);
      wellSection.appendChild(sectionBreak);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
