import { Link } from 'react-router-dom'

function HitungPage() {
    return (
        <>
            <div className="row mx-1">
                <div className="col p-0">
                    <Navbar />
                    <Hitung />
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
                      <Link className="nav-link" style={{color: '#000000'}} to="/hitung">
                        <i className="fas fa-address-card"></i>
                        Hitung WR ML
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={{color: '#000000'}} to="/magic">
                        <i className="fas fa-address-card"></i>
                        HP Magic Wheel
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" style={{color: '#000000'}} to="/zodiac">
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

function Hitung() {
    return(
        <div className="d-flex flex-column h-100 min-vh-100 text-white bg-dark" style={{ backgroundColor: "#2d3238"}}>
        <div className="wrapper pt-4">
            <div className="container" style={{marginTop: '30px'}}>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9 col-sm-9">
                        <div className="text-center mb-3">
                            <img className="mlImg" src="https://ourastore.com/assets/img/settings/1652681321tes 1.png" alt="MobileLegends"></img>
                        </div>
                        <h5 className="text-white mt-3 mb-1">Calculator Winrate Mobile Legends</h5>
                        <small className="text-white">
                            Digunakan untuk menghitung total pertandingan yang harus ditempuh untuk mencapai target winrate yang diinginkan.
                        </small>
                        <hr/>
                        <form className="mb-3">
                            <div className="mb-3">
                                <label className="mb-1" htmlFor="idMatch">Total Pertandingan Anda</label>
                                <input id="tMatch" className="form-control" type="number" placeholder="Contoh: 351" autoFocus="" autoComplete="off"></input>
                            </div>
                            <div className="mb-3">
                                <label className="mb-1" htmlFor="tWr">Total Win Rate Anda</label>
                                <input id="tWr" className="form-control" type="number" placeholder="Contoh: 51.4" step="any" autoComplete="off"></input>
                            </div>
                            <div className="mb-3">
                                <label className="mb-1" htmlFor="wrReq">Win Rate yang anda inginkan</label>
                                <input id="wrReq" className="form-control" type="number" placeholder="Contoh: 351" step="any" autoComplete="off"></input>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button id="hasil" className="btn btn-primary d-block w-100" style={{backgroundColor: '#b19973'}} type="button">Hasil</button>
                                </div>
                                <div className="col">
                                    <Link className="btn btn-primary d-block w-100" style={{backgroundColor: '#b19973'}} to="">Order Joki</Link>
                                </div>
                            </div>
                        </form>
                        <span id="resultText" className="text-center d-block"></span>
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

export default HitungPage;