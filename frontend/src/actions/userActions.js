import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_REQUEST',
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/users/login',
      { email, password },
      config
    )

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('following')
  localStorage.removeItem('follower')
  dispatch({ type: 'USER_LOGOUT' })
  dispatch({ type: 'USER_DETAILS_RESET' })
  dispatch({ type: 'USER_LIST_RESET' })
  document.location.href = '/login'
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_REGISTER_REQUEST',
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/users',
      { name, email, password },
      config
    )

    dispatch({
      type: 'USER_REGISTER_SUCCESS',
      payload: data,
    })

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_DETAILS_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/users/${id}`, config)

    dispatch({
      type: 'USER_DETAILS_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'USER_DETAILS_FAIL',
      payload: message,
    })
  }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_UPDATE_PROFILE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/users/profile`, user, config)

    dispatch({
      type: 'USER_UPDATE_PROFILE_SUCCESS',
      payload: data,
    })

    console.log(data)
    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'USER_UPDATE_PROFILE_FAIL',
      payload: message,
    })
  }
}

export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_LIST_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/users`, config)

    dispatch({
      type: 'USER_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'USER_LIST_FAIL',
      payload: message,
    })
  }
}

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_DELETE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/users/${id}`, config)

    dispatch({ type: 'USER_DELETE_SUCCESS' })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'USER_DELETE_FAIL',
      payload: message,
    })
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_UPDATE_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/users/${user._id}`, user, config)

    dispatch({ type: 'USER_UPDATE_SUCCESS' })

    dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data })

    dispatch({ type: 'USER_DETAILS_RESET' })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: 'USER_UPDATE_FAIL',
      payload: message,
    })
  }
}

export const followUser = (userToFollow) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_FOLLOW_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()


    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/users/follow?currentUser=${userInfo._id}&userToFollow=${userToFollow}`,{}, config)

    localStorage.setItem('userInfo', JSON.stringify(data))
    

      dispatch({
      type: 'USER_FOLLOW_SUCCESS',
      payload: data,
    })
    
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
      dispatch({type:'USER_FOLLOW_RESET'})
    }
    dispatch({
      type: 'USER_FOLLOW_FAIL',
      payload: message,
    })
  }
}

export const unFollowUser = (userToFollow) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_UNFOLLOW_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/users/unfollow?currentUser=${userInfo._id}&userToFollow=${userToFollow}`, {}, config)
    
    localStorage.setItem('userInfo', JSON.stringify(data))
    
    dispatch({
      type: 'USER_UNFOLLOW_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
      dispatch({type:'USER_FOLLOW_RESET'})
    }
    dispatch({
      type: 'USER_FOLLOW_FAIL',
      payload: message,
    })
  }
}

export const userFollowList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'USER_FOLLOWER_LIST_REQUEST',
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/users/followers/${userInfo._id}`, config)

    console.log('followers',data)

    dispatch({
      type: 'USER_FOLLOWER_LIST_SUCCESS',
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
      dispatch({type:'USER_FOLLOWER_LIST_RESET'})
    }
    dispatch({
      type: 'USER_FOLLOWER_LIST_FAIL',
      payload: message,
    })
  }
}