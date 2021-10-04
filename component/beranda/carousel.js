import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const CarouselComponent = () => {
    const slideImages = [
        {
          url: 'https://majalahpajak.net/wp-content/uploads/2015/02/lanscape.jpg',
          caption: 'Pesona Pantai Indah Lestari'
        },
        {
          url: 'https://majalahpajak.net/wp-content/uploads/2015/02/lanscape.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'https://majalahpajak.net/wp-content/uploads/2015/02/lanscape.jpg',
          caption: 'Slide 3'
        },
      ];
    return (
        <div className="slide-container">
            <Slide duration={5000}>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                <div className="bg-contain bg-center rounded-md" style={{'backgroundImage': `url(${slideImage.url})`}}>
                    <div className="slidenya absolute bottom-10 rounded-sm">
                        <p className="opacity-100 text-white text-3xl font-bold font-serif">{slideImage.caption}</p>
                    </div>
                </div>
                </div>
            ))} 
            </Slide>
        </div>
    )
}

export default CarouselComponent