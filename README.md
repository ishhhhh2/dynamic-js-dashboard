# Dynamic JavaScript Product Dashboard

A dynamic product dashboard built using vanilla JavaScript, REST API integration, DOM manipulation, filtering, sorting, localStorage, and responsive CSS.

## Features

- Fetches product data from a REST API
- Uses `fetch()` with `async/await`
- Dynamically renders product cards
- Search products by name
- Filter products by category
- Sort products by price and name
- Combines search, category filtering, and sorting
- Persists filter selections using `localStorage`
- Displays loading skeletons while data is loading
- Handles API errors
- Provides a Retry button when the API request fails
- Responsive product grid
- Keyboard-friendly form controls

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES Modules)
- REST API
- Fetch API
- Async/Await
- DOM Manipulation
- localStorage

## Project Structure

```text
dynamic-js-dashboard/
│
├── index.html
├── style.css
├── api.js
├── app.js
└── README.md


API
The application consumes product data from:
https://dummyjson.com/products

The API request is handled separately inside api.js.


JavaScript Architecture
api.js
Responsible for:
- API endpoint configuration
- Fetching product data
- Checking API response status
- Returning product data
app.js

Responsible for:
- DOM manipulation
- Rendering products
- Search filtering
- Category filtering
- Sorting
- localStorage persistence
- Loading state
- Error handling
- Retry functionality


User Flow

Page Load
   ↓
Fetch Products from REST API
   ↓
Show Loading Skeleton
   ↓
Receive API Response
   ↓
Populate Categories
   ↓
Restore Saved Filters
   ↓
Render Products
   ↓
Search / Filter / Sort
   ↓
Save Filter Preferences



Error Handling

If the API request fails:
1. Loading state is hidden.
2. An error message is displayed.
3. A Retry button is provided.
4. Clicking Retry triggers the API request again.


Responsive Design

The dashboard was tested at:
- 320px
- 768px
- 1024px
The product cards automatically adapt to the available screen width.



Learning Outcomes

This project demonstrates practical use of:
- JavaScript modules
- REST API consumption
- asynchronous programming
- DOM manipulation
- array methods such as filter(), map(), and sort()
- event listeners
- browser localStorage
- loading and error states
- responsive CSS