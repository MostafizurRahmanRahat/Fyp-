import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/About_Us.JPG"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Unblemished Clothing Store

At Unblemished Clothing Store, we are passionate about providing you with a seamless and enjoyable online shopping experience. With a wide range of high-quality products and exceptional customer service, we strive to be your go-to destination for all your shopping needs. Our mission is to make online shopping convenient, affordable, and enjoyable for everyone. We aim to bring you the latest trends, best deals, and an extensive selection of products to cater to your diverse preferences. Whether you're searching for fashion items, electronics, home decor, or gifts, we've got you covered. We understand the importance of quality and reliability when it comes to online shopping. That's why we partner with reputable suppliers and brands to ensure that every product we offer meets the highest standards. Our dedicated team carefully curates our inventory to bring you a collection of products that you can trust.</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
