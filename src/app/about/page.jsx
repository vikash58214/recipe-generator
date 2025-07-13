export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-green-600">About Us</h1>

        <p className="text-lg mb-6">
          Welcome to <strong>FlavorForge</strong> – Your Smart Recipe Generator!
        </p>

        <p className="mb-4">
          At FlavorForge, we believe that cooking should be simple, inspiring,
          and accessible to everyone — no matter your skill level or what's left
          in your fridge. Whether you're a seasoned home cook or a busy student,
          our generator turns everyday ingredients into delicious possibilities.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-2">
          💡 Why We Built This
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            Staring at a nearly empty pantry and asking, “What can I make with
            this?”
          </li>
          <li>Feeling uninspired to cook the same old meals</li>
          <li>Wasting ingredients because you didn’t know how to use them</li>
        </ul>

        <p className="mb-6">
          That’s where <strong>FlavorForge</strong> comes in. Just input what
          you have, and we’ll serve up creative, easy-to-follow recipes that
          match your ingredients — no guesswork required.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-2">
          🛠️ How It Works
        </h2>
        <p className="mb-6">
          Our smart recipe generator is powered by a blend of curated data and
          AI, designed to understand ingredient combinations, cooking methods,
          and flavor profiles. You simply enter your available ingredients, and
          we generate tasty recipes tailored to your input.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-2">
          🌱 What We Stand For
        </h2>
        <ul className="list-disc list-inside space-y-1 mb-6">
          <li>
            <strong>Simplicity:</strong> Clean, step-by-step recipes anyone can
            follow.
          </li>
          <li>
            <strong>Creativity:</strong> Unique recipe ideas generated from even
            the most random ingredients.
          </li>
          <li>
            <strong>Zero Waste:</strong> Helping you use what you already have,
            reducing food waste.
          </li>
          <li>
            <strong>Health & Taste:</strong> Balanced meals without compromising
            flavor.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-2">
          🤝 Join Our Community
        </h2>
        <p className="mb-6">
          Thousands of food lovers use FlavorForge to discover meals every day.
          Join our growing community, share your results, and explore recipes
          that suit your taste, diet, and lifestyle.
        </p>

        <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-2">
          📬 Have Suggestions?
        </h2>
        <p>
          We’re always improving! If you have ideas or feedback, contact us at{" "}
          <a
            href="mailto:support@flavorforge.app"
            className="text-blue-600 underline hover:text-blue-800"
          >
            support@flavorforge.app
          </a>{" "}
          or DM us on Instagram{" "}
          <a
            href="https://instagram.com/FlavorForgeApp"
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800"
          >
            @FlavorForgeApp
          </a>
          .
        </p>

        <p className="mt-6 text-green-600 font-medium">
          Happy Cooking! — The FlavorForge Team 🍽️
        </p>
      </div>
    </div>
  );
}
