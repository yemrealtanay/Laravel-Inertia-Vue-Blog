require('./bootstrap');

// Import modules...
import Vue from 'vue';
import { App as InertiaApp, plugin as InertiaPlugin } from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';
import { InertiaProgress} from "@inertiajs/progress";
import moment from 'moment';




Vue.mixin({ methods: { route } });
Vue.use(InertiaPlugin);
Vue.use(PortalVue);
Vue.use(moment);
InertiaProgress.init();

const app = document.getElementById('app');

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
  });

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        }),
}).$mount(app);
