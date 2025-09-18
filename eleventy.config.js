import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

import path from "node:path";
import * as sass from "sass";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addPassthroughCopy({ "_src/assets/img": "assets/img" });
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // Opt-out of Eleventy Layouts
    useLayouts: false,

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);

      // Skip files starting with an underscore
      if (parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".", // Current directory
          this.config.dir.includes, // Includes directory
          "_src/assets/scss", // Add this line to include the SCSS directory
        ],
      });

      // Map dependencies for incremental builds
      this.addDependencies(inputPath, result.loadedUrls);

      return async () => result.css;
    },
  });

  // Passthrough for compiled CSS

  return {
    templateFormats: ["md", "njk", "html", "scss"],
    pathPrefix: "/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "_src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
}
