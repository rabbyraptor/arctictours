import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class NavMenu extends Vue {
    @Emit('close-menu')
    closeMenu() {

    }
}
