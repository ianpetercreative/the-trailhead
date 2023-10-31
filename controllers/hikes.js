const Hike = require('../models/hike')


async function index (req, res) {
    const hikes = await Hike.find({})
    res.render('hikes/index', { title: "All Hikes", hikes })
}

function newHike(req, res){
    res.render('hikes/new', { title: 'Add a New Hike', errorMsg: '' })
}

module.exports = {
    index,
    new: newHike,
}
