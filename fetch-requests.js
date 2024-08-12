/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
async function addProduct() {
  let url = '/products';
  let method = 'POST';
  let params = {
    name: 'Caribbean Delight Coffee',
    description: 'Made by Manatee Coffee',
    price: 11.99,
    categories: 'grocery',
  };
  let body = new URLSearchParams(params);

  let response = await fetch(url, {
    method,
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
}

addProduct();
/* ============================== Phase 2 ============================== */

// Your code here
async function addProduct() {
  let url = '/products';
  let method = 'POST';
  let params = {
    name: 'Caribbean Delight Coffee',
    description: 'Made by Manatee Coffee',
    price: 11.99,
    categories: 'grocery',
  };
  let body = new URLSearchParams(params);

  let response = await fetch(url, {
    method,
    body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  console.log(response.status);
  console.log(response.headers.get('Content-Type'));
  console.log(response.url);

  if (response.redirected) {
    console.log(response.url);
  }
}

addProduct();

/* ============================== Phase 3 ============================== */

// Your code here
