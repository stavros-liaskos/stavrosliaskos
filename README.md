# stavrosliaskos.com
https://stavrosliaskos.com/
> My Nuxt.js based website

## Build Setup

``` bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project (used at production server)
$ yarn generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Structure
- `archive` is used to store initial assets(before processing)

## Images
Images are cropped using image magic: `convert archive/original.png -gravity center -resize 350x240\^ -crop 350x240+0+0 +repage static/converted.png`  
and compressed using TinyPng (https://tinypng.com/).   
Original images are stored at `/archive` for future use and the production ones under `/static` because of:
https://nuxtjs.org/guide/assets#static

## Heroku
[Deploy](https://github.com/nuxt/docs/blob/master/en/faq/heroku-deployment.md)

## Useful Links
- [Nuxt layouts](https://www.youtube.com/watch?v=YOKnSTp7d38)  
- [Typed.js](https://www.npmjs.com/package/vue-typer#getting-started)

## TODO
- [decrease font and icons file size](http://fontello.com/)
- fade in to improve user's speed perspective
- upload site to: https://madewithvuejs.com/submit
- contact section and form (connect to BE)  
- use srcset for RW images (fix device bug: project card images not centered)
- hover vs click effect at project cards on device mode?
- vue v2 upgrade
- sitemap: https://www.screamingfrog.co.uk/seo-spider/ https://statcounter.com/insights/seo/sitemap-example,    
https://caferati.me/labs/seo-part-one-google-search-for-full-stack-developer-portfolio
- create plugin for FontFaceObserver and fix false negative error in promise
- fix safari bugs for flip animations and replace current workaround
- [implement router link if it makes sense...](https://router.vuejs.org/en/api/router-link.html)
- [replace extends with placeholders](http://thesassway.com/intermediate/understanding-placeholder-selectors)
- move to github and enable gitkeeper
- fix console errors (typed js) | also slows down a lot "yarn dev"
- [static html fallback]( https://github.com/nuxt/nuxt.js/issues/2120)
- add yarn command to generate images and mv to dir
- create favicon
- what is the vue way to do animationend?
- improve asides: they must be dynamic and decrease until the next breakpoint (just like in bootstrap)
- [Install App-Wide Components & Directives](https://alligator.io/vuejs/creating-custom-plugins/)
- [redirects issue from seo checker](https://github.com/nuxt/nuxt.js/issues/1592)
- add logo
- logo in device mode: hide letters and pull svg to left
- remove stavrosliaskos.com from footer
- include social links in device mode in contact section
- disable left-right scroll in iphone
- horizontal list and scrolling project cards in device mode 
- humans.txt
- 404 page
- fix heroku

### Pages
/
/about
/contact
/privacy-policy
/404

### Ranking
Google Audits:
> Mobile
> - 99 Performance 
> - 45 PWA          
> - 84 Accessibility
> - 75 Best Practices
> - 100 SEO

> Desktop
> - 100 Performance 
> - 36 PWA          
> - 84 Accessibility
> - 81 Best Practices
> - 100 SEO

[page speed insights](https://developers.google.com/speed/pagespeed/insights/) 100 mobile / 100 desktop

[sitechecker](https://sitechecker.pro/) : 97%  

[structured data](https://search.google.com/structured-data/testing-tool/):  0/0/0
 
[structured data linter](http://linter.structured-data.org/): 0 

[mobile friendly test](https://search.google.com/test/mobile-friendly): passed  

