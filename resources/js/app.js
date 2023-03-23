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
import {faGraduationCap, faRightFromBracket, faWrench,  faCaretDown, faScrewdriverWrench, faGem} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faGraduationCap , faRightFromBracket, faWrench, faCaretDown, faScrewdriverWrench, faGem)

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
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('inertia-link', Link)
    .mount(el);


InertiaProgress.init({ color: '#4B5563' });
