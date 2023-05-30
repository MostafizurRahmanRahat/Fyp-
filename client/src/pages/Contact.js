import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      comment,
    };
    setReviews([...reviews, newReview]);
    setName("");
    setComment("");
  };

  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contact_us.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about the product, feel free to call anytime. We are available 24/7.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.rahatmoustafizur@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 013-2275860
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll-free)
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 offset-md-2">
          <h2>Customer Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <h5>{review.name}</h5>
              <p>{review.comment}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea
                className="form-control"
                id="comment"
                rows="3"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
