// Import the Sanity client to interact with the Sanity backend
import { createClient } from '@sanity/client';
import fetch from 'node-fetch'; // Ensure you have node-fetch installed
import { Buffer } from 'buffer'; // Import Buffer
import dotenv from 'dotenv'; // Import dotenv for environment variables

dotenv.config(); // Load environment variables from .env file

// Create a Sanity client instance to interact with the target Sanity dataset
const client = createClient({
  projectId: 'jvckhl4n', // Your Sanity project ID
  dataset: 'production', // Sanity dataset (e.g., "production")
  useCdn: true, // Enable CDN for faster response times
  apiVersion: '2023-10-01', // Sanity API version
  token: 'skkL7WqIGkg5dIjB9qjdKy5ODLlrhFNDrmky1waCPDE6vsLy9WguV6KOPmOJWkW77MG2lR4Lk5sPUslSRdG6R70CHhETmil4yF90Mq9elcfPnlbT105qpTKr7TMIjmMJDHPyJtSpOAYj5MyFqf5UuFuSexBYyeVvo0GSNLX9ALd4a8kTCMNC', // API token for authentication
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    // Fetch the image from the provided URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    // Convert the image to a buffer (binary format)
    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    // Upload the image to Sanity and get its asset ID
    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(), // Use the file name from the URL
      contentType: response.headers.get('content-type'), // Ensure content type is set
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id; // Return the asset ID
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null; // Return null if the upload fails
  }
}

// Function to upload a product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl); // Upload product image

    if (imageId) {
      // Prepare the new product object
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        discountPercentage: product.discountPercentage, // Corrected typo
        description: product.description,
        isNew: product.isNew,
      };

      // Save the product to Sanity
      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Main function to import products from REST API to Sanity
async function importProducts() {
  try {
    // Fetch products from the REST API
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json(); // Parse response to JSON

    // Upload each product to Sanity
    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Start the product import process
importProducts();
