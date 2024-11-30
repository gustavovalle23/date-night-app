import { NextResponse } from "next/server";

const getRandomOption = (options: string[]): string => {
  return options[Math.floor(Math.random() * options.length)];
};

const decisionTree = (mood: string, weather: string, budget: string): string => {
  if (mood === "romantic") {
    if (weather === "sunny") {
      if (budget === "low") {
        return getRandomOption([
          "Romantic walk in the park with ice cream.",
          "Watch the sunset at a scenic viewpoint.",
          "Visit a free outdoor concert together.",
          "Stroll through a botanical garden.",
          "Share a picnic with homemade sandwiches."
        ]);
      }
      if (budget === "medium") {
        return getRandomOption([
          "Picnic with wine and cheese in the countryside.",
          "Enjoy paddle boating on a lake.",
          "Dinner at a romantic rooftop restaurant.",
          "Take a pottery-making class together.",
          "Explore a nearby vineyard with wine tasting."
        ]);
      }
      if (budget === "high") {
        return getRandomOption([
          "Private yacht dinner with champagne.",
          "Helicopter ride over the city with a toast.",
          "Luxury spa day for two followed by dinner.",
          "Romantic getaway to a 5-star beach resort.",
          "Hire a private chef for an intimate dinner."
        ]);
      }
    }
    if (weather === "rainy") {
      if (budget === "low") {
        return getRandomOption([
          "Candlelit movie night with homemade snacks.",
          "Cook a new recipe together at home.",
          "Play your favorite board games with cocoa.",
          "Create art together using watercolor paints.",
          "Have a karaoke night with romantic songs."
        ]);
      }
      if (budget === "medium") {
        return getRandomOption([
          "Dinner at a cozy indoor cafe.",
          "Take a dance class at a local studio.",
          "Visit a museum and discuss your favorite pieces.",
          "Go to a wine and paint night at an art studio.",
          "Try out a highly rated escape room."
        ]);
      }
      if (budget === "high") {
        return getRandomOption([
          "Luxury spa night at a five-star resort.",
          "Enjoy a private movie screening experience.",
          "Plan a surprise staycation at a boutique hotel.",
          "Book a hot stone massage for two.",
          "Hire a private sommelier for a wine pairing dinner."
        ]);
      }
    }
    if (weather === "snowy") {
      if (budget === "low") {
        return getRandomOption([
          "Build a snowman together and enjoy hot chocolate.",
          "Have a cozy night playing video games together.",
          "Go sledding on a local hill and laugh a lot.",
          "Make snow angels and capture cute photos.",
          "Bake cookies shaped like snowflakes."
        ]);
      }
      if (budget === "medium") {
        return getRandomOption([
          "Skiing trip followed by a warm lodge dinner.",
          "Visit a holiday light display in town.",
          "Make DIY candles with warm winter scents.",
          "Take a sleigh ride at a nearby park.",
          "Spend the evening ice skating at an outdoor rink."
        ]);
      }
      if (budget === "high") {
        return getRandomOption([
          "Snow chalet getaway with a private chef.",
          "Luxurious hot spring experience in the mountains.",
          "Helicopter tour over snow-covered landscapes.",
          "Dog sledding adventure with a guide.",
          "Rent a luxury cabin with a fireplace and hot tub."
        ]);
      }
    }
  } else if (mood === "adventurous") {
    if (weather === "sunny") {
      if (budget === "low") {
        return getRandomOption([
          "Go hiking in a nearby trail.",
          "Try geocaching for hidden treasures.",
          "Cycle through a scenic bike path.",
          "Visit a free outdoor climbing wall.",
          "Camp overnight at a nearby campsite."
        ]);
      }
      if (budget === "medium") {
        return getRandomOption([
          "Road trip to an offbeat destination.",
          "Zip-lining through a forest canopy.",
          "Guided horseback riding through nature trails.",
          "Explore hidden caves or rock formations.",
          "Join a kayaking tour on a local river."
        ]);
      }
      if (budget === "high") {
        return getRandomOption([
          "Helicopter tour of the city or nature reserve.",
          "Hot air balloon ride with breathtaking views.",
          "Scuba diving adventure at a tropical reef.",
          "Charter a sailboat for a day of exploration.",
          "Paragliding adventure at a scenic site."
        ]);
      }
    }
    if (weather === "rainy") {
      if (budget === "low") {
        return getRandomOption([
          "Try an escape room challenge together.",
          "Go bowling and compete for the highest score.",
          "Visit a trampoline park for fun indoors.",
          "Play indoor laser tag or Nerf battles.",
          "Test your skills at a nearby arcade."
        ]);
      }
      if (budget === "medium") {
        return getRandomOption([
          "Visit an indoor climbing gym.",
          "Take an archery class together.",
          "Book an interactive cooking experience.",
          "Explore a local science or discovery museum.",
          "Join a mystery-solving dinner event."
        ]);
      }
      if (budget === "high") {
        return getRandomOption([
          "Scuba diving adventure in a tropical destination.",
          "Go bouldering at an advanced indoor climbing spot.",
          "Fly a private simulator jet experience.",
          "Plan a weekend at a luxury adventure lodge.",
          "Take a helicopter tour to a remote mountain site."
        ]);
      }
    }
    if (weather === "snowy") {
      if (budget === "low") {
        return getRandomOption([
          "Have a snowball fight at the local park.",
          "Trek through the snow to find wildlife tracks.",
          "Build a winter shelter like an igloo or fort.",
          "Host a snow-themed photography challenge.",
          "Try your hand at cross-country skiing."
        ]);
      }
      if (budget === "medium") {
        return getRandomOption([
          "Explore a nearby winter festival.",
          "Go snow tubing at a local hill.",
          "Visit an indoor climbing wall with challenges.",
          "Try dog sledding at a local venue.",
          "Spend the evening at an ice sculpture exhibit."
        ]);
      }
      if (budget === "high") {
        return getRandomOption([
          "Dog sledding and a stay in an igloo hotel.",
          "Helicopter to a remote snowy hiking trail.",
          "Ice cave exploration with professional guides.",
          "Luxury ski lodge weekend with spa services.",
          "Stay in a luxury Arctic dome with glass ceilings."
        ]);
      }
    }
  }
  return "Let's try something unexpected!";
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const mood = url.searchParams.get("mood") || "";
  const weather = url.searchParams.get("weather") || "";
  const budget = url.searchParams.get("budget") || "";

  const suggestion = decisionTree(mood, weather, budget);
  return NextResponse.json({ suggestion });
}
