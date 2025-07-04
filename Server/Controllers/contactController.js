const Contact = require('../Models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (err) {
    console.error('❌ Contact Save Error:', err);
    res.status(500).json({ error: 'Server Error' });
  }
};
