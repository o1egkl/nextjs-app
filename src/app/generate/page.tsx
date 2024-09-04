'use client';

import { useState } from 'react';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const models = [
  { id: 'dall-e-2', name: 'DALL-E 2' },
  { id: 'dall-e-3', name: 'DALL-E 3' },
];

export default function Generate() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [error, setError] = useState('');

  const generateImage = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model: selectedModel }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate image');
      }

      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
      } else {
        throw new Error('No image URL received');
      }
    } catch (error: any) {
      console.error('Error generating image:', error);
      setError(error.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-600">Create Your Image</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Image Generation</h2>
            <div className="mb-4">
              <label htmlFor="model-select" className="block text-sm font-medium text-gray-700 mb-2">
                Choose AI Model
              </label>
              <select
                id="model-select"
                className="w-full p-2 border rounded"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                {models.map((model) => (
                  <option key={model.id} value={model.id}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              className="w-full h-32 p-2 border rounded mb-4"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to generate..."
            />
            <button
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              onClick={generateImage}
              disabled={isLoading || !prompt.trim()}
            >
              {isLoading ? 'Generating...' : 'Generate Image'}
            </button>
            {error && (
              <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                <p className="font-bold">Error:</p>
                <p>{error}</p>
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Generated Image</h2>
            {generatedImage ? (
              <img src={generatedImage} alt="Generated" className="w-full rounded shadow-lg" />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
                Your generated image will appear here
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}