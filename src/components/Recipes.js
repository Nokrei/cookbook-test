import React, { useState } from "react";
import curry from "../images/curry.jpg";
import burger from "../images/burger.jpg";
import eggs from "../images/eggs.jpg";
import pizza from "../images/pizza.jpg";
import soup from "../images/soup.jpg";
import "./App.css";
import "./Recipe.css";
import RecipeMenu from "./RecipeMenu";
import RecipeContent from "./RecipeContent";
const Recipes = () => {
  // Array containing all recipe data.
  const recipesArr = [
    {
      author: "Jim",
      name: "Chicken Curry",
      description:
        "This is the Malaysian version of Indian chicken curry, which uses coconut milk. It can be substituted with yogurt or low-fat milk, but the taste won't be the same.",
      image: curry,
      ingredients: [
        {
          measurement: "tablespoons",
          quantity: 2,
          ingredient: "olive oil",
        },
        {
          measurement: "cups",
          quantity: 2,
          ingredient: "water",
        },
        {
          measurement: "pounds",
          quantity: 3,
          ingredient: "chicken breasts",
        },
      ],
      preparation:
        "Heat oil in a large, deep skillet over medium heat. Saute the cinnamon, cardamom, anise, cloves and curry leaves for 2 to 3 minutes, then stir in shallots, garlic and ginger and saute until fragrant. Stir in curry paste and cook for 5 minutes, stirring constantly.",
    },

    {
      author: "Aravind",
      name: "Hamburger",
      description:
        "If you're craving a really juicy, delicious burger that's packed with flavor and textures then this egg-topped burger is the burger for you!",
      image: burger,
      ingredients: [
        {
          measurement: "tablespoons",
          quantity: 3,
          ingredient: "salted butter",
        },
        {
          measurement: "slices",
          quantity: 2,
          ingredient: "Cheddar cheese",
        },
        {
          measurement: "pounds",
          quantity: 2,
          ingredient: "ground beef",
        },
      ],
      preparation:
        "Grill patties on the preheated grill until preferred doneness, about 6 minutes per side. An instant-read thermometer inserted into the center should read at least 160 degrees F (71 degrees C). Top each burger with 2 slices bacon and a Cheddar cheese slice; close the grill lid until cheese is melted, about 1 minute. Remove patties from the grill.",
    },
    {
      author: "Mike",
      name: "Scrambled Eggs",
      description:
        "I've been tweaking my recipe for a while now and I've finally found the best scrambled eggs ever! My friends and family love it, and I make it almost once a week before school.",
      image: eggs,
      ingredients: [
        {
          measurement: "whole",
          quantity: 2,
          ingredient: "eggs",
        },
        {
          measurement: "slices",
          quantity: 2,
          ingredient: "ham",
        },
        {
          measurement: "teaspoons",
          quantity: 2,
          ingredient: "unsalted butter",
        },
      ],
      preparation:
        "Melt butter in a skillet over medium heat. Pour in egg mixture; cook and stir until set but still moist, 3 to 5 minutes.",
    },

    {
      author: "Ana",
      name: "Pizza",
      description:
        "This pizza is deceivingly light, crisp, and slightly spicy. Enjoy with a can of soda.",
      image: pizza,
      ingredients: [
        {
          measurement: "cups",
          quantity: 2,
          ingredient: "warm water",
        },
        {
          measurement: "teaspoons",
          quantity: 2,
          ingredient: "dry yeast",
        },
        {
          measurement: "teaspoons",
          quantity: 2,
          ingredient: "fine salt",
        },
      ],
      preparation:
        "Grease a heavy-gauge rimmed 12x17-inch baking sheet generously with olive oil. Press dough into the bottom. Prick dough all over with a fork. Arrange mozzarella cheese slices over dough; cover with 1 cup sauce. Sprinkle Pecorino Romano cheese on top. Drizzle remaining olive oil over pizza.",
    },
    {
      author: "Jessica",
      name: "Chicken soup",
      description:
        "Beyond-flavorful rotisserie chicken soup that is perfect for the wintertime!",
      image: soup,
      ingredients: [
        {
          measurement: "whole",
          quantity: 2,
          ingredient: "rotisserie chickens",
        },
        {
          measurement: "cloves",
          quantity: 5,
          ingredient: "garlic",
        },
        {
          measurement: "gallon",
          quantity: 2,
          ingredient: "water",
        },
      ],
      preparation:
        "Combine onions and butter in the stockpot over medium heat. Cook and stir onions until translucent, 5 to 7 minutes. Add garlic and cook for 5 minutes. Stir in carrots and celery. Cook, stirring occasionally, until nearly tender, about 15 minutes. Stir in corn, parsley, and pepper.",
    },
  ];

  // Stare variable to store recipe name clicked by user.
  const [content, setContent] = useState("");

  // Set content state variable on user click.
  const handleRecipeClick = (e) => {
    setContent(e.target.innerText);
  };

  // Get relevant object keys and values, matching recipe name selected by user.
  const contentItem = recipesArr.filter((item) => item.name === content)[0];

  // State variable to set number of consumers and then adjust ingredients.
  const [numOfConsumers, setNumOfConsumers] = useState(2);

  // Increase number of consumers.
  const handleAddConsumer = () => {
    setNumOfConsumers(numOfConsumers + 1);
  };

  // Decrease number of consumers (if not lower than 1).
  const handleSubtractConsumer = () => {
    numOfConsumers > 1 && setNumOfConsumers(numOfConsumers - 1);
  };

  return (
    <div className="recipes">
      <div className="recipe-menu">
        {recipesArr.map((recipe) => {
          return (
            <RecipeMenu
              recipeClick={handleRecipeClick}
              key={recipe.name}
              name={recipe.name}
            />
          );
        })}
      </div>

      {contentItem ? (
        <div className="recipe-content-container">
          <RecipeContent
            name={contentItem.name}
            description={contentItem.description}
            author={contentItem.author}
            image={contentItem.image}
            alt={contentItem.name}
            consumers={numOfConsumers}
            add={handleAddConsumer}
            subtract={handleSubtractConsumer}
            ingredients={contentItem.ingredients.map((item, idx) => {
              return (
                <div key={idx}>
                  {(item.quantity * numOfConsumers) / 2} {item.measurement}
                  {item.ingredient}
                </div>
              );
            })}
            prep={contentItem.preparation}
          />
        </div>
      ) : (
        <div className="recipe-select">
          Please select a recipe from the list
        </div>
      )}
    </div>
  );
};

export default Recipes;
