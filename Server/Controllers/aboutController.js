const About = require('../Models/About');

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch about info' });
  }
};

exports.updateAbout = async (req, res) => {
  try {
    const { bio, skills } = req.body;
    let about = await About.findOne();
    if (about) {
      about.bio = bio;
      about.skills = skills;
      await about.save();
    } else {
      about = new About({ bio, skills });
      await about.save();
    }
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update about info' });
  }
};
