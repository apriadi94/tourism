import { useRouter } from 'next/router'


const PilihanCard = () => {
    const router = useRouter()

    const imageList = [
        {
            id: 1,
            url: 'https://awsimages.detik.net.id/community/media/visual/2021/02/04/dev-wisata-kuliner-di-aceh-besar-ini-tempatnya.jpeg?w=600&q=90',
            title: 'Warung Sari Kaya'
        },
        {
            id: 2,
            url: 'http://cdn-2.tstatic.net/kaltim/foto/bank/images/saung-pasundan_20150908_191341.jpg',
            title: 'Warung Pasundan'
        },
        {
            id: 3,
            url: 'https://anakkota.com/wp-content/uploads/2018/04/3.-tampak-depan-waroeng-steak-and-shake-660x330.jpg',
            title: 'Steak And Shake'
        },
        {
            id: 4,
            url: 'https://warnelang.files.wordpress.com/2016/11/tampak-depan.jpg',
            title: 'Alas Daun'
        },
        {
            id: 5,
            url: 'https://awsimages.detik.net.id/community/media/visual/2018/10/31/d4803272-f833-402a-a810-f3b23e8aced0.jpeg?a=1',
            title: 'Siring Laut'
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