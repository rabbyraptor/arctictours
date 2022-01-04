import { Prop } from 'nuxt-property-decorator'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TourImages extends Vue {
    @Prop() readonly data!: TourImages | undefined
}
