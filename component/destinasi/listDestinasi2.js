import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ListDestinasi2 = () => {
    const imageLists = [
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Solo-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Yogyakarta-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Lake-Toba-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Labuan-Bajo-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Lombok-Thumbnail-v1.jpg"
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