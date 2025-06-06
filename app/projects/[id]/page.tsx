import React from "react";

export default async function Project({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  console.log(id);
  return <div>{id}</div>;
}
