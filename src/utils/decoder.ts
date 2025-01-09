import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  userID: string;
  username: string;
  exp: number;
  iat: number;
  [key: string]: unknown;
}

const decodeToken = (token: string): JwtPayload => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    console.log("Decoded JWT:", decoded);
    return decoded;
  } catch (error) {
    console.error("Failed to decode token:", error);
    throw new Error("Invalid token");
  }
};

const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  const payload = decodeToken(accessToken);
  console.log("UserID:", payload.userID);
}
