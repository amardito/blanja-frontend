const isLogin = localStorage.getItem('token') === null ? false : true;
const initialState = {
  isLogin: isLogin
}

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...prevState,
        isLogin: true
      }
      
    case "LOGOUT":
      return {
        ...prevState,
        isLogin: false
      }

    default:
      return {
        ...prevState,
      }
  }
}

export default authReducer