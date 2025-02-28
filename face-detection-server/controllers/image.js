const handleImage = async (req, res, db) => {
  const { id } = req.body;
  if (!id) return res.status(400).json("⚠️ Missing user ID");

  try {
    const updatedEntries = await db("users").where({ id }).increment("entries", 1).returning("entries");
    res.json(updatedEntries[0].entries);
  } catch (error) {
    console.error("❌ Image entry update error:", error);
    res.status(500).json("⚠️ Unable to update entries");
  }
};

export default { handleImage };