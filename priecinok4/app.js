import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { ButtonCounter } from './counter.js'
import { labelGroup } from './label.js';

        createApp({
            components: {
                ButtonCounter,
                labelGroup,
            },
            data() {
                return {};
            },
            methods: {
                showAlert(){
                    alert("Levelu p!");
                },
            }
        }).mount('#app')