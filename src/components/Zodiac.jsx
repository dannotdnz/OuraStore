import { Link } from 'react-router-dom'

function ZodiacPage() {
    return (
        <>
            <div className="row mx-1">
                <div className="col p-0">
                    <Navbar />
                    <Zodiac />
                </div>
            </div>
        </>
    );
}

function Navbar() {
    return (
        <header className="mb-5">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark shadow">
                <div className="container">
                    <div className="d-flex">
                        <span className="w-100 d-lg-none d-block"></span>
                        <a className="navbar-brand d-none d-lg-inline-block" href="">
                            <img className="bi me-2" src="https://ourastore.com/assets/img/settings/1652681321tes%201.png" alt="LOGO" height="40px"></img>
                        </a>
                    </div>
                    <div className="d-flex">
                        <div className="form-check float-start form-switch ms-auto mt-3 me-3">
                            <label className="form-check-label ms-3" htmlFor="lightSwitch"></label>
                            <input id="lightSwitch" className="form-check-input" type="checkbox"></input>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarTogglerDemo03" className="collapse navbar-collapse text-right">
                        <ul className="navbar-nav ms-auto nav-stacked">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="fas fa-home">
                                    </i>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/status">
                                    <i className="fas fa-search">
                                    </i>
                                    Check Invoice
                                </Link>
                            </li>
                            <div className="dropdown">
                                <button id="dropdownMenuButton1" className="btn dropdown-toggle nav-link" type="button" data-bs-toggle="dropdown">
                                    <i className="fas fa-calculator">
                                    </i>
                                    Calculator ML
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="drowdownMenu2">
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#000000' }} to="/hitung">
                                            <i className="fas fa-address-card"></i>
                                            Hitung WR ML
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#000000' }} to="/magic">
                                            <i className="fas fa-address-card"></i>
                                            HP Magic Wheel
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" style={{ color: '#000000' }} to="/zodiac">
                                            <i className="fas fa-address-card"></i>
                                            HP Zodiac
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

function Zodiac() {
    return (
        <div className="d-flex flex-column h-100 min-vh-100 text-white bg-dark" style={{ backgroundColor: "#2d3238" }}>
            <div className="wrapper pt-4">
            <br/>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-sm-5 col-12 mb-5">
                            <img className="mlImg" src="https://ourastore.com/assets/img/settings/1652681321tes 1.png"></img>
                            <h5 className="text-white mt-3 mb-1">Kalkulator Zodiac</h5>
                            <small className="text-white">
                            Kalkulator Zodiac ini berfungsi untuk mengetahui total maksimal diamond yang kamu butuhkan untuk mendapatkan skin Zodiac.
                                <br />
                            </small>
                        </div>
                        <div className="col-sm-7 col-12">
                            <form method="post" target="">
                                <div className="row">
                                    <h5 className="mb-2 text-white">Geser Sesuai Point Zodiac Anda</h5>
                                    <div className="col-12 col-lg-8 mb-5">
                                        <div className="slidecontainer">
                                            <p></p>
                                            <span>
                                                <span color="white">Point Zodiac Anda :</span>
                                            </span>
                                            <span id="f" style={{ fontWeight: 'bold', color: '#30cdf8' }}>50</span>
                                            <br />
                                            <input id="myRange" className="slider" type="range" min="0" max="99" value="50" name="sld6"></input>
                                            <br/>
                                            <span color="white">Membutuhkan Maksimal :</span>
                                            <span id="slider_value2" style={{ color: 'white', fontWeight: 'bold' }}>850</span>
                                            <i className="fas fa-gem" style={{ color: '#00c8c8' }}></i>
                                            <br />
                                        </div>
                                        <br />
                                        <Link className="d-flex align-items-center btn btn-confirm px-4 py-2 btn-lg border" to="" style={{ backgroundColor: '#B19973' }}>
                                            <span className="content-justify-center" style={{ color: '#fff' }}>
                                                Klik Untuk Membeli Diamond
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer h-100 mt-auto border-dark shadow-lg">
          <div className="containerr mt-5">
            <div className="row">
              <div className="col-lg-6">
                <img className="bi me-3" src="https://ourastore.com/assets/img/settings/1652681321tes 1.png" alt="LOGO" style={{float: 'left', marginLeft: '2%', width: '40px'}}/>
                  <h5 className="text-uppercase mt-2" style={{margin: '0'}}>Oura Store</h5>
                  <div className="mt-2">
                    <p>
                    OURA STORE (PT OURA STORE INDONESIA) adalah tempat top up games yang aman, murah dan terpercaya. Proses cepat 1-3 Detik. Open 24 jam. Payment terlengkap. Jika ada kendala silahkan klik logo CS pada kanan bawah di website ini.
                    </p>
                  </div>
              </div>
              <div className="col-lg-3">
                <h5 className="mt-2">Menu</h5>
                <div className="mt-2">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/">
                        <i className="fas fa-angle-right text-yellow"></i>
                        Home
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </div>
    )
}

export default ZodiacPage;