import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class BurgerMenu extends Vue {
    public isOpen: boolean = true;

    @Watch('close', { immediate: true, deep: true })
    close() {
        this.isOpen = !this.isOpen
    }
}
