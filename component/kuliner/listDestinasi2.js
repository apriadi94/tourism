import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ListDestinasi2 = () => {
    const imageLists = [
        "https://i.pinimg.com/564x/37/d9/52/37d952c9e2e0db7a7b6847f98556b00b.jpg",
        "https://i.pinimg.com/564x/2b/87/5a/2b875a470c9bb09140fb1fa49d126e36.jpg",
        "https://twolovesstudio.com/wp-content/uploads/2019/05/Professional-Food-Photography-Portfolio-Must-Haves-4-768x1151.jpg",
        "http://jasafotojakarta.com/wp-content/uploads/DFCADA8F-0BE1-4E57-8DF1-9DFCB9A62D17.jpeg",
        "http://jasafotojakarta.com/wp-content/uploads/D886B707-208B-4EFC-8024-DAE4544C9F07.jpeg"
    ];

    const [photo, setPhoto] = useState({
        photoIndex: 0,
        isOpen: false,
    })

    return(
        <div className="mt-10 ml-10">
            <div className="grid grid-cols-2 md:grid-cols-5 my-5 gap-5 mr-10">
                {
                    imageLists.map((item, index) => 
                        <div key={index}>
                            <img
                            onClick={() => setPhoto({ photoIndex: index, isOpen: true })}
                            className="cursor-pointer h-72 rounded-sm transform transition duration-500 hover:scale-125 hover:z-50" src={item}/>

                        </div>
                    )
                }
                
            </div>

        {photo.isOpen && (
          <Lightbox
            mainSrc={imageLists[photo.photoIndex]}
            nextSrc={imageLists[(photo.photoIndex + 1) % imageLists.length]}
            prevSrc={imageLists[(photo.photoIndex + imageLists.length - 1) % imageLists.length]}
            onCloseRequest={() => setPhoto({ ...photo, isOpen: false })}
            onMovePrevRequest={() =>
              setPhoto({
                ...photo,
                photoIndex: (photo.photoIndex + imageLists.length - 1) % imageLists.length,
              })
            }
            onMoveNextRequest={() =>
              setPhoto({
                ...photo,
                photoIndex: (photo.photoIndex + 1) % imageLists.length,
              })
            }
          />
        )}
        </div>
    )
}

export default ListDestinasi2;