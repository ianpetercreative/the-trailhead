const Hike = require('../models/hike')

module.exports = {
    create,
    delete: deleteReview,
  };
  
  async function create(req, res) {
    const hike = await Hike.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
  
    hike.reviews.push(req.body);
    try {
      await hike.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/hikes/${hike._id}`);
  }

  async function deleteReview(req, res) {
    const hike = await Hike.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    console.log(hike)
    if (!hike) return res.redirect('/hikes');
    hike.reviews.remove(req.params.id);
    await hike.save();
    res.redirect(`/hikes/${hike._id}`);
  }