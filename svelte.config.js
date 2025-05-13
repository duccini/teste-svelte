import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Definição dos aliases
    alias: {
      $components: "src/components",
      $lib: "src/lib",
      $routes: "src/routes",
      $stores: "src/stores",
      $utils: "src/utils",
    },
  },
};

export default config;
