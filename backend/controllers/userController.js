
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js';

// @desc    Auth user & get token
// @route   POST /users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      follower: user.follower,
      following: user.following,
      gender: user.gender,
      mobileNumber: user.mobileNumber,
      location: user.location,
      file: user.file
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


// @desc    Register a new user
// @route   POST /users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      follower: user.follower,
      following: user.following,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


// @desc    Get user profile
// @route   GET /users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      follower: user.follower,
      following: user.following,
      gender: user.gender,
      mobileNumber: user.mobileNumber,
      location: user.location,
      file: user.file
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @desc    Update user profile
// @route   PUT /users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.gender = req.body.gender || user.gender
    user.location = req.body.location || user.location
    user.mobileNumber = req.body.mobileNumber || user.mobileNumber
    user.file = req.body.file || user.file


    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
      gender: updatedUser.gender,
      mobileNumber: updatedUser.mobileNumber,
      location: updatedUser.location,
      file: updatedUser.file,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})


// @desc    Get all users
// @route   GET /users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @desc    Delete user
// @route   DELETE /users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Get user by ID
// @route   GET /users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Update user
// @route   PUT /users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      file: updatedUser.file
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// @desc    Follow user
// @route   PUT /users/follow
// @access  Public
const followUser = asyncHandler(async (req, res) => {
  try {
    if(req.query.currentUser !== req.query.userToFollow) {
      
      const user = await User.findOneAndUpdate({_id: req.query.currentUser}, { $addToSet: { 'following': req.query.userToFollow }}, { new : true}, async (err, user) => {
        if (err) throw Error  
        if(user) {
           await User.findOneAndUpdate({_id: req.query.userToFollow}, { $addToSet: { 'follower': req.query.currentUser }}, { new : true}, (err, user) => {
          if (err) throw Error
          return user
        })
        }
      })
      res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      follower: user.follower,
      following: user.following,
      token: generateToken(user._id),
      gender: user.gender,
      mobileNumber: user.mobileNumber,
      location: user.location,
      file: user.file
      })
    }

  } catch (err) {
    
  if(req.query.currentUser === req.query.userToFollow){
    res.status(400)
    throw new Error('You cannot follow yourself')
  } else {
    res.status(500).json({message: err.message})
  }

  }
})

// @desc    UnFollow user
// @route   PUT /users/unfollow
// @access  Public
const unfollowUser = asyncHandler(async (req, res) => {

  if (req.query.currentUser === req.query.userToFollow) {
    res.status(400)
    throw new Error('You cannot follow yourself!')
  }

    try {
    if(req.query.currentUser !== req.query.userToFollow) {
      const user = await User.findOneAndUpdate({_id: req.query.currentUser}, { $pull: { 'following': req.query.userToFollow }}, { new : true}, async (err, user) => {
        if (err) throw Error  
        if(user) {
           await User.findOneAndUpdate({_id: req.query.userToFollow}, { $pull: { 'follower': req.query.currentUser }}, { new : true}, (err, user) => {
          if (err) throw Error
          return user
        })
        }
      })
      res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      follower: user.follower,
      following: user.following,
      token: generateToken(user._id),
      gender: user.gender,
      mobileNumber: user.mobileNumber,
      location: user.location,
      file: user.file
      })
    } 
  } catch (err) {
    console.log(req.query.currentUser === req.query.userToFollow) 
    res.status(500).json(err)
  }
})

// @desc    UserFollowing
// @route   PUT /users/following/:currentUser
// @access  Public
const userFollowings = asyncHandler(async (req, res) => {
  const userFollowing = []
 try{
    const currentUser = await User.findById({_id: req.params.currentUser})
    const user = await User.find()
    const following = currentUser.following

  for (let followingId of following) {
    for (let allUser of user) {
      if(allUser._id.toString() === followingId.toString()){
        userFollowing.push(allUser)
      }
    }
  }
  res.json({ following: userFollowing})
 } catch (err){
  res.status(500).json(err.message)
 }
})

// @desc    UserFollowers
// @route   PUT /users/followers/:currentUser
// @access  Public
const userFollowers = asyncHandler(async (req, res) => {
  const userFollower = []
 try{
    const currentUser = await User.findById({_id: req.params.currentUser})
    const user = await User.find()
    const follower = currentUser.follower

  for (let followerId of follower) {
    for (let allUser of user) {
      if(allUser._id.toString() === followerId.toString()){
        userFollower.push(allUser)
      }
    }
  }
  res.json({followers: userFollower})
 } catch (err){
  res.status(500).json(err.message)
 }
})

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  followUser,
  unfollowUser,
  userFollowers,
  userFollowings
}