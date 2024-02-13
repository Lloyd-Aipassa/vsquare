<template>
    <div>
        <!-- <HeaderTop/> -->
        <div class="header">
            <div class="container-header">
                <ul>
                    <li>
                        <div class="kwaliteit1">
                            <p>
                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0221 1L5.51708 11L1.02209 6.76894" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Over 150+ transactions
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="kwaliteit2">
                            <p>
                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0221 1L5.51708 11L1.02209 6.76894" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Board members in big corporates
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="kwaliteit3">
                            <p>
                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.0221 1L5.51708 11L1.02209 6.76894" stroke="white" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Extensive network
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>



<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 38px;
    z-index: 3;
    padding: 0 200px;
    background-color: #8D9986;
}

.container-header {
    display: flex;
    align-items: center;
    position: relative;
}



ul {
    position: relative;
    display: flex;
    list-style: none;
    justify-content: flex-end;
    gap: 40px;
}

.kwaliteit1,
.kwaliteit2,
.kwaliteit3 {
    display: flex;
    gap: 5px;
    align-items: center;
}

img {
    width: 14px;
}

li p {
    color: #fff;
    font-size: 14px;
}

@media screen and (max-width: 1439px) {
    .header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 96px;

    }
}

@media screen and (max-width: 1239px) {}

@media screen and (max-width: 720px) {
    .header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 96px;
    }

    ul {
        display: block;
        position: relative;
    }

    li p {
        width: 300px;
    }


    .kwaliteit1,
    .kwaliteit2,
    .kwaliteit3 {
        position: absolute;
        display: block;
        margin: 0 auto;
        margin-top: -10px;
        text-align: center;
        transform: translate(-50%);
        justify-content: center;
        align-items: center;
    }

    .kwaliteit1 {
        display: flex;

        animation-name: kwaliteit1;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        transition: all 0.1s;
    }

    @keyframes kwaliteit1 {
        0% {
            display: flex;
        }

        23% {
            display: flex;
        }

        24% {
            display: none;
        }

        66% {
            display: none;
        }

        100% {
            display: none;
        }

    }

    .kwaliteit2 {
        display: none;
        animation-name: kwaliteit2;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        transition: all 0.1s;
    }

    @keyframes kwaliteit2 {
        0% {
            display: none;
        }


        33% {
            display: flex;
        }

        33% {
            display: flex;
        }

        56% {
            display: flex;
        }

        57% {
            display: none;
        }

        100% {
            display: none;
        }

    }

    .kwaliteit3 {
        display: flex;
        /* opacity: 0; */
        animation-name: kwaliteit3;
        animation-duration: 20s;
        animation-iteration-count: infinite;
        transition: all 0.1s;
    }

    @keyframes kwaliteit3 {
        0% {
            display: none;
        }

        33% {
            display: none;
        }

        65% {
            display: block;
        }

        66% {
            display: block;
        }

        89% {
            display: block;
        }

        99% {
            display: none;
        }

        100% {
            display: none;
        }


    }

}
</style>