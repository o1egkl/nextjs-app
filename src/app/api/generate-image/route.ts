import { NextResponse } from 'next/server'; // Import NextResponse for server-side responses
import OpenAI from 'openai'; // Import the OpenAI library for interacting with the OpenAI API

// Initialize the OpenAI client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

// Define an asynchronous POST route handler function
export async function POST(request: Request) {
  // Extract the 'prompt' and 'model' from the request body (JSON format)
  const { prompt, model } = await request.json(); 

  // Input validation: Check if a prompt is provided
  if (!prompt) {
    // If no prompt, return a 400 Bad Request with an error message
    return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
  }

  // Use a try-catch block to handle potential errors during image generation
  try {
    // Call the OpenAI API to generate an image
    const response = await openai.images.generate({
      model: model, // Specify the DALL-E model to use (e.g., 'dall-e-2', 'dall-e-3')
      prompt: prompt, // Provide the user's text prompt as input to the model
      n: 1, // Request only one image generation
      size: "1024x1024", // Set the desired image size
    });

    // If successful, extract the image URL from the response and send it back as JSON
    return NextResponse.json({ imageUrl: response.data[0].url }); 
  } catch (error: any) {
    // If an error occurs during image generation, log the error and prepare an error message
    console.error('Error generating image:', error);
    let errorMessage = 'Failed to generate image';
    if (error.response) {
      // If the error object has a response property, append the error message from the API
      errorMessage += `: ${error.response.data.error.message}`; 
    } else if (error.message) {
      // Otherwise, append the general error message
      errorMessage += `: ${error.message}`;
    }
    // Return a 500 Internal Server Error with the error message
    return NextResponse.json({ error: errorMessage }, { status: 500 }); 
  }
}
