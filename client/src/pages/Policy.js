import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy.jpg"
            alt="contactus"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col-md-4">
          <h5>Refund Policy</h5>
          <p>At Unblemished Clothing Store, we want to ensure your complete satisfaction with your purchase. If, for any reason, you are not satisfied with your purchase, we offer a straightforward refund policy. Please take note of the following guidelines:</p>
          <h6>Eligibility for Refund:</h6>
          <p>To be eligible for a refund, you must initiate the return process within 14 days of receiving your order.
The item must be unused, in its original condition, and with all tags and packaging intact.</p>
          <h6>Non-Refundable Items:</h6>
          <p>Some items are non-refundable, including personalized or customized products, intimate apparel, and items marked as final sale. Please check the product description or contact us for  more information.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
