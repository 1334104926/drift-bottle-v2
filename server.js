const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// 静态文件服务
app.use(express.static(path.join(__dirname, 'public')));

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: '漂流瓶服务运行中' });
});

app.listen(PORT, () => {
  console.log(`🍾 漂流瓶服务运行在 http://localhost:${PORT}`);
});
