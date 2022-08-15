import React from "react";

import { Button } from "@mui/material";

import styles from "./App.module.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  addCustomerAction,
  removeCustomerAction,
} from "../store/customerReducer";
import { fetchCustomers } from "../asyncActions/customer";
import { addCountAction, removeCountAction } from "../store/countReducer";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);
  const customers = useSelector((state) => state.customers.customers);

  const addCount = () => {
    dispatch(addCountAction(1));
  };

  const removeCount = () => {
    dispatch(removeCountAction(1));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>
        <Button onClick={() => addCount()} variant="contained">
          Add
        </Button>
        <Button onClick={() => removeCount()} variant="contained">
          Remove
        </Button>
        <Button variant="outlined">{count}</Button>
        <Button onClick={() => addCustomer(prompt())} variant="contained">
          Add Client
        </Button>
        <Button onClick={() => dispatch(fetchCustomers())} variant="contained">
          Get Clients from DataBase
        </Button>
        {customers.length > 0 ? (
          <div className={styles.app__wrapper_client}>
            {customers.map((customer) => (
              <div onClick={() => removeCustomer(customer)}>
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.app__wrapper_client}>Клиенты отстутвуют</div>
        )}
      </div>
    </div>
  );
};

export default App;
