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
                        <h3>Welcome to DMBD</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://static1.dienanh.net/upload//2018/06/11/phin-alice-in-wonderland-alice-o-xu-so-than-tien-672e7d.jpg"
                     
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
                        src="https://katherinetran.files.wordpress.com/2015/01/maleficent-poster.jpg"
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
