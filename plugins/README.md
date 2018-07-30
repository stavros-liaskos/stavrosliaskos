# PLUGINS

This directory contains your Javascript plugins that you want to run before instantiating the root vue.js application.

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/plugins

**This directory is not required, you can delete it if you don't want to use it.**


## Current use case
What we want to achieve with the use of a plugin is to avoid re-importing the external package again and again AND furthermore because the re-importing will increase the bundle's size.  
How do we achieve that??  
1. we create the `vue-scrollto.js` file with the appropriate imports
 and initialization. This will make the `vue-scrollto` external plugin 
 available everywhere. An alternative would be to have the content of 
 `vue-scrollto.js` in every `.vue` file that we use the `v-scroll-to` directive.  
 2. we add an entry to `nuxt.config.js`
3. Finally, the  `v-scroll-to` directive is available for use everywhere! 
