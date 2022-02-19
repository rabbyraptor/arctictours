import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
    setTimeout(() => {
        app.AOS = new AOS.init({
            disable: 'mobile', // window.innerWidth < 640,
            offset: 130,
            duration: 600,
            easing: 'ease-in-out-cubic',
            once: true,
            delay: 100
        }) // or any other options you need
    }, 60)
}