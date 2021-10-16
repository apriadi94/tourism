import { useState } from "react";
import { useRouter } from 'next/router'
const CircleList = () => {
    const router = useRouter()
    const imageList = [
        "https://www.gotravelly.com/blog/wp-content/uploads/2020/09/bali.jpg",
        "https://blog.zenrooms.com/wp-content/uploads/2016/03/shutterstock_740251354-256x256.jpg",
        "/tempat-wisata-di-Indonesia.jpg",
        "/padar-2e097c2b4aa2ea93fe57634a9c51a46d_600x400.jpg",
        "https://www.gotravelly.com/blog/wp-content/uploads/2018/05/candi-borobudur.jpg",
        "https://blog.pergi.com/wp-content/uploads/2019/07/Wisata-Indonesia-yang-Mirip-dengan-Luar-Negeri-Sumber-Instagram-isal_gorontalo-min.jpg",
        "/XX-Wisata-di-Timur-Indonesia-ya.width-800.jpegquality-80.jpg"
    ]

    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <hr className="my-5 mx-5"/>
            <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch scrollbar-hide md:gap-5 ml-10 md:ml-0 md:items-center md:justify-center mr-5">
                {
                    imageList.map(image => 
                        <img  onClick={() => setShowModal(true)} className="cursor-pointer border-2 border-yellow-400 rounded-full w-20 hover:w-28 h-20  hover:h-24 mr-5" src={image}/>
                    )
                }
            </div>
          <hr className="my-5 mx-5"/>

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
                        <img src="https://anekatempatwisata.com/wp-content/uploads/2015/08/Gili-Trawangan-1000x600.jpg"/>
                    </div>
                    <div>
                        <p className="text-center mt-5 text-2xl underline font-serif">Pantai Indah Lestari</p>
                        <p className="ml-5 mt-5 text-sm font-serif">Mari tenggelamkan diri anda bersama indahnya Pantai Indah Lestari. Air laut yang jernih membuat anda dapat melihat secara langsung batu karang. Banyak resort tersedia dipantai ini</p>
                       <div className="flex mt-8">
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

export default CircleList;