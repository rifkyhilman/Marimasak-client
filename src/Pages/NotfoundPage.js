import Image_404 from "../Assets/404_page.png";
import "../Styles/NotfoundPage.scss";

const NotfoundPage = () => {
    return(
        <div className="Container404">
            <div className="Container404__Content">
                <img src={Image_404} alt="NotFoundPage-img" />
                <div className="Container404__Content__description">
                    <p>Halaman Tidak ditemukan</p>
                </div>
            </div>
        </div>
    )
}

export default NotfoundPage;