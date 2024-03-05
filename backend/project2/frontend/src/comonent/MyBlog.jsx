import React from "react";
import Button from "react-bootstrap/Button";
import UserCard from "./UserCard";

export default function MyBlog() {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col-4">
          <div className="mt-5 ">
            <div className="">
              <h3>Add Your Blogs</h3>
              <div className="form-floating my-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <textarea rows="5" className="form-control" id="floatingContant" placeholder="Enter Content"></textarea>
                <label htmlFor="floatingContant">Enter Contant</label>
              </div>
            </div>
            <div className="mt-3">
              <Button variant="primary">Submit</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="mt-5">
          <div className="row">
            <UserCard />
          </div>
        </div>
      </div>
    </>
  );
}
