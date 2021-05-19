import React, { useEffect, Component, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AuthPages from './auth-pages';
import UnAuthPages from './unauth-pages';
import ProgressComponent from './../components/Progress';
import { LOCAL_STORAGE_KEY } from "../consts";
import { useUser } from "../store/hooks";

function Pages() {
  const { JWT_TOKEN } = LOCAL_STORAGE_KEY;
  const token = localStorage.getItem(JWT_TOKEN);
  const { user } = useUser();

  return (
    <>
      { (token || user.token !== '') ? <AuthPages /> : <UnAuthPages />}

      <ProgressComponent />
    </>
  );
}

export default Pages;
