const Hike = require('../models/hike')


async function index (req, res) {
    const hikes = await Hike.find({})
    res.render('hikes/index', { title: "All Hikes", hikes })
}

function newHike(req, res){
    res.render('hikes/new', { title: 'Add a New Hike', errorMsg: '' })
}

async function createHike(req, res){
    try {
        const newHike = await Hike.create(req.body)
        res.redirect('/hikes');
    } catch(err){
        res.render('hikes/new', { title: 'Add a New Hike', errorMsg: err.message })
    }
}

module.exports = {
    index,
    new: newHike,
    create: createHike,
}
