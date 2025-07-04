import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    // sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    sameSite: "None", // cross-site requests supported
    secure: process.env.NODE_ENV !== "development",
  });

  res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
 
});


  return token;
};
