import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class BurgerMenu extends Vue {
    public isOpen: boolean = false;

    @Watch('close-menu', {
        immediate: true, deep: true
    })
    closeMenu() {
        this.isOpen = !this.isOpen
    }
}
