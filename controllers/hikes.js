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

async function show(req, res) {
    const hike = await Hike.findById(req.params.id);

    res.render('hikes/show', { title: hike.name , hike });
  }


async function edit(req, res) {
    const hike = await Hike.findById(req.params.id);
    res.render('hikes/edit', { title: "Edit Hike", hike })
}

async function update(req, res) {
    const updatedHike = await Hike.findByIdAndUpdate( req.params.id, req.body, { new: true } )
    res.redirect(`/hikes/${req.params.id}`)
}

module.exports = {
    index,
    new: newHike,
    create: createHike,
    show,
    edit,
    update,
}
