import { Link } from 'react-router-dom'

export default function HomePage(){
    return(
        <>
            <div className="row mx-1">
        <div className="col p-0">
          <Content />
          <Navbar />
        </div>
      </div>
        </>
    )
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
  
  function Content() {
    return (
      <div className="d-flex flex-column w-full h-100 min-vh-100 text-white bg-dark" style={{ backgroundColor: "#2d3238"}}>
        <div className="container" style={{ marginTop: '100px' }}>
          <div className="row d-none d-lg-block">
            <div className="row d-none d-lg-block">
              <div className="col-lg-9 mx-auto">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" role="group" aria-label="1 / 3">
                      <img src="https://ourastore.com/assets/img/1690866022YIN BANNER.jpg" className="d-block w-100" alt="" style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="carousel-item active" role="group" aria-label="2 / 3">
                      <img src="https://ourastore.com/assets/img/1690866042BANNER WEBSITE AGUSTUS.jpg" className="d-block w-100" alt="" style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="carousel-item active" role="group" aria-label="3 / 3">
                      <img src="https://ourastore.com/assets/img/1690866057WhatsApp Image 2023-06-30 at 11.33.12.jpeg" className="d-block w-100" alt="" style={{ borderRadius: '20px' }} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="nav-item col-lg-12 dropdown d-lg-inline-block mx-auto d-none">
                  <div className="row h-100 ">
                    <div className="col-sm d-flex justify-content-center mt-3">
                      <ul id="myTab" className="nav nav-pills justify-content-left horitab-scroll" role="tablist">
                        <li style={{ backgroundColor: "#b19973", borderRadius: '5px' }} className="nav-item me-1" role="presentation">
                          <button id="top-up-tab" className="btn-sm btn-category nav-link" data-bs-toggle="tab" data-bs-target="#top-up" type="button" role="tab" aria-controls="game" aria-selected="true">
                            <small style={{ color: 'white' }}>Top Up</small>
                          </button>
                        </li>
                        <li style={{ backgroundColor: "#b19973", borderRadius: '5px' }} className="nav-item me-1" role="presentation">
                          <button id="joki-tab" className="btn-sm btn-category nav-link" data-bs-toggle="tab" data-bs-target="#joki" type="button" role="tab" aria-controls="game" aria-selected="true">
                            <small style={{ color: 'white' }}>Joki</small>
                          </button>
                        </li>
                        <li style={{ backgroundColor: "#b19973", borderRadius: '5px' }} className="nav-item me-1" role="presentation">
                          <button id="pulsa-tab" className="btn-sm btn-category nav-link" data-bs-toggle="tab" data-bs-target="#pulsa" type="button" role="tab" aria-controls="game" aria-selected="true">
                            <small style={{ color: 'white' }}>Pulsa</small>
                          </button>
                        </li>
                        <li style={{ backgroundColor: "#b19973", borderRadius: '5px' }} className="nav-item me-1" role="presentation">
                          <button id="voucher-tab" className="btn-sm btn-category nav-link" data-bs-toggle="tab" data-bs-target="#voucher" type="button" role="tab" aria-controls="game" aria-selected="true">
                            <small style={{ color: 'white' }}>Voucher</small>
                          </button>
                        </li>
                        <li style={{ backgroundColor: "#b19973", borderRadius: '5px' }} className="nav-item me-1" role="presentation">
                          <button id="token-listrik-tab" className="btn-sm btn-category nav-link" data-bs-toggle="tab" data-bs-target="#token-listrik" type="button" role="tab" aria-controls="game" aria-selected="true">
                            <small style={{ color: 'white' }}>Token Listrik</small>
                          </button>
                        </li>
                        <li style={{ backgroundColor: "#b19973", borderRadius: '5px' }} className="nav-item me-1" role="presentation">
                          <button id="live-show-tab" className="btn-sm btn-category nav-link" data-bs-toggle="tab" data-bs-target="#live-show" type="button" role="tab" aria-controls="game" aria-selected="true">
                            <small style={{ color: 'white' }}>Live Show</small>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm mt-3">
                      <form action="" method="get">
                        <div id="dropsearchdown" className="input-group me-3 search-bar" aria-haspopup="true">
                          <input id="searchProds" className="form-control search_input" type="text" name="q" placeholder="Search products..." autoComplete="off" />
                          <button style={{ backgroundColor: "#b19973" }} id="btnSearchProds" className="btn btn-primary" type="submit">
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                        <ul id="dropDownSearchResults" className="dropdown-menu dropdown-menu-dark position-absolute shadow navbar-nav-scroll" aria-labelledby="dropsearchdown"></ul>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="row mb-4">
                <div className="col-lg-9 mx-auto mt-2">
                  <div className="row row-cols-3 row-cols-md-6 g-2 justify-content-center">
                    <div className="col-12 mt-3 d-flex flex-wrap gap-2">
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1683475732mlbbly.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3d-none d-lg-block text-center">
                          <small className="text-sm">Mobile Legends (MLBB)</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1683475732mlbbly.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Mobile Legends Paket Irit</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685030ezgif.com-gif-maker (13).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Free Fire Indonesia</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689522040ff max.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Free Fire Max</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685082ezgif.com-gif-maker (7).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Call of Duty Mobile Garena</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685069ezgif.com-gif-maker (48).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Valorant</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685057ezgif.com-gif-maker (29).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">League Of Legends: Wild Rift</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685094ezgif.com-gif-maker.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Arena of Valor Garena</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685038ezgif.com-gif-maker (15).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Genshin Impact</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685146ezgif.com-gif-maker (45).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Sausage Man</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1688661119seal-m-sea.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Seal M SEA</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689864823undawn.jpg      " alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Garena Undawn</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685109ezgif.com-gif-maker (19).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Honkai Impact 3</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685366ezgif.com-gif-maker (14).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Football Master 2</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689521476ace racer.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Ace Racer</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689762672alchemy star.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Alchemy Stars</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689765190arena breakot.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Arena Breakout</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1690719149badlanders_tile.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Badlanders</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689762214brawl-stars.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Brawl Stars</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689761810coc.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Clash of Clans</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1689762011clashroyale.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Clash Royale</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1690719619crisis_action_tile.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Crisis Action</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1687440897cloudsong.jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Cloud Song: Saga of Skywalkers</small>
                        </div>
                      </div>
                      <div className="card bg-dark shadow h-auto rounded-card1" style={{ width: '150px', overflow: "hidden", borderRadius: "10px", cursor: 'pointer' }}>
                        <img className="card-img-top rounded-img-buy p-0 m-0" src="https://ourastore.com/assets/img/1671685394ezgif.com-gif-maker (9).jpg" alt="" />
                        <div className="card-body py-md-0 pb-3 d-none d-lg-block text-center">
                          <small className="text-sm">Crossing Vold</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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