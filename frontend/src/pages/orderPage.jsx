import React from "react";
import { Map } from "../components/map/map";
import { OrderList } from "../components/orderList/orderList";
import { OrderParameters } from "../components/orderParameters/orderParameters";

export const OrderPage = () => {
    console.log("Hello")
  return (
        <>
            <OrderParameters />
            <OrderList />
            
        </>
  );
};

