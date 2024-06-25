import React from 'react';
import w1 from "../assets/images (2).jpeg";
import w2 from "../assets/download.png";
import w3 from "../assets/1585160384421.jpeg";
function Products() {
  return (
    <>
      <section className="product">
        <div className="container py-3">
          <div className="row py-3">
            <div className="col-lg-5 m-auto text-center">
              <h1 style={{ color: 'red' }}>Our Group Companies</h1>
              <h6 id="partners"><u>Our Partners</u></h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 text-center">
              <div className="card border-0 bg-light mb-2">
                <div className="card-body">
                  <img src={w2} className="img-fluid" alt="" width="300px" height="400px" />
                </div>
              </div>
              <h4 style={{padding: 5}}>DNATA</h4>
              <p>Dnata is one of the world’s largest air services providers, offering ground handling, cargo, catering and travel services to more than 400 airlines in over 80 countries on 6 continents.</p>
              <br/><button type="button" className="btn btn-danger"><a style={{ textDecoration: 'none', color: 'white' }} href="https://www.dnatatravel.com/v2/">Go To Website</a></button>
            </div>
            <div className="col-lg-4 text-center">
              <div className="card border-0 bg-light mb-3">
                <div className="card-body">
                  <img src={w1} className="img-fluid" alt="" width="300px" height="400px" />
                </div>
              </div>
              <h4>Arabian Adventures</h4>
              <p>Leading destination management company offering personalized service & genuine Arabian hospitality. Arabian Adventure is a 1979 British fantasy adventure film directed by Kevin Connor.</p>
              <br/><button type="button" className="btn btn-danger"><a style={{ textDecoration: 'none', color: 'white' }} href="https://www.arabian-adventures.com/ae/english">Go To Website</a></button>
            </div>
            <div className="col-lg-4 text-center">
              <div className="card border-0 bg-light mb-2">
                <div className="card-body">
                  <img src={w3} className="img-fluid" alt="airdispatch" width="300px" height="400px" />
                </div>
              </div>
              <h4>Air Dispatch</h4>
              <p> Air Dispatch is the world’s leading independent provider of load control services. Air Dispatch CLC was founded in 2007 and is the world’s leading provider of centralized load control services.</p>
              <button type="button" className="btn btn-danger"><a style={{ textDecoration: 'none', color: 'white' }} href="https://www.air-dispatch.com/">Go To Website</a></button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center m-auto">
              <br /><br /> <button className="btn btn-dark">Click For More</button>
            </div>
          </div>
        </div>
      </section>
      <hr />
      
    </>
  );
}

export default Products;
