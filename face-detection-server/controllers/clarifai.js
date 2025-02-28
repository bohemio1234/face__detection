import dotenv from 'dotenv'
dotenv.config();


const handleClarifaiAPI = async (req, res) => {
  const CLARIFAI_API_URL =
    "https://api.clarifai.com/v2/models/face-detection/outputs";
  const CLARIFAI_PAT = process.env.CLARIFAI_PAT;
  try {
    const requestData = req.body;
    const response = await fetch(CLARIFAI_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + CLARIFAI_PAT,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Clarifai API 요청 실패");
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Clarifai API 요청 오류:", error);
    res.status(500).json({ error: "Clarifai API요청 실패" });
  }
};

export default { handleClarifaiAPI };
