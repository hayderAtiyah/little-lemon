import React from "react";
import "../reserveNowButton.css";

export default function ReserveNowButton() {
  return (
    <>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Reserve Now</span>
      </button>
    </>
  );
}
