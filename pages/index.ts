import { Component, Vue } from 'vue-property-decorator'
import AOS from 'aos'

const contentful = require('contentful')
const client = contentful.createClient({
    space: 'pzbhz3gvlzr3',
    accessToken: 'b-5XP09OllbfKyrmgfE-LmN1xRurBNKm3eVUCGklIzo'
})
const contentfulClient = client
@Component({
    async asyncData() {
        return Promise.all([
            await contentfulClient.getEntries({
                content_type: 'homePage',
                include: 10
            })
        ]).then(([pages]) => {
            return {
                data: pages.items[0].fields
            }
        }).catch(console.error)
    }
})
export default class HomePage extends Vue {
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => AOS.refreshHard(), 500)
        })
    }
}
