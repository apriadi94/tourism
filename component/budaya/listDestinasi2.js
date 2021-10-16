import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ListDestinasi2 = () => {
    const imageLists = [
        "https://assets.indozone.news/local/5dd352fb23fcc.jpg",
        "https://lh3.googleusercontent.com/proxy/F1RuL-NP4xwItfAf9vm3GUfwpS7HtwK1AaO--ZZtCJ-wbHEzL5V5D30rsAeqGup6D26dynp0eIMQEi6jfRYq4iH-Vqqea98uCnkpENHghOoTzKdy8stmL86dfq_ib_yzBevTrnG9bO_RGatZRY_V",
        "https://upload.wikimedia.org/wikipedia/id/4/4f/Menara-masjid-agung-cilacap.jpg",
        "https://infopublik.id/assets/upload/headline//20160424020002.jpg",
        "http://bengkayangkab.go.id/wp-content/uploads/2019/06/ggggg.jpeg",
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