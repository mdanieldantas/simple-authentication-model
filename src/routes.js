const express = require('express')
const dashboardController = require('./contollers/dashboard-controller')
const authController = require('./contollers/auth-controller')
const {authMiddleware, ensureUserAdmin} = require('./middlewares/auth-middleware')


const router = express.Router()

router.get("/", authController.index)
router.post("/auth/register", authController.register)
router.post("/auth/login", authController.login)
router.get("/auth/logout",authMiddleware ,authController.logout)

router.get("/dashboard",authMiddleware, dashboardController.dashboard)
router.get("/dashboard/users",authMiddleware, ensureUserAdmin, dashboardController.users)



module.exports = router