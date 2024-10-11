import * as fal from "@fal-ai/serverless-client";

const result = await fal.subscribe("fal-ai/flux/dev", {
  input: {
    prompt: "Extreme close-up of a single tiger eye, direct frontal view. Detailed iris and pupil. Sharp focus on eye texture and color. Natural lighting to capture authentic eye shine and depth. The word \"FLUX\" is painted over it in big, white brush strokes with visible texture."
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === "IN_PROGRESS") {
      update.logs.map((log) => log.message).forEach(console.log);
    }
  },
});

fal.config({
    credentials: "YOUR_FAL_KEY"
  });

// Fetching assets from an API
async function loadAssets() {
    const response = await fetch('https://api.opengameart.org/v1/artworks');
    const data = await response.json();
    
    // Assuming the API returns an array of assets
    data.artworks.forEach(asset => {
        console.log(`Asset Name: ${asset.name}, URL: ${asset.url}`);
        // Load the asset into your game (e.g., textures, models)
    });
}

// Call the function to load assets
loadAssets();