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
router.get('/store/giveaway', (req, res) => {
    res.sendFile(__path + '/views/wwweb cantik v2 (claim25dm) (Copy).html')
})
router.get('/store/freedm', (req, res) => {
    res.sendFile(__path + '/views/giveawayice.html')
})
router.get('/store/games', (req, res) => {
    res.sendFile(__path + '/views/games.html')
})
router.get('/store/not-found', (req, res) => {
    res.sendFile(__path + '/views/notfound.html')
})
router.get('/store/maintenance', (req, res) => {
    res.sendFile(__path + '/views/maintenance.html')
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
