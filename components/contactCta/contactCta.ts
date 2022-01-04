import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactCta extends Vue {
    data = {
        cta: {
            link: '#',
            text: 'Contact us'
        }
    }
}
