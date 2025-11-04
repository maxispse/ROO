import { defineComponent } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';


export const ButtonCounter = defineComponent({
    props: {
        InitialCount: Number,
    },
    methods: {
        OnButtonClick() {
            this.count++;
            if (this.count === 5 * (clickCount * 2))
            this.$emit("count-divisible-by-five");
            clickCount++;
        }
    },
    data() {
        return {
            count: this.InitialCount || 0,
            clickCount: 1,
        };
    },
    template: `<button @click="OnButtonClick">You clicked {{ count }} times</button>`
});
