import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomePage extends Vue {
    data = {
        hero: {
            image: '/images/dog-sledding/dogsledge-1.jpg',
            text: 'Looking for an adventure? <br />You have come to the right place.',
            cta: {
                link: '#',
                text: 'See tours'
            }
        }
    }
}
