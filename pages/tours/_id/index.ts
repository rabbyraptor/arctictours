import { Component, Vue } from 'vue-property-decorator'
const contentful = require('contentful')
const client = contentful.createClient({
  space: 'pzbhz3gvlzr3',
  accessToken: 'b-5XP09OllbfKyrmgfE-LmN1xRurBNKm3eVUCGklIzo'
})
const contentfulClient = client

@Component({
  async asyncData({ route }) {
    return Promise.all([
      await contentfulClient.getEntries({
        content_type: 'tourDetailPage',
        'fields.slug': route.params.id,
        include: 10
      })
    ]).then(([pages]) => {
      if (pages.items[0].fields.slug != null) {
        return {
          data: pages.items[0].fields
        }
      } else {
        return {
          data: '404'
        }
      }
    }).catch(console.error)
  }
})

export default class TourPage extends Vue {

}
