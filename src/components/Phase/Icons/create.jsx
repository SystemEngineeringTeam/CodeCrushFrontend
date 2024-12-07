import { Icon } from "@iconify/react";
import "../Icons/Create.css";
import { useEffect, useState } from "react";

export const Create = ({ isState }) => {
  return (
    <>
      <div className={isState ? "highlighted" : "default"}>
        <Icon icon="heroicons:pencil-solid" height="26px" />
      </div>
    </>
  );
};