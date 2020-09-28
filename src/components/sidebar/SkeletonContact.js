import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonRow() {
  return (
    <div className="contact-skeleton">
      <div className="avatar-skeleton">
        <Skeleton height={100} width={100} />
      </div>
      <div className="info-skeleton">
        <Skeleton count={2} />
      </div>
    </div>
  );
}

function SkeletonContact() {
  const emptyArray = new Array(9).fill(1);

  return emptyArray.map((item, index) => {
    return <SkeletonRow key={index} />;
  });
}

export default SkeletonContact;
