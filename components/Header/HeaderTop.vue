<template>
    <div>
        <!-- <HeaderTop/> -->
        <div class="header">
            <div class="container-header">
                <ul>
                    <li>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0221 1L5.51708 11L1.02209 6.76894" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>
                            Over 150+ transactions
                        </p>
                    </li>
                    <li>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0221 1L5.51708 11L1.02209 6.76894" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>
                            Board members in big corporates
                        </p>
                    </li>
                    <li>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.0221 1L5.51708 11L1.02209 6.76894" stroke="white" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>
                            Extensive network
                        </p>
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
    position: relative;
    z-index: 3;
    padding: 0 200px;
    background-color: #8D9986;
}

.container-header {

    display: flex;
    align-items: center;
}



ul {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    gap: 40px;
}

li {
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
    .container-header {
        width: 1080px;
        display: flex;
        justify-content: space-between;
    }
}

@media screen and (max-width: 1239px) {
    .header {
        display: none;
    }

    .mob {
        display: block;
        background-color: #001d3d;
    }

    /* .container-header {
        width: 785px;
        display: flex;
        justify-content: space-between;
    }

    li p {
        color: #fff;
        font-size: 12px;
    }

    ul {
        width: 680px;
        display: flex;
        list-style: none;
        justify-content: space-between;
    } */
}

@media screen and (max-width: 720px) {

    .header {
        display: none;
    }

    .mob {
        display: block;
        background-color: #001d3d;
    }

}
</style>