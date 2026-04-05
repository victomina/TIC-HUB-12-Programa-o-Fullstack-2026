import type { App } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Button from 'primevue/button'
//importando o componente Button do PrimeVue, para poder usar ele na aplicação. O PrimeVue é uma biblioteca de componentes para Vue.js, que oferece uma variedade de componentes prontos para usar, como botões, tabelas, formulários, etc. O Aura é um tema para o PrimeVue, que oferece um visual moderno e elegante para os componentes.
import Card from 'primevue/card'
//importando o componente Card do PrimeVue, para poder usar ele na aplicação. O Card é um componente que permite exibir informações de forma organizada e visualmente agradável, como um cartão.

export default function setPrimeVue(app: App): void {
  app.use(PrimeVue, {
    Theme: {
      preset: Aura,
    },
  })
  app.component('PrimeButton', Button)
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Card', Card)
}
