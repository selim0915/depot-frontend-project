import React from 'react'
import {
  slider_1, banner_1, banner_2, banner_3,
  blog_1, blog_2, blog_3,
  product_1, product_2, product_3, product_4, product_5,
  product_6, product_7, product_8, product_9, product_10,
  deal_ofthe_week
} from '../../utils/images.import';
import Footer from '../../layouts/footer';
import Header from '../../layouts/header';

const Main: React.FC = () => {
  return (
    <div className="super_container">
      <Header />

      {/* <!-- Slider --> */}

      <div className="main_slider" style={{ backgroundImage: `url(${slider_1})` }}>
        <div className="container fill_height">
          <div className="row align-items-center fill_height">
            <div className="col">
              <div className="main_slider_content">
                <h6>Spring / Summer Collection 2017</h6>
                <h1>Get up to 30% Off New Arrivals</h1>
                <div className="red_button shop_now_button"><a href="#">shop now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Banner --> */}

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="banner_item align-items-center" style={{ backgroundImage: `url(${banner_1})` }}>
                <div className="banner_category">
                  <a href="/product/list">women's</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner_item align-items-center" style={{ backgroundImage: `url(${banner_2})` }}>
                <div className="banner_category">
                  <a href="/product/list">accessories's</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner_item align-items-center" style={{ backgroundImage: `url(${banner_3})` }}>
                <div className="banner_category">
                  <a href="/product/list">men's</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- New Arrivals --> */}

      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col text-center">
              <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                  <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product-grid" data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>

                {/* <!-- Product 1 --> */}

                <div className="product-item men">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src={product_1} alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 2 --> */}

                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_2} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 3 --> */}

                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_3} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Blue Yeti USB Microphone Blackout Edition</a></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 4 --> */}

                <div className="product-item accessories">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_4} alt="" />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 5 --> */}

                <div className="product-item women men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_5} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 6 --> */}

                <div className="product-item accessories">
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src={product_6} alt="" />
                    </div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                      <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 7 --> */}

                <div className="product-item women">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_7} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                      <div className="product_price">$610.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 8 --> */}

                <div className="product-item accessories">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_8} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Blue Yeti USB Microphone Blackout Edition</a></h6>
                      <div className="product_price">$120.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 9 --> */}

                <div className="product-item men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_9} alt="" />
                    </div>
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                    <div className="favorite favorite_left"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                      <div className="product_price">$410.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>

                {/* <!-- Product 10 --> */}

                <div className="product-item men">
                  <div className="product product_filter">
                    <div className="product_image">
                      <img src={product_10} alt="" />
                    </div>
                    <div className="favorite"></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                      <div className="product_price">$180.00</div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Deal of the week --> */}

      <div className="deal_ofthe_week">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src={deal_ofthe_week} alt="" />
              </div>
            </div>
            <div className="col-lg-6 text-right deal_ofthe_week_col">
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                <div className="section_title">
                  <h2>Deal Of The Week</h2>
                </div>
                <ul className="timer">
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num">03</div>
                    <div className="timer_unit">Day</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="hour" className="timer_num">15</div>
                    <div className="timer_unit">Hours</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="minute" className="timer_num">45</div>
                    <div className="timer_unit">Mins</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="second" className="timer_num">23</div>
                    <div className="timer_unit">Sec</div>
                  </li>
                </ul>
                <div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Best Sellers --> */}

      <div className="best_sellers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>Best Sellers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="product_slider_container">
                <div className="owl-carousel owl-theme product_slider">

                  {/* <!-- Slide 1 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item">
                      <div className="product discount">
                        <div className="product_image">
                          <img src={product_1} alt="" />
                        </div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                          <div className="product_price">$520.00<span>$590.00</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 2 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item women">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_2} alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center"><span>new</span></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                          <div className="product_price">$610.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 3 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item women">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_3} alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Blue Yeti USB Microphone Blackout Edition</a></h6>
                          <div className="product_price">$120.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 4 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item accessories">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_4} alt="" />
                        </div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                          <div className="product_price">$410.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 5 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item women men">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_5} alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                          <div className="product_price">$180.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 6 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item accessories">
                      <div className="product discount">
                        <div className="product_image">
                          <img src={product_6} alt="" />
                        </div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Fujifilm X100T 16 MP Digital Camera (Silver)</a></h6>
                          <div className="product_price">$520.00<span>$590.00</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 7 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item women">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_7} alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Samsung CF591 Series Curved 27-Inch FHD Monitor</a></h6>
                          <div className="product_price">$610.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 8 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item accessories">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_8} alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Blue Yeti USB Microphone Blackout Edition</a></h6>
                          <div className="product_price">$120.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 9 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item men">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_9} alt="" />
                        </div>
                        <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>sale</span></div>
                        <div className="favorite favorite_left"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">DYMO LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                          <div className="product_price">$410.00</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Slide 10 --> */}

                  <div className="owl-item product_slider_item">
                    <div className="product-item men">
                      <div className="product">
                        <div className="product_image">
                          <img src={product_10} alt="" />
                        </div>
                        <div className="favorite"></div>
                        <div className="product_info">
                          <h6 className="product_name"><a href="/product/detail">Pryma Headphones, Rose Gold & Grey</a></h6>
                          <div className="product_price">$180.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Slider Navigation --> */}

                <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Benefit --> */}

      <div className="benefit">
        <div className="container">
          <div className="row benefit_row">
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>free shipping</h6>
                  <p>Suffered Alteration in Some Form</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>cach on delivery</h6>
                  <p>The Internet Tend To Repeat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>45 days return</h6>
                  <p>Making it Look Like Readable</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 benefit_col">
              <div className="benefit_item d-flex flex-row align-items-center">
                <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i></div>
                <div className="benefit_content">
                  <h6>opening all week</h6>
                  <p>8AM - 09PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Blogs --> */}

      <div className="blogs">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title">
                <h2>Latest Blogs</h2>
              </div>
            </div>
          </div>
          <div className="row blogs_container">
            <div className="col-lg-4 blog_item_col">
              <div className="blog_item">
                <div className="blog_background" style={{ backgroundImage: `url(${blog_1})` }}></div>
                <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                  <span className="blog_meta">by admin | dec 01, 2017</span>
                  <a className="blog_more" href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 blog_item_col">
              <div className="blog_item">
                <div className="blog_background" style={{ backgroundImage: `url(${blog_2})` }}></div>
                <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                  <span className="blog_meta">by admin | dec 01, 2017</span>
                  <a className="blog_more" href="#">Read more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 blog_item_col">
              <div className="blog_item">
                <div className="blog_background" style={{ backgroundImage: `url(${blog_3})` }}></div>
                <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                  <span className="blog_meta">by admin | dec 01, 2017</span>
                  <a className="blog_more" href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Newsletter --> */}

      <div className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                <h4>Newsletter</h4>
                <p>Subscribe to our newsletter and get 20% off your first purchase</p>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="post">
                <div className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                  <input id="newsletter_email" type="email" placeholder="Your email" data-error="Valid email is required." />
                  <button id="newsletter_submit" type="submit" className="newsletter_submit_btn trans_300" value="Submit">subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Main;
