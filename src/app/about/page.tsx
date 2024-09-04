import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Nav />
      <main className="flex-grow container mx-auto px-4 py-8" style={{ paddingTop: 'calc(var(--nav-height) + 2rem)' }}>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-indigo-600">About Images by Oleg</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Images by Oleg, we&apos;re on a mission to democratize visual creativity through cutting-edge AI technology. We believe that everyone should have access to powerful tools that can bring their imagination to life. Our AI-powered image generation platform is designed to empower artists, designers, and creators of all skill levels to produce stunning visuals with ease.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Technology</h2>
          <p className="text-gray-600 mb-4">
            We leverage state-of-the-art machine learning algorithms and neural networks to generate high-quality images based on text descriptions. Our AI models, including DALL-E 2 and DALL-E 3, are trained on vast datasets, allowing them to understand and recreate complex visual concepts, styles, and compositions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Team</h2>
          <p className="text-gray-600 mb-4">
            Led by Oleg, our diverse team of AI researchers, software engineers, and artists work tirelessly to push the boundaries of what&apos;s possible in AI-generated imagery. We&apos;re passionate about combining technical excellence with artistic vision to create tools that inspire and empower our users.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Our Commitment</h2>
          <p className="text-gray-600 mb-4">
            We are committed to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Continuously improving our AI models to deliver the highest quality images</li>
            <li>Providing an intuitive and user-friendly platform for all skill levels</li>
            <li>Ensuring the ethical use of AI in creative processes</li>
            <li>Supporting our community of creators with excellent customer service</li>
            <li>Innovating and adapting to the ever-evolving field of AI and digital art</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}