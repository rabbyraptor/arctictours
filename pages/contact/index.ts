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
                content_type: 'contactPage',
                include: 10,
                order: 'sys.id'
            })
        ]).then(([pages]) => {
            return {
                data: pages.items[0].fields
            }
        }).catch(console.error)
    }
})

export default class ContactPage extends Vue {
    public isSubmitted: boolean = false;
    public submitButtonText: string = 'Submit';

    submitForm() {
        this.isSubmitted = true
        this.submitButtonText = 'Sending...'
        setTimeout(() => { this.submitButtonText = 'Sent!' }, 800);
        (document.getElementById('name')! as HTMLInputElement).value = '';
        (document.getElementById('email')! as HTMLInputElement).value = '';
        (document.getElementById('message')! as HTMLInputElement).value = ''
    }
}
