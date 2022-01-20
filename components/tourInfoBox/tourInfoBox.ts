import { Prop } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TourInfoBox extends Vue {
    @Prop() readonly data!: InfoBox | undefined
}
