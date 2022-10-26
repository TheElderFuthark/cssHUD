export default class DecreaseBar {
    decrease(bar, value) {
        if(value > 0.00) {
            bar.currentTarget.style.width = value - 0.25;
        }

    }

}
