import ListDestinasi2 from "../../component/destinasi/listDestinasi2";
import PilihanCard from "../../component/destinasi/pilihanCard";
import Layout from "../../component/layout"

const Destinasi = () => {
    return(
        <Layout header="Keindahan Pulang Pisau">
            <ListDestinasi2/>
            <hr className="mx-10"/>
            <div className="ml-10 mt-10">
                <p className="text-3xl font-serif font-bold">Sekilas Info Pulang Pisau</p>
                <p className="font-serif py-5">
                    Pulang Pisau adalah salah satu kabupaten di Kalimantan tengah yang menyimpan banyak tempat wisata indah nan cantik. Bak mutiara, Kalimantan tengah memiliki segudang tempat wisata yang mungkin jarang diketahui banyak orang. Salah satu daerah yang bisa Anda kunjungi untuk mengeksplorasi wisata yang ada di Kalimantan tengah adalah Pulang Pisau. Pulang Pisau mungkin masih jarang Anda dengar namanya, namun siapa sangka jika Pulang Pisau memiliki keindahan yang tersembunyi. Pulang Pisau kini bahkan di gadang-gadang menjadi salah satu kandidat dari ibukota baru. Anda bisa bisa menjelajah ke tempat wisata di Pulang Pisau terlebih dahulu sebelum tempat yang satu ini dipadati oleh pengunjung. Penasaran wisata apa saya yang bisa Anda kunjungi ?
                </p>
            </div>
            <PilihanCard/>
        </Layout>
    )
}

export default Destinasi;