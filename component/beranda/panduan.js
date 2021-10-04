const Panduan = () => {
    return(
        <div className="mt-10 ml-10">
            <p className="text-3xl font-serif font-bold text-gray-600">Panduan Perjalanan</p>
            <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5 mr-10">
                <div>
                    <img className="rounded-sm h-48 w-full" src="https://www.pranataprinting.com/wp-content/uploads/2021/02/Sejarah-Singkat-Perusahaan-Traveloka-dan-Perkembangannya.jpg"/>
                    <div>
                        <p className="font-serif text-gray-700 text-sm text-justify mt-5">
                            Anda dapat dengan mudah mencari tiket perjalanan anda dengan menggunakan aplikasi traveloka, kebanyakan informasi mengenai tiket perjalanan, hotel dan informasi mengenai tujuan tercantum dalam aplikasi ini
                        </p>
                    </div>
                </div>
                <div>
                    <img className="rounded-sm h-48 w-full" src="https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/logo-gojek-dan-grab.jpg"/>
                    <div>
                        <p className="font-serif text-gray-700 text-sm text-justify mt-5">
                            Wilayah Kabupaten Pulang Pisau juga sudah terjangkau oleh perusahaan besar Gojek dan Grab untuk mempermudah perjalanan anda,
                        </p>
                    </div>
                </div>
                <div>
                    <img className="rounded-sm h-48 w-full" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/banner-2020/GeneralInformation.jpg"/>
                    <div>
                        <p className="font-serif text-gray-700 text-sm text-justify mt-5">
                            Nikmati perjalanan anda di Kabupaten Pulang Pisau, kami berusaha memberikan yang terbaik untuk kenyamanan para turis, dan traveller. Semoga anda berkenan meninggalkan kesan yang baik untuk kami.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Panduan;