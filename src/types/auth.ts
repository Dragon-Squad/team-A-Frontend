export type RegisterResponse = {
  success: boolean;
  message: string;
  userId?: string;
};

export type LoginResponse = {
  success: boolean;
  message: string;
  userId: string;
  accessToken: string;
};

export type OTPResponse = {
  success: boolean;
  message: string;
  userId?: string;
};

export type User = {
  username: string;
  email: string;
  role: string;
  avatar: string;
  introVideo: string;
}
