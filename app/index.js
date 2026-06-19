const express = require('express');

const app = express();
const PORT = 80;

// Home route
app.get('/', (req, res) => {
    res.send('Hello from AKS DevOps CI/CD Pipeline (Node.js App)!');
});

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('Application is running successfully');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
