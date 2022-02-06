import { Component, Vue } from 'vue-property-decorator'
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
        content_type: 'tourDetailPage',
        include: 10,
        order: 'sys.id'
      })
    ]).then(([pages]) => {
      return {
        tours: pages.items
      }
    }).catch(console.error)
  }
})

export default class Tours extends Vue {

}
