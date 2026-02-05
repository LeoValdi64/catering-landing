"use client";

import { useState } from "react";
import { ChefHat, Leaf, Wheat } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  dietary?: string[];
}

interface MenuCategory {
  id: string;
  label: string;
  appetizers: MenuItem[];
  entrees: MenuItem[];
  desserts: MenuItem[];
}

const menus: MenuCategory[] = [
  {
    id: "elegant",
    label: "Elegant Dinner",
    appetizers: [
      {
        name: "Seared Scallops",
        description: "With cauliflower puree, crispy pancetta, and micro herbs",
      },
      {
        name: "Burrata & Heirloom Tomato",
        description: "Fresh burrata, aged balsamic, basil oil, and sea salt",
        dietary: ["vegetarian"],
      },
      {
        name: "Beef Carpaccio",
        description: "Thinly sliced tenderloin, arugula, capers, and shaved parmesan",
      },
    ],
    entrees: [
      {
        name: "Pan-Roasted Chilean Sea Bass",
        description: "Saffron risotto, broccolini, and lemon beurre blanc",
      },
      {
        name: "Filet Mignon",
        description: "8oz center cut, truffle mashed potatoes, and red wine reduction",
      },
      {
        name: "Wild Mushroom Ravioli",
        description: "Handmade pasta, sage brown butter, and toasted pine nuts",
        dietary: ["vegetarian"],
      },
    ],
    desserts: [
      {
        name: "Chocolate Fondant",
        description: "Warm molten center, vanilla bean ice cream, and gold leaf",
      },
      {
        name: "Lemon Tart",
        description: "Torched meringue, raspberry coulis, and edible flowers",
      },
    ],
  },
  {
    id: "bbq",
    label: "Texas BBQ",
    appetizers: [
      {
        name: "Smoked Queso Dip",
        description: "House-smoked cheese blend, roasted peppers, and tortilla chips",
      },
      {
        name: "Jalapeño Poppers",
        description: "Cream cheese stuffed, wrapped in bacon, and pit smoked",
      },
      {
        name: "Smoked Chicken Wings",
        description: "Dry-rubbed, slow smoked, with Alabama white sauce",
        dietary: ["gluten-free"],
      },
    ],
    entrees: [
      {
        name: "Slow-Smoked Brisket",
        description: "14-hour oak-smoked, house dry rub, and tangy BBQ sauce",
        dietary: ["gluten-free"],
      },
      {
        name: "St. Louis Style Ribs",
        description: "Fall-off-the-bone tender, brown sugar and chipotle glaze",
      },
      {
        name: "Smoked Turkey Breast",
        description: "Herb-brined, pecan wood smoked, with cranberry compote",
        dietary: ["gluten-free"],
      },
    ],
    desserts: [
      {
        name: "Peach Cobbler",
        description: "Texas peaches, buttery biscuit topping, and vanilla ice cream",
      },
      {
        name: "Banana Pudding",
        description: "Layers of vanilla wafers, custard, and fresh bananas",
      },
    ],
  },
  {
    id: "brunch",
    label: "Brunch",
    appetizers: [
      {
        name: "Avocado Toast Bar",
        description: "Artisan sourdough, whipped avocado, and assorted toppings",
        dietary: ["vegetarian"],
      },
      {
        name: "Charcuterie & Cheese Board",
        description: "Curated meats, aged cheeses, seasonal fruits, and honeycomb",
      },
      {
        name: "Shrimp Cocktail Shooters",
        description: "Poached gulf shrimp, zesty cocktail sauce, and fresh lemon",
        dietary: ["gluten-free"],
      },
    ],
    entrees: [
      {
        name: "Eggs Benedict Station",
        description: "Classic, smoked salmon, and florentine options with hollandaise",
      },
      {
        name: "Chicken & Waffles",
        description: "Crispy buttermilk chicken, Belgian waffles, and maple drizzle",
      },
      {
        name: "Veggie Frittata",
        description: "Roasted vegetables, goat cheese, and fresh herbs",
        dietary: ["vegetarian", "gluten-free"],
      },
    ],
    desserts: [
      {
        name: "French Pastry Display",
        description: "Croissants, pain au chocolat, fruit danish, and macarons",
      },
      {
        name: "Mimosa & Juice Bar",
        description: "Fresh-squeezed orange, grapefruit, passion fruit, and champagne",
      },
    ],
  },
];

function DietaryBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-gold/20 text-gold/70">
      {type === "vegetarian" && <Leaf className="w-3 h-3" />}
      {type === "gluten-free" && <Wheat className="w-3 h-3" />}
      {type}
    </span>
  );
}

export default function SampleMenus() {
  const [activeMenu, setActiveMenu] = useState("elegant");
  const current = menus.find((m) => m.id === activeMenu)!;

  return (
    <section id="menus" className="py-24 lg:py-32 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-[family-name:var(--font-lato)]">
            A Taste of What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6 font-[family-name:var(--font-playfair)]">
            Sample Menus
          </h2>
          <div className="w-24 h-px bg-gold/40 mx-auto mb-6" />
          <p className="text-cream/60 max-w-2xl mx-auto text-lg font-[family-name:var(--font-lato)] font-light">
            Every menu is fully customizable. These samples showcase our range
            and commitment to exceptional flavor.
          </p>
        </div>

        {/* Menu tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onClick={() => setActiveMenu(menu.id)}
              className={`px-6 py-3 rounded text-sm uppercase tracking-wider font-bold transition-all duration-300 font-[family-name:var(--font-lato)] ${
                activeMenu === menu.id
                  ? "bg-gold text-charcoal"
                  : "border border-gold/20 text-cream/60 hover:border-gold/40 hover:text-cream"
              }`}
            >
              {menu.label}
            </button>
          ))}
        </div>

        {/* Menu content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appetizers */}
          <div className="bg-charcoal border border-gold/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                Appetizers
              </h3>
            </div>
            <div className="space-y-6">
              {current.appetizers.map((item) => (
                <div key={item.name}>
                  <h4 className="text-cream font-semibold mb-1 font-[family-name:var(--font-playfair)]">
                    {item.name}
                  </h4>
                  <p className="text-cream/50 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
                    {item.description}
                  </p>
                  {item.dietary && (
                    <div className="flex gap-2 mt-2">
                      {item.dietary.map((d) => (
                        <DietaryBadge key={d} type={d} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Entrees */}
          <div className="bg-charcoal border border-gold/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                Entrees
              </h3>
            </div>
            <div className="space-y-6">
              {current.entrees.map((item) => (
                <div key={item.name}>
                  <h4 className="text-cream font-semibold mb-1 font-[family-name:var(--font-playfair)]">
                    {item.name}
                  </h4>
                  <p className="text-cream/50 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
                    {item.description}
                  </p>
                  {item.dietary && (
                    <div className="flex gap-2 mt-2">
                      {item.dietary.map((d) => (
                        <DietaryBadge key={d} type={d} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="bg-charcoal border border-gold/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                Desserts
              </h3>
            </div>
            <div className="space-y-6">
              {current.desserts.map((item) => (
                <div key={item.name}>
                  <h4 className="text-cream font-semibold mb-1 font-[family-name:var(--font-playfair)]">
                    {item.name}
                  </h4>
                  <p className="text-cream/50 text-sm leading-relaxed font-[family-name:var(--font-lato)]">
                    {item.description}
                  </p>
                  {item.dietary && (
                    <div className="flex gap-2 mt-2">
                      {item.dietary.map((d) => (
                        <DietaryBadge key={d} type={d} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-cream/40 text-sm mt-10 font-[family-name:var(--font-lato)]">
          All menus are fully customizable to accommodate dietary restrictions,
          allergies, and personal preferences.
        </p>
      </div>
    </section>
  );
}
