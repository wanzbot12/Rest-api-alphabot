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
router.get('/freedm', (req, res) => {
    res.sendFile(__path + '/views/wwweb cantik v2 (claim25dm) (Copy).html')
})
router.get('/test2', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (reg).html')
})
router.get('/test3', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (cekout).html')
})
router.get('/test4', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (garenashel).html')
})
router.get('/test5', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (ff).html')
})
router.get('/test6', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (Copy) (Copy).html')
})
router.get('/test7', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1.html')
})
router.get('/test8', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (diamonml.html')
})
router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/web cantik 1 (login).html')
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
