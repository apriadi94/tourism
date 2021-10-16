import { useState } from "react";
import { useRouter } from "next/router";

const ListDestinasi = () => {
    const router = useRouter()
    const imageLists = [
        "https://i.pinimg.com/originals/a6/4b/c3/a64bc3f5af8933d18f1e01dbfdc35bde.jpg",
        "https://dolanyok.com/wp-content/uploads/2019/05/gunung-putri-lembang-bandung.jpg",
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1619012092/uale9cs278cj33e9if8t.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/Tugu_pdg.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Semarang-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Solo-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Yogyakarta-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Lake-Toba-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Labuan-Bajo-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Lombok-Thumbnail-v1.jpg"
    ];

    const [showModal, setShowModal] = useState(false);

    return(
        <div className="mt-10 ml-10">
            <p className="text-3xl font-serif font-bold text-gray-600">Destinasi Pilihan</p>
            <div className="grid grid-cols-2 md:grid-cols-5 my-5 gap-5 mr-10">
                {
                    imageLists.map((item, index) => 
                        <div key={index}>
                            <img onClick={() => setShowModal(true)} className="cursor-pointer h-72 rounded-sm" src={item}/>
                        </div>
                    )
                }
                
            </div>
            {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="absolute right-5 mt-1 cursor-pointer h-16" onClick={() => setShowModal(false)}>
                    <p className="text-2xl font-bold hover:text-blue-500 h-16">X</p><br/>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="grid grid-cols-2">
                    <div>
                        <img src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/have-a-blast-at-these-5-getaway-destinations-bali/bali-long-thumbnail.jpg"/>
                        <img src="https://www.traveldailymedia.com/assets/2020/07/bali.jpg"/>
                    </div>
                    <div className="">
                        <div className="h-5/6">
                            <p className="text-center mt-5 text-2xl underline font-serif">Keindahan Kalimantan</p>
                            <p className="ml-5 mt-10 text-sm font-serif mr-5">Kalimantan adalah sebuah pulau di Indonesia yang dikenal karena memiliki pegunungan berapi yang hijau, terasering sawah yang unik, pantai, dan terumbu karang yang cantik. Terdapat banyak tempat wisata religi seperti Pura Uluwatu yang berdiri di atas tebing. Di Selatan, kota pesisir pantai kalimantan menawarkan wisata hiburan malam yang tak pernah sepi, sementara Pulang Pisau, dan Kotabaru dikenal dengan suguhan resort yang populer. Pulau Kalimantan juga dikenal sebagai tempat untuk relaksasi dengan yoga dan meditasi.</p>
                            <p className="ml-5 mt-5 text-sm font-serif mr-5">Kalimantan Menimpan banyak keindahan yang harus di kunjungi oleh setiap traveller</p>
                        </div>
                        <div className="flex">
                        <button onClick={() => setShowModal(false)} className="rounded-sm bg-red-500 hover:bg-red-300 ml-5 px-5 text-white hover:text-gray-900">Tutup</button>
                        <button onClick={() => router.push('/detail')} className="rounded-sm bg-indigo-500 hover:bg-indigo-300 ml-5 px-5 text-white hover:text-gray-900">Lihat</button>
                       </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    )
}

export default ListDestinasi;