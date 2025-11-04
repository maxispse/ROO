import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export const TodoItem = createApp({
    props: {
        item: Object,
    },
    template:
    <div style="display:flex, flex-direction:row;">
        <input type="text" v-model="item.text" />
        <input type="checkbox" v-model="item.done" />
    </div>,
});