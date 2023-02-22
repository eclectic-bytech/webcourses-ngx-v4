require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin, Link } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faFish } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faFish)

const el = document.getElementById('app');

createApp({
    render: () =>
        h(InertiaApp, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: (name) => require(`./Pages/${name}`).default,
        }),
})
    .mixin({ methods: { route } })
    .use(InertiaPlugin)
    .component('font-awesome-icon', FontAwesomeIcon,'inertia-link', Link)
    .mount('#app', el);

InertiaProgress.init({ color: '#4B5563' });
