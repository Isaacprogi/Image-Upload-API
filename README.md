# Image Upload Api

This is a sample backend application for handling image upload and retrieval.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up a MongoDB database and update the `.env` file with the connection string.

## Running the Application

npm start

## Endpoints

1. Image Upload Endpoint
Method: POST
Endpoint: /api/upload
Request Parameters:
image (multipart/form-data)
Response Format:
JSON
Response Examples:
Success: { "fileName":"...", filePath:"..." }
Error: { "message": "Only jpg, png, and gif are supported" }

2. Get Image Endpoint
Method: GET
Endpoint: /api/get_image/:id
Request Parameters:
id (path parameter)
Response Format:
The image url or JSON with error details.
Response Examples:
Success: { "imageUrl": "..." }
Error: { "message": "Internal server error or No image found" }

To get all images simply go to the root '/api'
Method:GET
