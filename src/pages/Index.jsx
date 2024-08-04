import { useState } from 'react';
import { Cat } from 'lucide-react';

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane to protect their eyes."
];

const Index = () => {
  const [currentFact, setCurrentFact] = useState(0);

  const nextFact = () => {
    setCurrentFact((prev) => (prev + 1) % catFacts.length);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <Cat className="h-12 w-12 text-purple-600 mr-4" />
          <h1 className="text-4xl font-bold text-gray-800">All About Cats</h1>
        </div>
        
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="Cute cat" 
          className="mx-auto object-cover w-full h-64 rounded-lg mb-6"
        />
        
        <p className="text-xl text-gray-700 mb-6">
          Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
          They've been human companions for thousands of years and continue to captivate us with their charm.
        </p>
        
        <div className="bg-purple-100 rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-2">Did You Know?</h2>
          <p className="text-lg text-purple-900">{catFacts[currentFact]}</p>
          <button 
            onClick={nextFact}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Next Fact
          </button>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Cats Make Great Pets</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Low maintenance and independent</li>
          <li>Quiet and suitable for apartments</li>
          <li>Can help reduce stress and anxiety</li>
          <li>Playful and entertaining</li>
          <li>Long lifespan for lasting companionship</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
