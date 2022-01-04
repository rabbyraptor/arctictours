import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TourPage extends Vue {
    public data?: any = null;

    readonly iceSheet: TourDetails = {
        hero: {
            image: '/images/ice-sheet/ice-sheet-5.jpg',
            text: 'The Greenland ice sheet.<br />Witness the towering wall of ice.',
            cta: { link: '#', text: 'Request Tour' }
        },
        name: 'Ice sheet tour',
        tourInfo: {
            title: 'Ice. Ice everywhere.',
            text: '<p>UNESCO World Heritage Site: The inland ice sheet is one of Greenland’s biggest attractions. Known as the Greenland Ice Sheet, it covers 80% of the island’s surface and is second in size to the world’s only other ice sheet in Antarctica. Due to climatic and environmental changes, its mass continues to decrease as more ice melts into the surrounding seas.</p><p>Our adventure to the area’s most remarkable glacier requires transport with a tundra coach, a 4WD vehicle, which is designed to take on the rocky, changeable terrain and gravel roads. This leg of our journey takes approximately 1.5 hours. On the way, we will be on the lookout for wildlife, such as reindeer and musk oxen, and listen to stories from our guide about the area’s history.</p>'
        },
        tourImages: {
            image1: '/images/ice-sheet/ice-sheet-7.jpg',
            image2: '/images/ice-sheet/ice-sheet-1.jpg',
            image3: '/images/ice-sheet/ice-sheet-2.jpg',
            image4: '/images/ice-sheet/ice-sheet-4.jpg',
            image5: '/images/ice-sheet/ice-sheet-6.jpg'
        },
        infoBox: {
            image: '/images/ice-sheet/ice-sheet-3.jpg',
            title: 'Tour overview',
            text: {
                includedTitle: 'Included',
                included: ['Full accommodation in tent safari camp.', 'All meals in camp and field.', 'ATV transport incl. equipment.', '1:4 guided tour.', "Your life's adventure."],
                notIncludedTitle: 'Not included',
                notIncluded: ['Flight ticket Copenhagen-Kangerlussuaq.', 'Stay in hotel before departure.']
            },
            price: {
                title: 'Price:',
                value: 1900,
                unit: 'EUR'
            },
            cta: {
                text: 'Send request',
                link: '#'
            }
        }
    }

    mounted() {
        if (this.$route.params.index === 'ice-sheet') {
            this.data = this.iceSheet
        }
        console.log(this.$route.params.index)
    }
}
