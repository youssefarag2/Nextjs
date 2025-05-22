import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return <div>Users Profile: {id}</div>;
};

export default Page;
