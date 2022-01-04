import { Prop } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ClassName extends Vue {
    @Prop() readonly data!: CtaButton | undefined
}
