import axios from 'axios';

router.get('/streaming', async (req, res) => {
  try {
    const response = await axios.get('https://api.twitch.tv/helix/streams');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch streaming data' });
  }
});
