import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css'; // Create this file for custom styles

const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="carousel-card">
                    <img src="https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww" alt="Card 1" />
                    
                   <h5>My experience with MBBS WALA was wonderful. My counselor was extremely efficient and helped me with every possible aspect, right from short listing universities. I would recommend getting in touch with MBBS WALA.</h5>
                </div>
                <div className="carousel-card">
                    <img src="https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww" alt="Card 2" />
                    
                   <h5>My experience with MBBS WALA was wonderful. My counselor was extremely efficient and helped me with every possible aspect, right from short listing universities. I would recommend getting in touch with MBBS WALA.</h5>
                </div>
                <div className="carousel-card">
                    <img src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww" alt="Card 3" />
                    
                   <h5>My experience with MBBS WALA was wonderful. My counselor was extremely efficient and helped me with every possible aspect, right from short listing universities. I would recommend getting in touch with MBBS WALA.</h5>
                </div>
               
            </Slider>

            <div>
                <h1>OUR ACHIEVEMENT'S</h1>

                <div>
                    <img src='https://image.slidesharecdn.com/mbbsinindiavishwamedicaladmissionpoint-220223143003/95/Mbbs-in-india-vishwa-medical-admission-point-3-638.jpg' width="950"
                    height=""/>
                </div>

                <div>
                    <img src='https://image.slidesharecdn.com/mbbsinindiavishwamedicaladmissionpoint-220223143003/95/Mbbs-in-india-vishwa-medical-admission-point-4-638.jpg' width="950"
                    height=""/>
                </div>

                <div>
                    <img src='https://image.slidesharecdn.com/mbbsinindiavishwamedicaladmissionpoint-220223143003/95/Mbbs-in-india-vishwa-medical-admission-point-5-638.jpg' width="950"
                    height=""/>
                </div>
            </div>

            <div>
                <h1>OUR CAMPUS </h1>

                <Slider {...settings}>
                <div className="carousel-card">
                    <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D" alt="Card 1" />
                    
                   <h5>Our college best infrasture</h5>
                </div>
                <div className="carousel-card">
                    <img src="https://plus.unsplash.com/premium_photo-1683167306255-e18aa6365a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGxlZ2UlMjBjYW1wdXMlMjBmYWN1bHR5J3N8ZW58MHx8MHx8fDA%3D" alt="Card 2" />
                    
                   <h5>Best faculty's </h5>
                </div>
                <div className="carousel-card">
                    <img src="https://images.unsplash.com/photo-1461039088886-b5c863279a0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGxlZ2UlMjBjYW1wdXMlMjBmYWN1bHR5J3N8ZW58MHx8MHx8fDA%3D" alt="Card 3" />
                    
                   <h5>Best placements </h5>
                </div>

               
            </Slider>
            <div>
                <h1>Our Latest Achievements of Students</h1>

                <img src='https://plus.unsplash.com/premium_photo-1683887034473-74e486cdb7a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D' width="350"
                height=""/>

            
            </div>
            <p>Despite their ascribed intellectual ability and achieved academic pursuits, medical students' academic achievement is influenced by motivation. This study is an endeavor to examine the role of motivation in the academic achievement of medical students. In this cross-sectional correlational study, out of the total 422 medical students, from 4th to final year during the academic year 2007-2008, at School of Medicine, Isfahan University of Medical Sciences, 344 participated in completion of the Inventory of School Motivation (ISM), comprising 43 items and measuring eight aspects of motivation. The gold standard for academic achievement was their average academic marks at pre-clinical and clinical levels. Data were computer analyzed by running a couple of descriptive and analytical tests including Pearson Correlation and Student's t-student. Higher motivation scores in areas of competition, effort, social concern, and task were accompanied by higher average marks at pre-clinical as well as clinical levels. However, the latter ones showed greater motivation for social power as compared to the former group. Task and competition motivation for boys was higher than for girls. In view of our observations, students' academic achievement requires coordination and interaction between different aspects of motivation.</p>

            </div>
        </div>
    );
};

export default CarouselComponent;
