const CircleList = () => {
    const imageList = [
        "https://www.gotravelly.com/blog/wp-content/uploads/2020/09/bali.jpg",
        "https://blog.zenrooms.com/wp-content/uploads/2016/03/shutterstock_740251354-256x256.jpg",
        "/tempat-wisata-di-Indonesia.jpg",
        "/padar-2e097c2b4aa2ea93fe57634a9c51a46d_600x400.jpg",
        "https://www.gotravelly.com/blog/wp-content/uploads/2018/05/candi-borobudur.jpg",
        "https://blog.pergi.com/wp-content/uploads/2019/07/Wisata-Indonesia-yang-Mirip-dengan-Luar-Negeri-Sumber-Instagram-isal_gorontalo-min.jpg",
        "/XX-Wisata-di-Timur-Indonesia-ya.width-800.jpegquality-80.jpg"
    ]
    return (
        <div>
            <hr className="my-5 mx-5"/>
            <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch scrollbar-hide md:gap-5 ml-10 md:ml-0 md:items-center md:justify-center mr-5">
                {
                    imageList.map(image => 
                        <img className=" border-2 border-yellow-400 rounded-full w-20 h-20 mr-5" src={image}/>
                    )
                }
            </div>
          <hr className="my-5 mx-5"/>
        </div>
    )
}

export default CircleList;