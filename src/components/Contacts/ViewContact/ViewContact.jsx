import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
  return (
    <>
      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">You can view a contact here.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6dVUhZ65EmrXkzr-E52sNG5I11mUheSqdwRov7uwr_FttgEtrLuPs9X1LtGB-jN3n-uw&usqp=CAU"
                alt="user-icon"
                className="contact-img"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                  Name : <span className="fw-bold">Deepak</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Mobile :<span className="fw-bold">+91-0987654345</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Email : <span className="fw-bold">mail@mail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Company : <span className="fw-bold">ABC</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Title : <span className="fw-bold">mail@mail.com</span>
                </li>
                <li className="list-group-item list-group-item-action">
                  Group : <span className="fw-bold">mail@mail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Link to={"/contacts/list"} className="btn btn-warning">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewContact;
