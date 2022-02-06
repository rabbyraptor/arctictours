import { Prop } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactCta extends Vue {
    @Prop() readonly data!: ContactCta
}
