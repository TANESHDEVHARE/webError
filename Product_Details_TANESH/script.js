function openProductPage(productId) {
  // Redirect to the product detail page with the product ID
  window.location.href = `product.html?id=${productId}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    // Fetch product details based on the product ID (this is just a simulation)
    const productDetails = getProductDetails(productId);

    if (productDetails) {
      document.getElementById("product-img").src = productDetails.image;
      document.getElementById("product-name").innerText = productDetails.name;
      document.getElementById("product-description").innerText =
        productDetails.description;
      document.getElementById("product-price").innerText = productDetails.price;
    }
  }
});

function getProductDetails(productId) {
  // Simulated product details (in real case, you might fetch from an API or database)
  const products = {
    1: {
      image: "https://i.ibb.co/mvc6Qgd/1.jpg",
      name: "Formal Suit",
      description:
        "Introducing our impeccably tailored formal suit. Crafted from best quality fabric, this elegant grey suit features a double-breasted vest, complemented by a stylish black shirt and a sophisticated floral tie, perfect for any formal occasion.",

      price: "Rs. 7000",
    },
    2: {
      image: "https://i.ibb.co/dQLDshX/2.jpg",
      name: "Party Suit",
      description:
        "Elevate your party look with this striking green textured blazer, paired with a sleek black shirt and trousers. Featuring a unique pattern and stylish accessories, this ensemble is designed to make a bold statement at any event.",
      price: "Rs. 7000",
    },

    3: {
      image: "https://i.ibb.co/bv85ysZ/3.jpg",
      name: "Casual Suit",
      description:
        "Enhance your casual style with this sophisticated ensemble featuring a black blazer, patterned scarf, and matching pocket square. Perfect for a polished yet relaxed look, this outfit effortlessly combines elegance with comfort.",

      price: "Rs. 7000",
    },

    4: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    5: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    6: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    7: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    8: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    9: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    10: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    11: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    12: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    13: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    14: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    15: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    16: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    17: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    18: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    19: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    20: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    21: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    22: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    23: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },

    24: {
      image: "path/to/image1.jpg",
      name: "Product Name 2",
      description: "Description of product 2.",
      price: "$200",
    },
    // Add more products as needed
  };

  return products[productId];
}
