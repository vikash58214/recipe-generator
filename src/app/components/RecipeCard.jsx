"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RecipeCard({ recipe }) {
  const [showInstructions, setShowInstructions] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const handleUseOnlineImage = async () => {
    const apiUrl = `https://api.unsplash.com/search/photos?query=${recipe.title}&per_page=1`;
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`,
        },
      });

      const data = await response.json();

      if (data.results.length > 0) {
        const imageUrl = data.results[0].urls.regular;
        setImgUrl(imageUrl);
      } else {
        console.log("No photos found.");
      }
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };
  useEffect(() => {
    handleUseOnlineImage();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md mx-auto">
      {imgUrl ? (
        <Image
          width={100}
          height={100}
          src={imgUrl}
          alt="Recipe Image"
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-300 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-bold text-gray-900">{recipe.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            ⏱ {recipe.time} &nbsp;|&nbsp; 🧩 {recipe.difficulty}
          </p>
        </div>
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">
          {recipe.description}
        </p>
        <div className="mb-3">
          <h4 className="font-semibold text-gray-800 mb-1">Ingredients:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {showInstructions && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-800 mb-1">Instructions:</h4>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
              {recipe.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setShowInstructions((prev) => !prev)}
          className="mt-4 text-green-600 hover:underline text-sm font-medium transition"
        >
          {showInstructions ? "Hide Instructions" : "Show Instructions"}
        </button>
      </div>
    </div>
  );
}
