import React from 'react';

function Destination() {
  return (
    <>
      <section className="product">
        <div className="container py-3">
          <div className="row py-3">
            <div className="col-lg-6 m-auto text-center">
              <h1 style={{ color: 'red' }}>Pick Your Next Destination</h1>
              <h6>Choose your spot</h6>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
  <div className="col-md-6">
    <img
      style={{ paddingLeft: '20px', paddingRight: '20px', width: '100%' }}
      src="https://www.touropia.com/gfx/d/tourist-attractions-in-singapore/marina_bay_sands.jpg"
      className="img-fluid"
      alt="Product Image"
   
    />
  </div>
  <div className="col-md-6">
    <h2 style={{ color: 'red' }} id="places">
      <b>SINGAPORE</b>
    </h2>
    <p>
      <b>
        Air Tickets: The round trip flight tickets can cost between INR 20,000 – 22,000 onwards if boarding from New Delhi or Mumbai or INR 11,000 – 15000 From Chennai or Kolkata
      </b>
    </p>
    <button className="btn btn-dark">
      <a style={{ textDecoration: 'none', color: 'white' }} href="tt.html">
        Book Tickets
      </a>
    </button>
    <h3>
      <b>Overview</b>
    </h3>
    <p>
      Singapore is a country that celebrates colorful culture. Take the best budget foreign trips to Singapore in 2023 and make loads of memories. A tiny yet modern country offers great bargains and is a wise way to spend money on a vacation. If you still haven’t explored Singapore then this your time to plan a budget international trip and visit this country.
    </p>
    <br />
    <p>
      Places To Visit: Either way don’t miss out on the Singapore tourist attractions like the famous National Museum of Singapore or Orchard Road/ Dhoby Ghaut Shopping stretch. Must Visit include Underwater World, Dolphin Lagoon
    </p>
  </div>
</div>
<br />
<br />

      <div className="row">
        <div className="col-md-6">
          <img
            style={{ paddingLeft: '20px', paddingRight: '20px',width:'100%  ' }}
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/Malaysia.jpg"
            className="img-fluid"
            alt="Product Image"
            width="600px"
            height="1400px"
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: 'red' }}>
            <b>MALAYSIA</b>
          </h2>
          <p>
            <b>Air Tickets: A round trip could start from INR 20,000 onwards</b>
          </p>
          <button className="btn btn-dark">
            <a style={{ textDecoration: 'none', color: 'white' }} href="tt.html">
              Book Tickets
            </a>
          </button>
          <h3>
            <b>Overview</b>
          </h3>
          <p>
            There are numerous exciting things to do in Malaysia that will make you have the best time here! Think of Malaysia for budget foreign trips and you shall begin to imagine turquoise waters, stunning beaches and pleasant climate. Malaysia is the perfect picturesque destination you’d been waiting for and where you can plan a low budget international trip from India.
          </p>
          <br />
          <p>
            Places To Visit In Malaysia: Kuala Lumpur, Sarawak, Pangkor, Redang Island and others places are must visit in Malaysia.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-md-6">
          <img
            style={{ paddingLeft: '20px', paddingRight: '20px',width:'100%' }}
            src="https://assets.traveltriangle.com/blog/wp-content/uploads/2017/02/thailand.jpg"
            className="img-fluid"
            alt="Product Image"
            width="600px"
            height="1400px"
          />
        </div>
        <div className="col-md-6">
          <h2 style={{ color: 'red' }}>
            <b>THAILAND</b>
          </h2>
          <p>
            <b>Air Tickets: The round trip flight tickets can cost fairly between INR 17000 – 20,000 if boarding from New Delhi or Mumbai.</b>
          </p>
          <button className="btn btn-dark">
            <a style={{ textDecoration: 'none', color: 'white' }} href="tt.html">
              Book Tickets
            </a>
          </button>
          <h3>
            <b>Overview</b>
          </h3>
          <p>
            Topping the charts is the world-renowned destination – Thailand. Indulge in its beaches, mountains, culture, food, and more. And the best part is, it is one of the cheap international destinations from India that fits just within the budget for all.
          </p>
          <br />
          <p>
            Places To Visit in Thailand: A combination of any 2-3 cities like Bangkok, Pattaya and coral islands, Ayutthaya, Chiang Mai is a good option to explore the culture of Thailand.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-lg-6 text-center m-auto">
          <br />
          <br />
          <button className="btn btn-danger">
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://traveltriangle.com/blog/budget-international-trips/">
              Click For More
            </a>
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Destination;
