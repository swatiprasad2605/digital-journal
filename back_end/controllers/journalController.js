const Journal = require('../models/Journal');

const createJournal = async (req, res) => {
  try {
    const { title, content } = req.body;

    const journal = await Journal.create({
      title,
      content
    });

    res.status(201).json(journal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createJournal
};
