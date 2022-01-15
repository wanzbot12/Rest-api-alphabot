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
router.get('/store/aboutt', (req, res) => {
    res.sendFile(__path + '/views/about (Copy).html')
})

router.get('/store/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'icebotz',
            namaowner: 'Wanz',
            instagram: 'gak punya',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
