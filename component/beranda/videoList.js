const VideoList = () => {
    return (
        <div className="bg-gray-100">
                <div className="mx-5 md:grid md:grid-cols-7 gap-10">
                <div className="col-span-4 my-2">
                <iframe width="100%" height="450" src="https://www.youtube.com/embed/iLsfsMA7TUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-span-3">
                  <div className="mt-2">
                    <p className="text-4xl text-center font-serif">Petualangan di Pulang Pisau</p>
                    <div className="border-t-2 mt-2 shadow-md	"></div>
                    <div className="grid grid-cols-2 gap-5 py-5">
                      <div className="mb-5">
                        <iframe width="100%" src="https://www.youtube.com/embed/0q5iUux3Mi0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div className="mb-5">
                        <iframe width="100%" src="https://www.youtube.com/embed/jSuRDKyQ3FQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div className="mb-5">
                        <iframe width="100%" src="https://www.youtube.com/embed/LYAMI7qMDnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                      <div className="mb-5">
                        <iframe width="100%" src="https://www.youtube.com/embed/Aw0_a92Zlz0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default VideoList;