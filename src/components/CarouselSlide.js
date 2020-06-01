import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselSlide() {
    return (
        <div className="carousel-block">
            <Carousel>
                <Carousel.Item>
                   <div class="img-slide">
                        <img
                            className="d-block w-100"
                            src="https://downtownwinnipegbiz.com/wp-content/uploads/2016/07/downtown-winnipeg-drive-in-movie-superhero-website-slider.jpg"
                            alt="First slide"
                        />
                   </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static.wixstatic.com/media/2656c9_8ee715e2a99140bc83ff836eef1e5340~mv2_d_1600_1200_s_2.jpg/v1/fill/w_1100,h_825,al_c,q_85,usm_0.66_1.00_0.01/2656c9_8ee715e2a99140bc83ff836eef1e5340~mv2_d_1600_1200_s_2.webp"
                     
                        alt="Second slide"
                    />
    
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://1.bp.blogspot.com/-7ye4L_ApSTY/XNqCrCBsyUI/AAAAAAAApPg/KAkH2Y8NJCw8QasXHJHMVAJBFQ2I-XuYwCLcBGAs/s1600/53465139_2364951046851173_7524538563765993472_o.jpg"
                        alt="Third slide"
                    />
    
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
