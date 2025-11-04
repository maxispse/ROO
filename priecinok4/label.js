import { defineComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export const labelGroup = defineComponent({
    props: {
        texts: Object,
    },
    template: `<div>
        <h1 v-if:>{{ texts.title }}</h1>
        <p>{{ texts.text }}</p>
    </div>`,
});