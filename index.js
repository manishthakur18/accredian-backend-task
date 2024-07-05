const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/api/referrals', async (req, res) => {
  const { name, email, friendName, friendEmail } = req.body;

  try {
    const newReferral = await prisma.referral.create({
      data: {
        name,
        email,
        friendName,
        friendEmail,
      },
    });

    res.status(201).json(newReferral);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the referral.' });
  }
});

// Endpoint to get all referrals (optional, for testing)
app.get('/api/referrals', async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving referrals.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
