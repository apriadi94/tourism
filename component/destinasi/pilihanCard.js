const PilihanCard = () => {
    const imageList = [
        {
            id: 1,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/rumah-betang-buntoi-300x176.jpg',
            title: 'Rumah Batang Buntoi'
        },
        {
            id: 2,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/cemantan-1-1-300x169.jpg',
            title: 'Pantai Cemantan'
        },
        {
            id: 3,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2018/09/Pantai-Cemantan-Bahaur-300x169.jpg',
            title: 'Pantai Cemantan Bahaur'
        },
        {
            id: 4,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/rumah-betang-buntoi-300x176.jpg',
            title: 'Pantai Cemantan'
        },
        {
            id: 5,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/rumah-betang-buntoi-300x176.jpg',
            title: 'Pantai Cemantan'
        },
        {
            id: 6,
            url: 'http://pulangpisautourism.com/wp-content/uploads/2021/09/rumah-betang-buntoi-300x176.jpg',
            title: 'Pantai Cemantan'
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
                                    <p className="font-bold text-blue-500 text-sm font-serif">Read More...</p>
                                </div>
                            </div>
                        )
                    }
                </div>
        </div>
    )
}

export default PilihanCard;