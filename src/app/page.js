"use client";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { leftoverRecipes } from "./data/leftoverRecipes";
import toast from "react-hot-toast";
import { howItWorks } from "./data/howItWorks";
import RecipeCard from "./components/RecipeCard";
import HowItWorks from "./components/HowItWorks";
import axios from "axios";

export default function Home() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newRecipe, setNewRecipe] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const suggested = ["Chicken", "Rice", "Pasta", "Tomatoes", "Cheese", "Eggs"];

  const handleAdd = (value) => {
    if (!value.trim() || ingredients.includes(value.trim())) return;
    setIngredients((prev) => [...prev, value.trim()]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd(input);
    }
  };

  const handleSuggestionClick = (item) => {
    handleAdd(item);
  };

  const handleRemove = (itemToRemove) => {
    setIngredients((prev) => prev.filter((item) => item !== itemToRemove));
  };

  const generateRecipe = async (e) => {
    e.preventDefault();
    if (ingredients.length === 0) {
      return toast.error("Enter atlist one Ingredients");
    }
    setLoading(true);
    setNewRecipe(true);
    try {
      const response = await axios.post("/api/recipes", {
        ingredients: ingredients,
      });
      console.log(response.data);
      setRecipes(response.data.recipe);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 flex flex-col items-center text-center bg-gradient-to-b from-green-100 to-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Turn Leftovers into Delicious Recipes
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Don&apos;t let those ingredients go to waste! Enter what you have on
          hand, and we&apos;ll suggest creative recipes to make with your
          leftovers.
        </p>
        <button className="mt-6 flex items-center gap-1 text-green-600 text-xs font-semibold transition">
          Get Started
          <FaArrowDown className="animate-bounce" />
        </button>
      </section>
      <section className="bg-[#f5fbf5] py-14 px-4 sm:px-6 lg:px-8 text-center mt-9">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          What ingredients do you have?
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto mb-6">
          Enter your ingredients below, and we&apos;ll help you find the perfect
          recipe!
        </p>

        <form
          onSubmit={generateRecipe}
          className="w-full max-w-2xl mx-auto flex flex-col items-center gap-1"
        >
          <input
            type="text"
            placeholder="Enter ingredients..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Current Ingredients */}
          <div className="w-full flex flex-wrap justify-start gap-1 mt-1">
            {ingredients.map((item, idx) => (
              <span
                key={idx}
                className="bg-green-600 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-700"
                onClick={() => handleRemove(item)}
                title="Click to remove"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Suggested Ingredients */}
          <div className="w-full flex flex-wrap justify-start gap-2 mt-4">
            {suggested.map((ingredient) => (
              <button
                key={ingredient}
                type="button"
                onClick={() => handleSuggestionClick(ingredient)}
                className="bg-white border flex gap-1 items-center border-gray-300 px-3 py-1 rounded-sm text-sm hover:bg-green-200 transition"
              >
                <FaPlus />
                {ingredient}
              </button>
            ))}
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={loading}
            className="disabled:opacity-50 mt-6 px-6 py-2 w-full bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition"
          >
            {loading ? "Generating Recipes" : "Generate Recipes"}
          </button>
        </form>
      </section>
      <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col justify-center bg-[#f5fbf5]">
        {loading ? (
          <div className="w-full flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto  mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {newRecipe
                ? `Recipes with ${ingredients}`
                : "Recipes with Leftovers"}
            </h2>
            <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {!newRecipe ? (
                <>
                  {leftoverRecipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                  ))}
                </>
              ) : (
                <>
                  {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </section>
      <section className="f-full bg-gray-100 py-14 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How It Works?
          </h2>
          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((steps, index) => (
              <HowItWorks key={index} steps={steps} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
