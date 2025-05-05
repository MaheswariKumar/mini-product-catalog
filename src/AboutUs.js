import { useEffect, useState } from "react";

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
            <div className="endabout">
                <div className="ending">
                    <div className="blus1">
                        <nav>B</nav>
                        <nav>L</nav>
                        <nav>U</nav>
                        <nav>S</nav>
                        <nav>H</nav>
                        <nav>O</nav>
                        <nav>R</nav>
                        <nav>A</nav>
                    </div>
                    <div className="social">
                        <div className="twit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                        </div>
                        <div className="twit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
                        </div>
                        <div className="twit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
                        </div>
                        <div className="twit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                        </div>
                    </div>
                </div>
                <div className="sevice">
                    <div>
                        <nav className="news">Sign up for Exclusive News</nav>
                        <nav>Stay connected with us and never miss a beat.</nav>
                    </div>
                    <div>
                        <nav className="news">Store</nav>
                        <div className="add">
                        <nav>+702 555 0122</nav>
                        <nav>hello@blushora.com</nav>
                        <nav>2972 Westheimer Rd. Santa Ana, Illinois 85486</nav>
                        </div>
                    </div>
                    <div>
                        <nav className="news">Company</nav>
                        <div className="add">
                        <nav>About</nav>
                        <nav>Shop</nav>
                        <nav>Reviews</nav>
                        <nav>Contact us</nav>
                        </div>
                    </div>
                    <div>
                        <nav className="news">Service</nav>
                        <div className="add">
                        <nav>Help & Faq’s</nav>
                        <nav>Privacy Policy</nav>
                        <nav>Return Policy</nav>
                        <nav>Coming Soon</nav>
                        </div>
                    </div>
                </div>
                <div>
                    <nav className="border"></nav>
                    <div>
                        <nav className="design">Designed by Mahish</nav>
                    </div>
                </div>
            </div>
        </div>
    );
}