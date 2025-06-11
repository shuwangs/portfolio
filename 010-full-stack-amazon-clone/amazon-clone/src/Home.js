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
                        title = "5Pcs Flower Molds Silicone Chocolate Mold Daisy Flower Fondant Polymer Clay Resin Mold Soap Ice Cube Jello Molds for Baking and Cake Cupcake Decorating"
                        price = {12.99}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/71uP8TH18EL._AC_SX425_.jpg" 
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
                        title = "SOJOS Retro Aviator Sunglasses for Women Men,Trendy Rectangle Womens Mens Shades Sun Glasses SJ2202"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/51TvnTUISOL._AC_SY395_.jpg" 
                        />
                        
                    <Product 
                        id = "1232s45"
                        title = "6Pcs Silicone Candle Molds Set for Candle Making, Yarn Ball Bubble Candle Mold, 3D Rose Silicone Mold, Cake Mold for Baking Desser, Silicone Mold for Soy Wax, Soap, DIY Scented Candle"
                        price = {21.84}
                        rating = {4}
                        image = "https://m.media-amazon.com/images/I/51zrnPeoU9L._AC_SX425_.jpg" 
                        />
                </div>      
                <div className="home__row">
                    <Product 
                        id = "123245f"
                        title = "ZESICA Women's Summer Sleeveless Tank Tops Crewneck Tie Front Loose Flowy Ruffle Peplum Babydoll Blouses"
                        price = {29.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/61VpO9jobDL._AC_SX466_.jpg" 
                        />

                </div>                        

            </div>
        </div>
    );
}


export default Home
