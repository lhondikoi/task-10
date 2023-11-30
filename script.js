var el = document.querySelector('#countdown')

setTimeout(
    () => {
        el.innerHTML = "9"
        setTimeout(
            () => {
                el.innerHTML = "8"
                setTimeout(
                    () => {
                        el.innerHTML = "7"
                        setTimeout(
                            () => {
                                el.innerHTML = "6"
                                setTimeout(
                                    () => {
                                        el.innerHTML = "5"
                                        setTimeout(
                                            () => {
                                                el.innerHTML = "4"
                                                setTimeout(
                                                    () => {
                                                        el.innerHTML = "3"
                                                        setTimeout(
                                                            () => {
                                                                el.innerHTML = "2"
                                                                setTimeout(
                                                                    () => {
                                                                        el.innerHTML = "1"
                                                                        setTimeout(
                                                                            () => {
                                                                                el.innerHTML = "Happy Independence Day!"
                                                                            }, 1000
                                                                        )
                                                                    }, 1000
                                                                )
                                                            }, 1000
                                                        )
                                                    }, 1000
                                                )
                                            }, 1000
                                        )
                                    }, 1000
                                )
                            }, 1000
                        )
                    }, 1000
                )
            }, 1000
        )
    }, 1000
)