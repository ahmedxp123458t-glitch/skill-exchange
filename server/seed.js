const mongoose = require('mongoose');
const User = require('./models/User');
const SkillListing = require('./models/SkillListing');

const seedDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/skill-exchange');
    await User.deleteMany({});
    await SkillListing.deleteMany({});
    const users = await User.insertMany([
      { name: 'Alice', email: 'alice@test.com', skills: ['React', 'Node.js', 'Python'], bio: 'Full-stack developer' },
      { name: 'Bob', email: 'bob@test.com', skills: ['UI/UX', 'Figma'], bio: 'Designer' },
      { name: 'Charlie', email: 'charlie@test.com', skills: ['Python', 'ML', 'Data Science'], bio: 'Data scientist' }
    ]);
    await SkillListing.insertMany([
      { userId: users[0]._id, skill: 'React', description: 'Can teach React basics', level: 'advanced' },
      { userId: users[0]._id, skill: 'Node.js', description: 'Backend APIs', level: 'intermediate' },
      { userId: users[1]._id, skill: 'UI/UX', description: 'Design principles', level: 'intermediate' },
      { userId: users[2]._id, skill: 'Python', description: 'Python for beginners', level: 'advanced' }
    ]);
    console.log('Skill exchange seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
