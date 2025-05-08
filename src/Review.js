import Footer from "./Footer";

export default function Review() {
    return (
        <div>
            <div className="new">
                <nav>Customer Stroies</nav>
            </div>
            <div className="review-stories">
                <img className="reImg" src="https://cdn.prod.website-files.com/642291d5b1dc03e88e1d5dc0/642aa2631ea32dac17c8c53b_review-thumb-04-p-500.jpg"></img>
                <div className="feed">
                    <p>Overall, I highly recommend this cosmetic brand to anyone looking to enhance their beauty routine. With a wide range of high-quality products and a strong focus on customer satisfaction, it's a go-to choice for makeup lovers.</p>
                    <nav>Courtney Henry</nav>
                </div>
            </div>
            <div className="review-stories">
                <img className="reImg" src="https://cdn.prod.website-files.com/642291d5b1dc03e88e1d5dc0/642aa2881ea32d37f2c8cbea_review-thumb-06-p-500.jpg"></img>
                <div className="feed">
                    <p>I’ve been a loyal customer of Blushora for years, and I’m always impressed by their stunning and distinctive product range. The quality and formulation of their cosmetics are truly unmatched.</p>
                    <nav>Kristin Watson</nav>
                </div>
            </div>
            <div className="review-stories">
                <img className="reImg" src="https://cdn.prod.website-files.com/642291d5b1dc03e88e1d5dc0/642aa2742b6631530ef58e2c_review-thumb-05-p-500.jpg"></img>
                <div className="feed">
                    <p>I recently purchased a makeup set from Blushora and I’m extremely satisfied with my purchase. The quality of the products is top-notch, and the customer service was excellent.</p>
                    <nav>Brooklyn Simmons</nav>
                </div>
            </div>
            <div className="review-stories">
                <img className="reImg" src="https://cdn.prod.website-files.com/642291d5b1dc03e88e1d5dc0/642aa24e55fb09d8e35c08ec_review-thumb-03-p-500.jpg"></img>
                <div className="feed">
                    <p>Blushora is an excellent choice for anyone who wants to enhance their beauty routine with high-quality cosmetics. The brand offers a wide range of premium products, from foundations and lipsticks to eyeliners and skincare essentials.</p>
                    <nav>Jenny Wilson</nav>
                </div>
            </div>
            <Footer />
        </div>
    )
}