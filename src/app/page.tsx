import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-indigo-600">Welcome to Images by Oleg</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10">Unleash your creativity with AI-powered image generation</p>
          <Link href="/generate" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 text-base sm:text-lg md:text-xl">
            Start Creating Now
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-indigo-600">State-of-the-Art AI</h2>
            <p className="text-base sm:text-lg text-gray-600">Our advanced AI models, including DALL-E 2 and DALL-E 3, create stunning, high-quality images from text descriptions. Experience the cutting edge of AI technology.</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-indigo-600">Endless Possibilities</h2>
            <p className="text-base sm:text-lg text-gray-600">From digital art to marketing materials, our platform empowers you to bring any visual concept to life. The only limit is your imagination.</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600 text-center">How It Works</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600">
            <li><strong>Describe your image:</strong> Use natural language to describe the image you want to create.</li>
            <li><strong>Choose your model:</strong> Select between DALL-E 2 or DALL-E 3 for image generation.</li>
            <li><strong>Generate:</strong> Our AI will create a unique image based on your description.</li>
            <li><strong>Refine:</strong> Adjust your prompt or regenerate to get the perfect image.</li>
            <li><strong>Download:</strong> Save your creation in high resolution for any use.</li>
          </ol>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600">Why Choose Images by Oleg?</h2>
          <ul className="text-gray-600 space-y-4">
            <li>✨ High-quality, unique images generated in seconds</li>
            <li>🎨 Versatile applications for artists, marketers, and businesses</li>
            <li>🚀 Constantly updated with the latest AI advancements</li>
            <li>💼 Flexible pricing plans to suit your needs</li>
            <li>🔒 Secure and user-friendly platform</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600 text-center">Our Technology</h2>
          <p className="text-gray-600 mb-4">
            Images by Oleg leverages the power of advanced machine learning models to generate images from text descriptions. Our platform integrates the latest versions of DALL-E, ensuring that you have access to the most sophisticated AI image generation technology available.
          </p>
          <p className="text-gray-600">
            Whether  you&apos;re looking to create concept art, design marketing materials, or simply explore the possibilities of AI-generated imagery, our platform provides the tools and flexibility you need to bring your ideas to life.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-indigo-600">Ready to Transform Your Ideas into Images?</h2>
          <Link href="/generate" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300 text-base sm:text-lg md:text-xl">
            Get Started Now
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
