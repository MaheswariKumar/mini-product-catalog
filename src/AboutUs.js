import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function AboutUs() {
    const [openFirstQus, setOpenFirstQus] = useState(false);
    const [openSecQus, setOpenSecQus] = useState(false);
    const [openThirQus, setOpenThirQus] = useState(false);
    const [openFoQus, setOpenFoQus] = useState(false);
    const [openFiQus, setOpenFiQus] = useState(false);

    return (
        <div>
            <div className="abt">
                <nav>About us</nav>
            </div>
            <div className="philo">
                <div>
                    <nav className="miss">OUR MISSION</nav>
                    <nav className="phy">Our Philosophy</nav>
                </div>
                <div className="ours">
                    <div className="ppl">
                        <nav>Our People</nav>
                        <p>We take pride in our team of skilled professionals who work tirelessly to provide the best products and services to our customers. Our diverse team includes designers, sales representatives, and support staff who are dedicated to creating a positive experience for every customer.</p>
                        <nav className="bord"></nav>
                    </div>
                    <div className="expe">
                        <nav>Our Expertise</nav>
                        <p>At our company, we take pride in our expertise in the cosmetics and beauty industry. With years of experience and a passion for innovation, our dedicated team is committed to delivering high-quality beauty products and exceptional customer service that enhances our customers' confidence and well-being.</p>
                        <nav className="bord"></nav>
                    </div>
                    <div className="net">
                        <nav>Our Network</nav>
                        <p>At Blushora, we pride ourselves on our vast network of trusted partners and suppliers who help us bring the best quality products to our customers.</p>
                        <nav className="bord"></nav>
                    </div>
                </div>
            </div>
            <div className="fqs">
                <div className="barfq">
                    <nav>|</nav>
                    <nav className="q">FAQ</nav>
                </div>
                <nav className="phy">Frequently Asked Questions</nav>
            </div>
            <div className="faq">
                <div>
                    <img className="fqImg" src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21ldGljfGVufDB8fDB8fHww"></img>
                </div>
                <div className="ours">
                    <div className="qus">
                        <div className="btns" onClick={()=> setOpenFirstQus(!openFirstQus)}>
                            <nav>Do you offer free shipping?</nav>
                            {openFirstQus ? <nav>-</nav> : <nav>+</nav> }
                        </div>
                        {openFirstQus ? <p>Our shipping policy may vary depending on your location, the weight of the package, and the shipping method you choose. We offer free shipping on certain items and promotions, so please check our website for more information.</p> : null }
                        <nav className="bord"></nav>
                    </div>
                    <div className="qus">
                        <div className="btns" onClick={()=> setOpenSecQus(!openSecQus)}>
                            <nav>How do I check the status of my order?</nav>
                            {openSecQus ? <nav>-</nav> : <nav>+</nav> }
                        </div>
                        {openSecQus ? <p>You can check the status of your order by logging into your account on our website or by contacting our customer service team.</p> : null }
                        <nav className="bord"></nav>
                    </div>
                    <div className="qus">
                        <div className="btns" onClick={()=> setOpenThirQus(!openThirQus)}>
                            <nav>How do I use a promo code at checkout?</nav>
                            {openThirQus ? <nav>-</nav> : <nav>+</nav> }
                        </div>
                        {openThirQus ? <p>To use a promo code at checkout, simply enter the code in the designated field during the checkout process. The discount will be applied to your order total if the code is valid.</p> : null }
                        <nav className="bord"></nav>
                    </div>
                    <div className="qus">
                        <div className="btns" onClick={()=> setOpenFoQus(!openFoQus)}>
                            <nav>Can I return an Item If I change my mind?</nav>
                            {openFoQus ? <nav>-</nav> : <nav>+</nav> }
                        </div>
                        {openFoQus ? <p>Yes, you can return an item within a specified period if you change your mind. Please check our return policy for more information.</p> : null }
                        <nav className="bord"></nav>
                    </div>
                    <div className="qus">
                        <div className="btns" onClick={()=> setOpenFiQus(!openFiQus)}>
                            <nav>How do I track my order?</nav>
                            {openFiQus ? <nav>-</nav> : <nav>+</nav> }
                        </div>
                        {openFiQus ? <p>You can track your order by logging into your account on our website or by checking the shipping confirmation email we sent you.</p> : null }
                        <nav className="bord"></nav>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}