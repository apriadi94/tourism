const SearchInput = () => {
    return(
        <div className="md:grid md:grid-cols-3 mr-5 md:mr-0 gap-10 ml-5 md:ml-0">
            <div className="mb-5 md:mb-0 flex border-2 rounded-md">
              <div className="bg-green-400 w-16 h-10 rounded-md"></div>
              <div className="w-full h-10 mr-10">
                <input placeholder="cari tempat wisata" className="w-full h-10 focus:outline-none ml-3 mr-10"/>
              </div>
            </div>
            <div className="mb-5 md:mb-0 flex border-2 rounded-md">
              <div className="bg-green-400 w-16 h-10 rounded-md"></div>
              <div className="w-full h-10 mr-10">
                <input placeholder="cari tempat wisata" className="w-full h-10 focus:outline-none ml-3 mr-10"/>
              </div>
            </div>
            <div className="mb-5 md:mb-0 flex border-2 rounded-md">
              <div className="bg-green-400 w-16 h-10 rounded-md"></div>
              <div className="w-full h-10 mr-10">
                <input placeholder="cari tempat wisata" className="w-full h-10 focus:outline-none ml-3 mr-10"/>
              </div>
            </div>
          </div>
    )
}

export default SearchInput;