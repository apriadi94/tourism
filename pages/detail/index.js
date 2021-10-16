import Layout from "../../component/layout"
import GoogleMapReact from 'google-map-react';

const Detail = () => {
    return (
        <Layout>
            <div>
                <img className="w-full" src="/pantai-terindah-di-indonesia.jpg"/>
            </div>
            <div className="grid md:grid-cols-3 md:px-40 px-5 mt-5 mb-5 md:gap-5">
                <div className="md:col-span-2 w-full">
                    <h1 className="text-5xl font-bold font-serif">Pantai Bengkeng</h1>
                    <hr className="mt-5"/>
                    <p className="mt-5 font-serif">
                        Pantai bengkeng adalah pantai yang penuh dengan pesona. 
                        salah satu destinasi menarik yang selalu mengundang wisatawan untuk berkunjung, dan menghabiskan malam mereka di penginapan dan hotel terdekat.
                        Pantai Bengkeng terletak di tengah tengah lautan yang airnya sangat jernih. 
                    </p>
                    <p className="mt-2 font-serif">
                       Pantai Bengkeng dapat di tempuh dengan perjalanan naik kapal selama 1 jam dari Pelabuhan Tanjung Pinang.
                       Selama dalam perjalanan wisatawan akan melihat berbagai macam penghuni hewan laut, termasuk lumba-lumba yang senang melihat pergerakan benda diatas air (kapal)
                    </p>
                    <img className="mt-2 rounded-sm" src="https://cdn.popbela.com/content-images/post/20180623/anse-lazio-praslin-4-eb6c0e8cb2eeb73426fc6d8fafb01335.jpg"/>
                    <p className="mt-3 text-3xl font-serif font-bold">Pantai Dengan Resort</p>
                    <p className="mt-3">
                        Salah satu keunggulan Pantai Bengkeng adalah, dimudahkannya wisatawan untuk bermalam menikmati pemandangan malam pantai kecil ditengah lautan yang jernih
                    </p>
                    <img className="mt-2 rounded-sm" src="https://cdn.idntimes.com/content-images/community/2018/09/72c3c327bc291a76b890a574484b37fb.jpg"/>
                    <img className="mt-2 rounded-sm" src="https://arsitagx-master-article.s3-ap-southeast-1.amazonaws.com/article-photo/324/Tamanu-Beachfront-View.jpg"/>
                    <p className="mt-3">
                        Wisatawan akan menemukan berbagai macam harga penginapan, mulai dari Rp. 150.000 - Rp. 3000.000 permalam, dengan segala pelayanan yang akan memuasakan para wisatawan.
                    </p>
                </div>

                <div className="md:col-span-1 w-full">
                    <div className="md:ml-5 sticky top-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31884.49576849911!2d115.31093186729797!3d-2.646782876581823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de56d782bbd3b99%3A0x9ee9d29f04a6e082!2sPantai%20Hambawang%20Bar.%2C%20Labuan%20Amas%20Sel.%2C%20Kabupaten%20Hulu%20Sungai%20Tengah%2C%20Kalimantan%20Selatan!5e0!3m2!1sid!2sid!4v1634351247738!5m2!1sid!2sid" className="mt-10" width="400" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Detail;