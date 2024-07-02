import { type Preview, setup }  from '@storybook/vue3';

// hacky way to get tailwindcss into the storybook, assuming there is a better way (this file is from downloading https://cdn.tailwindcss.com/3.4.4 )
// also this approach wouldn't be so great if we have our own global css, which is likely
import tailwind from '../built-css/tailwindcss-3.4.4.js';
import TailwindConfig from '../tailwind.config.js';
tailwind.config = TailwindConfig;

import { createPinia } from 'pinia';
console.log({ anything: 'at all'});


const pinia = createPinia();

setup((app) => {
    app.use(pinia);
});

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'black', value: 'black'},
        { name: 'white', value: '#FFF'},
        { name: 'grey', value: 'grey'},
        { name: 'green', value: '#DFD'},
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

  },
};

export default preview;
