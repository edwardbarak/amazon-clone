import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
                    alt=""
                />
                <div className="home__row">                    
                    <Product 
                        id='12321341'
                        title='The Lean Startup' 
                        price={29.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5}
                    />
                    <Product
                        id='49538094'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={239}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/71kj5nomj0L._AC_SL1500_.jpg'
                    />
                </div>
                <div className="home__row">                    
                    <Product
                        id='4903850'
                        title='Samsung 49in. Gaming LED Monitor'
                        price={199.99}
                        rating={3}
                        image='https://images-na.ssl-images-amazon.com/images/I/81Zt42ioCgL._AC_SL1500_.jpg'
                    />
                    <Product
                        id='23445930'
                        title='All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Twilight Blue '
                        price={29.99}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/71UCjudB1cL._AC_SL1000_.jpg'
                    />
                    <Product
                        id='3254354345'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation) '
                        price={1029}
                        rating={5}
                        image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg'
                    />
                </div>
                <div className="home__row">                    
                    <Product
                        id='9999999'
                        title='NPET K10 Gaming Keyboard USB Wired Floating Keyboard, Quiet Ergonomic Water-Resistant Mechanical Feeling Keyboard, Ultra-Slim Rainbow LED Backlit Keyboard for Desktop, Computer, PC '
                        price={21.99}
                        rating={4}
                        image='https://images-na.ssl-images-amazon.com/images/I/61w0BypBzrL._AC_SL1500_.jpg'
                    />                  
                </div>
            </div>
        </div>
        
    )
}

export default Home
