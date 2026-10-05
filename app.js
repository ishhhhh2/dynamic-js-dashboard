import { fetchProducts } from "./api.js";
let allProducts = [];

const productList = document.getElementById("product-list");
const loadingMessage = document.getElementById("loading");
const errorMessage = document.getElementById("error-message");
const retryButton = document.getElementById("retry-button");

async function loadProducts() {
    try {
        loadingMessage.hidden = false;
        errorMessage.hidden = true;

        const products = await fetchProducts();

         allProducts = products;

populateCategories(products);

loadSavedFilters();

updateProducts();

loadingMessage.hidden = true;
    } catch (error) {
        loadingMessage.hidden = true;
        errorMessage.hidden = false;

        console.error(error);
    }
}

loadProducts();
 function populateCategories(products) {
    const categoryFilter = document.getElementById("category-filter");

    categoryFilter.innerHTML = '<option value="all">All Categories</option>';

    const categories = [...new Set(
        products.map(function (product) {
            return product.category;
        })
    )];

    categories.forEach(function (category) {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}


function renderProducts(products) {
    productList.innerHTML = "";

    products.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product-card";

        const title = document.createElement("h3");
        title.textContent = product.title;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;

        const category = document.createElement("p");
        category.textContent = `Category: ${product.category}`;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
        card.appendChild(category);

        productList.appendChild(card);
    });
}

 const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const sortSelect = document.getElementById("sort-select");

function updateProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortValue = sortSelect.value;

    let filteredProducts = allProducts.filter(function (product) {

        const matchesSearch =
            product.title.toLowerCase().includes(searchTerm);

        const matchesCategory =
            selectedCategory === "all" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    if (sortValue === "price-low") {
        filteredProducts.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    if (sortValue === "price-high") {
        filteredProducts.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    if (sortValue === "name") {
        filteredProducts.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
    }

    renderProducts(filteredProducts);
}

searchInput.addEventListener("input", updateProducts);

categoryFilter.addEventListener("change", updateProducts);

sortSelect.addEventListener("change", updateProducts);

 

function saveFilters() {
    localStorage.setItem("productSearch", searchInput.value);
    localStorage.setItem("productCategory", categoryFilter.value);
    localStorage.setItem("productSort", sortSelect.value);
}

function loadSavedFilters() {
    searchInput.value = localStorage.getItem("productSearch") || "";
    categoryFilter.value = localStorage.getItem("productCategory") || "all";
    sortSelect.value = localStorage.getItem("productSort") || "default";
}

searchInput.addEventListener("input", saveFilters);
categoryFilter.addEventListener("change", saveFilters);
sortSelect.addEventListener("change", saveFilters);


retryButton.addEventListener("click", function () {
    loadProducts();
});
 

     


 