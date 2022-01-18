__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/store', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/store/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})

router.get('/store/ff', (req, res) => {
    res.sendFile(__path + '/views/dompet.html')
})
router.get('/store/jualan', (req, res) => {
    res.sendFile(__path + '/views/jualan.html')
})

router.get('/store/item', (req, res) => {
    res.sendFile(__path + '/views/diamond.html')
})
router.get('/store/item/checkout', (req, res) => {
    res.sendFile(__path + '/views/cekqout.html')
})
router.get('/test', (req, res) => {
    res.sendFile(__path + '/view/test.html')
})
router.get('/logout', (req, res) => {
    res.sendFile(__path + '/logout.html')
})
router.get('/signup', (req, res) => {
    res.sendFile(__path + '/signup.html')
})
router.get('/login', (req, res) => {
    res.sendFile(__path + '/login.html')
})
router.get('/config1', (req, res) => {
    res.sendFile(__path + '/config.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'ZhirrrBot',
            namaowner: 'Zhirrr',
            instagram: 'zhirr_ajalah',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
