import React from "react";

export default function MyBlog() {
  return (
    <div className="container">
      <div className="col-4">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <textarea rows="10" class="form-control" id="floatingContant" placeholder="Enter Content" />
          <label for="floatingContant">Enter Contant</label>
        </div>
      </div>
    </div>
  );
}
