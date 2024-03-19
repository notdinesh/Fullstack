import React from 'react';
import '../../assets/css/Home.css';
import img1 from "../../assets/images/1.jpg"
import img2 from "../../assets/images/2.jpg"
import img3 from "../../assets/images/3.jpg"
import img4 from "../../assets/images/4.jpg"
import img5 from "../../assets/images/5.jpg"
import img6 from "../../assets/images/6.jpg"
import img7 from "../../assets/images/7.jpg"
import img8 from "../../assets/images/8.jpg"
import img9 from "../../assets/images/9.jpg"
import img10 from "../../assets/images/10.jpg"
function Home() {
  return (
    <>
      <header className="bg-image">
        <div className="container">
          <h1>Crafity</h1>
          <h2>Craftify: Where Creativity Meets Quality.</h2>
          <img src={img1} className ="first" alt='img1'></img>
          <a href="/cg/user/item" className="btn btn-transparent">Order yours now!</a>
        </div>
      </header>

      <section>
        <div className="home-container">
          {/* <div className="col-3 text--center">
            <img src="http://store.storeimages.cdn-apple.com/4044/as-images.apple.com/is/image/AppleInc/aos/published/images/H/D1/HD162/HD162?wid=800&hei=800&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1400749861094" alt="" className="details-img--ball"/>
          </div> */}

        <div className="wrap">
          
          <div className="card">
            <img src={img2}/>
            <div class="info">
              <h1>Gift Yourself</h1>
              <p>Enhance your self love by gifting yourself with unique items</p>
              <a href='/cg/user/item' class="btn">Read more</a>
            </div>
          </div>

          <div className="card">
            <img src={img3}/>
            <div class="info">
              <h1>Gift for Kids</h1>
              <p>Creating wonderful memories in childhood by providing them with more gifts </p>
              <a href='/cg/user/item' class="btn">Read more</a>
            </div>
          </div>

          <div className="card">
            <img src={img4}/>
            <div class="info">
              <h1>Gift for Loved Ones</h1>
              <p>Creating many moments with our Loved ones and cherishing them by their gifts</p>
              <a href='/cg/user/item' class="btn">Read more</a>
            </div>
          </div>

        </div>

          {/* <div className="col-7 details">
            <h3>Gifts That Tell a Story, Yours to Customize.</h3>
            <p>encapsulates the essence of our personalized gifting experience. Each gift becomes a narrative, tailored to reflect the unique story of the recipient. With customization options ranging from names and dates to heartfelt messages, we empower you to craft gifts that resonate with personal significance. Every present becomes a cherished chapter in the ongoing story of your relationship, creating timeless memories to treasure.</p>
          </div> */}
        </div>
      </section>

      

      <section className="section--primary">
        
      <section className='two'>
        <div className="home-container">
          {/* <div className="col-3 text--center">
            <img src="http://store.storeimages.cdn-apple.com/4044/as-images.apple.com/is/image/AppleInc/aos/published/images/H/D1/HD162/HD162?wid=800&hei=800&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1400749861094" alt="" className="details-img--ball"/>
          </div> */}

        <div className="wrap-1">
          
          <div className="card-1">
            <img src={img5}/>
            <div class="info">
              <h1>Happy customers all over the world</h1>
              <p>Craftify Provides a better improvement in customer satisfaction</p>
              {/* <a href='#' class="btn">Read more</a> */}
            </div>
          </div>

          <div className="card">
            <img src={img6}/>
            <div class="info">
              <h1>Countless Gift Orders</h1>
              <p>Craftify receive over lakhs of orders per year</p>
              {/* <a href='#' class="btn">Read more</a> */}
            </div>
          </div>

          <div className="card">
            <img src={img7}/>
            <div class="info">
              <h1>Secure Payment</h1>
              <p>We provide different and way more protected modes of payments</p>
              {/* <a href='#' class="btn">Read more</a> */}
            </div>
          </div>

        </div>

          {/* <div className="col-7 details">
            <h3>Gifts That Tell a Story, Yours to Customize.</h3>
            <p>encapsulates the essence of our personalized gifting experience. Each gift becomes a narrative, tailored to reflect the unique story of the recipient. With customization options ranging from names and dates to heartfelt messages, we empower you to craft gifts that resonate with personal significance. Every present becomes a cherished chapter in the ongoing story of your relationship, creating timeless memories to treasure.</p>
          </div> */}
        </div>
      </section>
      </section>

      {/* <section className="section--primary--alt">
        <div className="container">
          <h3>Cutomize for your girl friend.</h3>
          <p>"Craftify lets you customize gifts for your girlfriend. Create something unique and memorable. Highly recommended!"</p>
        </div>
      </section> */}

      <section className="section--primary--light">
        <div className="container">
          <blockquote className="testimonial">
            <p>"Craftify's gifts tell stories. Customization options let me create a unique, memorable present. Highly recommend!"</p>
            <cite>
              Sudhan
            </cite>
          </blockquote>
        </div>
      </section>

      {/* <section className="section--primary--alt bg-image bg-image-2">
        <div className="container text--center">
          <h3>Reasons to buy this product:</h3>
          <div className="col-5 text--left">
            <ul>
              <li>Personal Touch</li>
              <li>Thoughtful Gesture</li>
              <li>Memorable Keepsake</li>
              <li>Tailored to Preferences</li>
              <li>Unique and Exclusive</li>

            </ul>
          </div>
          <div className="col-5 text--left">
            <ul>
              <li>Emotional Connection</li>
              <li>Celebrate Special Occasions</li>
              <li>Show Your Creativity</li>
              <li>Versatile Options</li>
              <li>Spread Happiness</li>

            </ul>
          </div>
        </div>
      </section> */}

      <section className="text--center">
        <div className="container">
          <h3>Why you still reading?</h3>
          <a href="/cg/user/item" className="btn">Order yours now!</a>
        </div>
      </section>

      {/* <footer>
        <div className="container">
          <ul>
            <li><a href="/Privacy">Privacy Poliicy</a></li>
            <li><a href="/Terms">Terms and Condition</a></li>
            <li><a href="/FAQ">FAQs</a></li>
          </ul>
          <p>&copy; 2024 Craftify. All rights reserved.</p>
        </div>
      </footer> */}
    </>
  );
}

export default Home;
