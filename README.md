# star-rating-vue

Star Rating widget (Vue3 + Typesctipt)

This is a single component widget in which you can customize:
- The widget text;
- The color of the stars in the active and inactive state;
- The size and number of stars;
- Rating fixation.

![alt text](figures/interface.PNG)

## Props

- use the v-slot to add a title;
- totalStars: total stats, defaults to 5;
- sizeStars: stars size, defaults to 50;
- activeColor: the color of the active star;
- inactiveColor: the color of the inactive star;
- readonly: rating fixation, defaults to false.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
