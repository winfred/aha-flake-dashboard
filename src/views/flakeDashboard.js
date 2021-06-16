import React, { useEffect } from "react";

const Styles = () => {
  return (
    <style>
      {`
    .title {
      font-size: 20px;
      text-align: center;
      margin: 20px;
    }
    `}
    </style>
  );
};

aha.on("flakeDashboard", ({ record, fields }, { settings }) => {

  // Ha, what if we just do a simple redirect. No API modifications needed with this.
  window.location = "https://big.aha.io/develop/bookmarks/custom_pivots/6974441079258521389/6974442220647839574";

  return (
    <>
      <Styles />
      <div className='title'>Redirecting...</div>
    </>
  );
});