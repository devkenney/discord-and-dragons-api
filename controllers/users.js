// const express = require('express');
// const router = express.Router();
// const jwt = require('jwt-simple');
// const bcrypt = require('bcrypt');
// const config = require('../config/config');
// const User = require('../models/user');

// // Create (signup)
// router.post('/signup', (req, res) => {
//   console.log(req.body);
//   if (req.body.username && req.body.password) {
//     req.body.password = bcrypt.hashSync(
//       req.body.password,
//       bcrypt.genSaltSync(10)
//     );

//     User.findOne({
//       username: req.body.username
//     }, (error, user) => {
//       console.log("=======findOne=======", user);
//       if (!user) {
//         console.log("Running create user");
//         User.create(req.body, (error, createdUser) => {
//           console.log('createUser', createdUser);
//           console.log('error', error);
//           if (createdUser) {
//             let payload = {
//               id: createdUser.id,
//               username: createdUser.username,
//               iat: Date.now()
//             };
//             console.log(payload);
//             let token = jwt.encode(payload, config.jwtSecret);
//             console.log(token);
//             res.json({
//               token: token
//             });
//           } else {
//             console.log('failed to create user');
//             res.sendStatus(401);
//           }
//         });
//       } else {
//         console.log('User already exists, try logging in instead!');
//         res.sendStatus(401);
//       }
//     });
//   } else {
//     res.sendStatus(401);
//   }
// });