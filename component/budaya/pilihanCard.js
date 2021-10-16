import { useRouter } from 'next/router'


const PilihanCard = () => {
    const router = useRouter()

    const imageList = [
        {
            id: 1,
            url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/70/63/foto-dari-seberang-sungai.jpg?w=400&h=300&s=1',
            title: 'Museum Wasaka'
        },
        {
            id: 2,
            url: 'https://kalteng.kemenag.go.id/file/fotoberita/114386.jpg',
            title: 'Topeng Sababuka'
        },
        {
            id: 3,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNmd-Iut4zvRfNXO11VwBgO8Li0AwJOzohw&usqp=CAU',
            title: 'Steak And Shake'
        },
        {
            id: 4,
            url: 'https://i.ytimg.com/vi/kNNaoRvYX40/maxresdefault.jpg',
            title: 'Pawai Budaya'
        },
        {
            id: 5,
            url: 'https://cdn0-production-images-kly.akamaized.net/zjDBoEPLJeZwCHmK2ccB7gZQ9fg=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1239022/original/024023800_1463699217-teater1.JPG',
            title: 'Seni Teater'
        },
        {
            id: 6,
            url: 'https://img.qraved.co/v2/image/data/2017/04/28/sampireun_cover-640x427-m.jpg',
            title: 'Warung Tepi Danau'
        },        
        {
            id: 7,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/rumah-betang-buntoi-300x176.jpg',
            title: 'Pantai Cemantan'
        },
        {
            id: 8,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/rumah-betang-buntoi-300x176.jpg',
            title: 'Pantai Cemantan'
        },
        
    ]
    return(
        <div className="my-10 mx-10 content-center">
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5 px-20 md:px-0">
                    {
                        imageList.map((item, index) =>
                            <div key={index} className="h-80 border-2 rounded-md">
                                <div className="h-72">
                                    <img className="rounded-md w-full px-1 mt-1 h-40" src={item.url}/>
                                    <p className="mt-2 text-center font-serif font-bold text-xl">{ item.title }</p>
                                    <hr/>
                                </div>
                                <div className="bottom-0 ml-2">
                                    <p onClick={() => router.push('/detail')} className="cursor-pointer font-bold text-blue-500 text-sm font-serif">Read More...</p>
                                </div>
                            </div>
                        )
                    }
                </div>

        </div>
    )
}

export default PilihanCard;