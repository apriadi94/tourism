import Layout from "../component/layout"
import CarouselComponent from "../component/beranda/carousel"
import SearchInput from "../component/beranda/searchInput"
import CircleList from "../component/beranda/circleList"
import VideoList from "../component/beranda/videoList"
import TextPromosi from "../component/beranda/textPromosi"
import ListDestinasi from "../component/beranda/listDestinasi"
import Panduan from "../component/beranda/panduan"

export default function Home() {
  return (
    <Layout>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-4 sm:px-0">
            <div className="border-4 border-gray-200 rounded-lg h-96">
                <CarouselComponent/>
            </div>
          </div>
          <SearchInput/>
          <CircleList/>
          <div className="border-2 mt-5 shadow-md">
            <VideoList/>
            <TextPromosi/>
            <ListDestinasi/>
            <Panduan/>
          </div>
        </div>
    </Layout>
  )
}
