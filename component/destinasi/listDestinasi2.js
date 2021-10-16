const ListDestinasi2 = () => {
    const imageLists = [
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Solo-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Yogyakarta-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Lake-Toba-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Labuan-Bajo-Thumbnail-v1.jpg",
        "https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/Lombok-Thumbnail-v1.jpg"
    ];

    return(
        <div className="mt-10 ml-10">
            <div className="grid grid-cols-2 md:grid-cols-5 my-5 gap-5 mr-10">
                {
                    imageLists.map((item, index) => 
                        <div key={index}>
                            <img className="h-72 rounded-sm" src={item}/>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default ListDestinasi2;