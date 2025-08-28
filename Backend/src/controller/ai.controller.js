import aiService from '../services/ai.service.js'
//aiService is generateContent function from ai.service.js

export default async function getReview(req, res) {
    try {
        const code = req.body.code
        if (!code) {
            return res.status(400).json({ error: "code is required" });
        }

        const response = await aiService(code);
        res.json({ response });
    } catch (error) {
        console.error('Error in getReview:', error);
        res.status(500).json({
            error: "Internal server error",
            message: error.message
        });
    }
}