module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/scripts")
    eleventyConfig.addPassthroughCopy ("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes"
        }
    }
};
