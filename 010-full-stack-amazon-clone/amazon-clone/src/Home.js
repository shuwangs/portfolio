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
                        id = "123245"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />

                    <Product 
                        id = "123245"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />
                    
                {/* Product */}
                </div>
                <div className="home__row">
                    <Product 
                        id = "123245"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />
                        
                    <Product 
                        id = "123245"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />
                        
                    <Product 
                        id = "123245"
                        title = "cute ugly shoes"
                        price = {39.9}
                        rating = {3}
                        image = "https://m.media-amazon.com/images/I/713AO8fIDuL._AC_SY300_SX300_.jpg" 
                        />
                </div>      
                <div className="home__row">
                    <Product 
                        id = "123245"
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
