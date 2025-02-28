import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="fs-2">
        {"This Magic brain will detect faces in your photo."}
      </p>
      <form
        className="d-flex justify-content-center"
        onSubmit={(e) => {
          e.preventDefault();
          onButtonSubmit();
        }}
      >
        <input
          className="w-50 fs-6 me-3 shadow form-control"
          type="text"
          placeholder="Enter image URL"
          onChange={onInputChange}
        />
        <button className="btn btn-primary fs-5">DETECT</button>
      </form>
    </div>
  );
};

export default ImageLinkForm;
