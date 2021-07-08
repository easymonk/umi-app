import React from 'react';

import { Redirect } from 'umi'
function useAuth () {
  return {
    isLogin: true
  }
}
export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
