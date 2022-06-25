import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

type Props = {
  children?: React.ReactNode;
};

const UserLayout = ({ children }: Props) => {
  return <section>{children}</section>;
};

export default UserLayout;
