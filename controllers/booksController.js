const getAllBooks = (req, res) => {
  res.json({ data: "books" });
};

const getBookById = (req, res) => {
  res.json({ data: "getting it by id" });
};

const addNewBook = (req, res) => {
  res.json({ data: "adding new book" });
};

const getReviewBybook = (req, res) => {
  res.json({ data: "getting review for book" });
};

const addReview = (req, res) => {
  res.json({ data: "getting review for book" });
};

const getUserProfile = (req, res) => {
  res.json({ data: "retriving user profile" });
};

const updateUserProfile = (req, res) => {
  res.json({ data: "updating user profile" });
};
module.exports = {
  getAllBooks,
  getBookById,
  getReviewBybook,
  addReview,
  getUserProfile,
  updateUserProfile,
};
