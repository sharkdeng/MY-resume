import React, {Component} from "react";

import "./Donate.css"


class Donate extends Component {
    render() {
        return (
            /**
             * Reference: http://startbootstrap.com/snippets/video-header/
             */
            <header id="donate">
                <div class="overlay"></div>
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                </video>
                <div class="container h-100">
                    <div class="d-flex h-100 text-center align-items-center">
                    <div class="w-100 text-white">
                        <h1 class="display-3">Limin Deng</h1>
                        <p class="lead mb-0">Hope lies in lasting pursuit</p>
                        <p class="lead mb-0">Be joyful, grateful, brave, confident, kind, responsible, and firm</p>
                    </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Donate