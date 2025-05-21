import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* Banner */}
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/81bqEyikPyL._SX3000_.jpg"
                    alt="" 
                />

                {/* Product Rows*/}
                <div className="home__row">
                    <Product 
                        id = "12g243"
                        title = "Wellness Healthly Indulgence Shreds Adult Wet Cat Food, Natural, Protein-Rich, Grain Free, 3 Ounce Pouch, 24 Pack, (Chicken & Turkey)"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/81Ts12EL37L._AC_SY240_.jpg" 
                    />

                    <Product 
                        id = "123s"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                    />
                    
                {/* Product */}
                </div>
                <div className="home__row">
                    <Product 
                        id = "12sg45"
                        title = {`LOKO Bathroom Mirror with Shelf, 23.5" x 17.5" Rectangle Vanity Mirror with Exquisite Frame,
                        Expansion Screws, Wall Mounted Horizontal Hanging Mirror for Entryway, Living Room (Natural)`}
                        price = {49.99}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/71tMFEtpd0L.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                    />
                        
                    <Product 
                        id = "123248"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />
                        
                    <Product 
                        id = "1232s45"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />
                </div>      
                <div className="home__row">
                    <Product 
                        id = "123245f"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />

                </div>                        

            </div>
        </div>
    );
}


export default Home
