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
                            src="https://taoanhonline.com/wp-content/uploads/2019/07/hinh-nen-avenger-8.jpg"
                            alt="First slide"
                        />
                   </div>
                    <Carousel.Caption>
                        <h3>Welcome to DMBD</h3>
                        <p>This is my website, these are my favorite movies.</p>
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
                        <p>Hello world. Today is a beautiful day.</p>
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
                        <p>Hello world. Have a nice weekend.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
