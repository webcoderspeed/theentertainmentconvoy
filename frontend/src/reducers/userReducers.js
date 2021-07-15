export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return { loading: true }
    case 'USER_LOGIN_SUCCESS':
      return { loading: false, userInfo: action.payload }
    case 'USER_LOGIN_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_LOGOUT':
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_REGISTER_REQUEST':
      return { loading: true }
    case 'USER_REGISTER_SUCCESS':
      return { loading: false, userInfo: action.payload }
    case 'USER_REGISTER_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_LOGOUT':
      return {}
    default:
      return state
  }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case 'USER_DETAILS_REQUEST':
      return { ...state, loading: true }
    case 'USER_DETAILS_SUCCESS':
      return { loading: false, user: action.payload }
    case 'USER_DETAILS_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_DETAILS_RESET':
      return { user: {} }
    default:
      return state
  }
}

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_UPDATE_PROFILE_REQUEST':
      return { loading: true }
    case 'USER_UPDATE_PROFILE_SUCCESS':
      return { loading: false, success: true, userInfo: action.payload }
    case 'USER_UPDATE_PROFILE_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_UPDATE_PROFILE_RESET':
      return {}
    default:
      return state
  }
}

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'USER_LIST_REQUEST':
      return { loading: true }
    case 'USER_LIST_SUCCESS':
      return { loading: false, users: action.payload }
    case 'USER_LIST_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_LIST_RESET':
      return { users: [] }
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_DELETE_REQUEST':
      return { loading: true }
    case 'USER_DELETE_SUCCESS':
      return { loading: false, success: true }
    case 'USER_DELETE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case 'USER_UPDATE_REQUEST':
      return { loading: true }
    case 'USER_UPDATE_SUCCESS':
      return { loading: false, success: true, user: action.payload }
    case 'USER_UPDATE_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_UPDATE_RESET':
      return {
        user: {},
      }
    default:
      return state
  }
}

export const userFollowReducer = (state = { user: { followings: [] } }, action) => {
  switch (action.type) {
    case 'USER_FOLLOW_REQUEST':
      return { loading: true, user: { followings: [] } }
    case 'USER_FOLLOW_SUCCESS':
    return { loading: false, user: { followings: action.payload }}
    case 'USER_FOLLOW_FAIL': 
    return { loading: false, error: action.payload }
    case 'USER_FOLLOW_RESET':
      return { user: { followings: [] }}
    default:
      return state
  }
}
export const userFollowingListReducer = (state = { user: { followings: [] } }, action) => {
  switch (action.type) {
    case 'USER_FOLLOWING_LIST_REQUEST':
      return { loading: true }
    case 'USER_FOLLOWING_LIST_SUCCESS':
    return { loading: false, user: { followings: action.payload }}
    case 'USER_FOLLOWING_LIST_FAIL': 
    return { loading: false, error: action.payload }
    case 'USER_FOLLOWING_LIST_RESET':
      return { user: { followings: [] }}
    default:
      return state
  }
}

export const userFollowerListReducer = (state = { user: { followers: [] } }, action) => {
  switch (action.type) {
    case 'USER_FOLLOWER_LIST_REQUEST':
      return { loading: true }
    case 'USER_FOLLOWER_LIST_SUCCESS':
    return { loading: false, user: { followers: action.payload.follower }}
    case 'USER_FOLLOWER_LIST_FAIL': 
    return { loading: false, error: action.payload }
    case 'USER_FOLLOWER_LIST_RESET':
      return { user: { followers: [] }}
    default:
      return state
  }
}

export const userUnFollowReducer = (state = { user: { followings: [] } }, action) => {
  switch (action.type) {
    case 'USER_UNFOLLOW_REQUEST':
      return { loading: true }
    case 'USER_UNFOLLOW_SUCCESS':
    return { loading: false, user: { followings: action.payload }}
    case 'USER_UNFOLLOW_FAIL': 
    return { loading: false, error: action.payload }
    default:
      return state
  }
}


export const userLoginWithGoogleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN_WITH_GOOGLE_REQUEST':
      return { loading: true }
    case 'USER_LOGIN_WITH_GOOGLE_SUCCESS':
      return { loading: false, userInfo: action.payload }
    case 'USER_LOGIN_WITH_GOOGLE_FAIL':
      return { loading: false, error: action.payload }
    case 'USER_LOGOUT_WITH_GOOGLE':
      return {}
    default:
      return state
  }
}
