const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');

router.post('/login', async (req, res) => {
  try {
    const token = authService.generateToken();
    res.json({ token });
  } catch (error) {
    console.error('Error generating token:', error);
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

module.exports = router;
