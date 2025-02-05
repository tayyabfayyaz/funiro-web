import lunr from "lunr";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "your-project-id",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

async function fetchProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    isNew,
    discountPercentage,
    "slug": slug.current
  }`;
  const products = await client.fetch(query);
  return products;
}


let idx;

async function initializeSearch() {
  const products = await fetchProducts();

  idx = lunr(function () {
    this.ref("_id"); // Unique identifier for each product
    this.field("title"); // Fields to index for searching
    this.field("description");
    this.field("tags");

    // Add products to the index
    products.forEach((product) => {
      this.add(product);
    });
  });
}

document.getElementById("search-button").addEventListener("click", () => {
    const query = document.getElementById("search-input").value;
    const results = searchProducts(query);
  
    // Display results
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";
  
    if (results.length > 0) {
      results.forEach((result) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${result.title}</h3>
          <p>${result.description}</p>
          <p>Price: $${result.price}</p>
          <img src="${result.imageUrl}" alt="${result.title}" width="100" />
        `;
        resultsContainer.appendChild(div);
      });
    } else {
      resultsContainer.innerHTML = "<p>No results found.</p>";
    }
  });
  
  function searchProducts(query) {
    const searchResults = idx.search(query); // Perform the search
    return searchResults.map((result) => {
      // Map results to the original products
      return products.find((product) => product._id === result.ref);
    });
  }