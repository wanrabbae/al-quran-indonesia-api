const express = require('express')
const axios = require('axios')
const cors = require('cors')
const jsSearchArray = require('js-search-array')

const app = express()
const port = process.env.PORT || 4000
const gopay = "08995247131"

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        author: "Alwan (wanrabbae) :)",
        Title: "Alqur'an Bahasa Indonesia",
        Deskripsi: "API gratis untuk Al-qur'an bahasa indonesia yg dibuat dengan cinta dan kasih sayang:), Salam Muslim. Masya allah",
        Docs: "https://github.com/wanrabbae/al-quran-indonesia-api",
        Donate: {
            Gopay: gopay
        },
    })
})

app.get('/surah', async (req, res) => {
    try {
        const listSurat = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data')

        res.json({
            author: "Alwan (wanrabbae) :)",
            status: "success",
            Donate: {
                Gopay: gopay
            },
            data: listSurat.data
        })

    } catch (err) {
        res.status(500).json({
            author: "Alwan (wanrabbae) :)",
            status: "failed",
            message: "Server sedang error :(",
            Donate: {
                Gopay: gopay
            },
        })
    }
})

app.get('/surah/:nosurat', async (req, res) => {
    try {
        if (req.params.nosurat >= 115) {
            res.status(404).json({
                author: "Alwan (wanrabbae) :)",
                status: "failed",
                Donate: {
                    Gopay: gopay
                },
                message: "Al-quran hanya sampai 114 surah",
                data: []
            })
            return false
        }

        const surat = await axios.get(`https://api.npoint.io/99c279bb173a6e28359c/surat/${req.params.nosurat}`)

        res.json({
            author: "Alwan (wanrabbae) :)",
            status: "success",
            Donate: {
                Gopay: gopay
            },
            data: surat.data
        })

    } catch (err) {
        res.status(500).json({
            author: "Alwan (wanrabbae) :)",
            status: "failed",
            message: "Server sedang error :(",
            Donate: {
                Gopay: gopay
            },
        })
    }

})

app.get('/surat/:namasurat', async (req, res) => {
    try {
        const listSurat = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data')

        const listSurat2 = JSON.parse(JSON.stringify(listSurat.data))

        const findSurah = listSurat2.find(surah => surah.nama == req.params.namasurat)

        if (!findSurah) return res.status(404).json({
            author: "Alwan (wanrabbae) :)",
            status: "failed",
            message: "Surah tidak ditemukan",
            Donate: {
                Gopay: gopay
            },
        })

        res.json({
            author: "Alwan (wanrabbae) :)",
            status: "success",
            Donate: {
                Gopay: gopay
            },
            data: findSurah
        })

    } catch (err) {
        res.status(500).json({
            author: "Alwan (wanrabbae) :)",
            status: "failed",
            message: "Server sedang error :(",
            Donate: {
                Gopay: gopay
            },
        })
    }


})

// search surah
app.get('/surah/search/:namasurah', async (req, res) => {
    try {
        const listSurat = await axios.get('https://api.npoint.io/99c279bb173a6e28359c/data')

        const listSurat2 = JSON.parse(JSON.stringify(listSurat.data))

        const findSurah = jsSearchArray(req.params.namasurah, listSurat2, 'nama')

        res.json({
            author: "Alwan (wanrabbae) :)",
            status: "success",
            Donate: {
                Gopay: gopay
            },
            data: findSurah
        })

    } catch (err) {
        res.status(500).json({
            author: "Alwan (wanrabbae) :)",
            status: "failed",
            message: "Server sedang error :(",
            Donate: {
                Gopay: gopay
            },
        })
    }

})

// middleware
app.get('*', (req, res) => {
    res.json({
        author: "Alwan (wanrabbae) :)",
        status: "failed",
        message: "Error 404 Halaman tidak ditemukan!!",
        Donate: {
            Gopay: gopay
        },
    })
})

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`))