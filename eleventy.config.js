const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

function capitalizeWords(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = function(eleventyConfig) {
    // Register the plugin
    eleventyConfig.addPlugin(govukEleventyPlugin,{
        header: {
            logotype: {
                text: 'Planning Data'
            },
            productName: 'Service Handbook',
        },
        titleSuffix: 'Planning Data Service Handbook',
        stylesheets:['/assets/wiki.css'],
        showBreadcrumbs: true,
        scssSettingsPath: '../assets/_settings.scss'
    })
    eleventyConfig.addCollection("allPages", function(collection) {
        return collection.getAll().filter(item => item.outputPath && item.inputPath.endsWith('.md'));
    });
    eleventyConfig.addCollection("sortedByUrl", function(collectionApi) {
        return collectionApi.getAll().sort((a, b) => {
          // Sort by URL
          return a.url.localeCompare(b.url);
        });
    });
    
    // Register specific options
    eleventyConfig.setQuietMode(false)
    eleventyConfig.addGlobalData("layout", "base.njk");
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy("images");

    // Helper function to create nested structure
    const createNestedStructure = (pages) => {
        const result = {};
    
        pages.forEach(page => {
            // Extract file slug and use it as a key
            const key = page.fileSlug || 'home'; // Default to 'home' if no slug
            const title = page.data.title || capitalizeWords(key.replace(/-/g, ' ')); // Title defaults to slug if none is provided
            const url = page.url || `/`; // Default URL if none is provided
            const order = page.data.order || 1000; // Default order if none is provided
            // Create an object for the page
            const pageObject = {
                title: title,
                url: url,
                order: order,
                children: {} // Initialize empty children
            };
    
            // Break the input path into directories
            const pathParts = page.inputPath.split('/').slice(2);
            // assign base index to home
            if (pathParts[0] === 'index.md') {
                result['home'] = pageObject;
                return;
            }
    
            // Function to recursively insert page into the result structure
            const insertIntoStructure = (structure, parts, pageObj) => {
                const currentDir = parts.shift(); // Get the current directory part
                
                // special handling for index pages, they  are
                // found  at the route
                if (parts.length===1 && parts[0] === 'index.md') {
                    if (!structure[currentDir]) {
                        structure[currentDir] = {
                            title: capitalizeWords(currentDir.replace(/-/g, ' ')),
                            url: pageObj.url,
                            order: pageObj.order,
                            children: {}
                        };
                    } else {
                        structure[currentDir].url = pageObj.url;
                        structure[currentDir].order = pageObj.order;
                    }
                    return;
                }
                if (parts.length === 0) {
                    // If no more parts, we're at the page level
                    structure[currentDir] = pageObj;
                    return;
                }
    
                // If directory doesn't exist in the structure, initialize it
                if (!structure[currentDir]) {
                    structure[currentDir] = {
                        title: currentDir.replace(/-/g, ' '),
                        url: '',
                        order: 1000,
                        children: {}
                    };
                }
    
                // Recur deeper into the structure
                insertIntoStructure(structure[currentDir].children, parts, pageObj);
            };
    
            // Insert the page into the nested structure
            insertIntoStructure(result, pathParts, pageObject);
        });
    
        // Sort the result by order
        const sortStructure = (structure) => {
            const sorted = {};
            Object.keys(structure)
                .sort((a, b) => structure[a].order - structure[b].order)
                .forEach(key => {
                    sorted[key] = structure[key];
                    sorted[key].children = sortStructure(structure[key].children);
                });
            return sorted;
        };
    
        return sortStructure(result);
    };
    
    // Add the custom collection to Eleventy
    eleventyConfig.addCollection("nestedPages", function(collection) {
        const allPages = collection.getAll().sort((a, b) => {
            // Sort by URL
            return a.url.localeCompare(b.url);
          });
        return createNestedStructure(allPages);
    });

    // Put robots.txt in root
    eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'docs',
      // Use layouts from the plugin
      includes: "../includes",
      layouts: '../layouts'
    //   layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    },
    pathPrefix: '/'
  }
};