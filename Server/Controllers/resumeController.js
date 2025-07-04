const Resume = require('../Models/Resume');

exports.createOrUpdateResume = async (req, res) => {
  try {
    console.log("TYPE of req.body:", typeof req.body);
    console.log("BODY CONTENT:", req.body);

    const { resumeUrl } = req.body;

    if (!resumeUrl) {
      return res.status(400).json({ error: "resumeUrl is required" });
    }

    let resume = await Resume.findOne();

    if (resume) {
      resume.resumeUrl = resumeUrl;
      await resume.save();
      return res.status(200).json({ message: "Resume updated successfully" });
    } else {
      resume = new Resume({ resumeUrl });
      await resume.save();
      return res.status(201).json({ message: "Resume created successfully" });
    }
  } catch (error) {
    console.error("❌ Resume Error:", error.message);
    return res.status(500).json({ error: "Failed to process resume" });
  }
};

exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (resume) {
      return res.status(200).json(resume);
    } else {
      return res.status(404).json({ message: 'Resume not found' });
    }
  } catch (error) {
    console.error("❌ Resume Fetch Error:", error.message);
    return res.status(500).json({ error: "Failed to fetch resume" });
  }
};
