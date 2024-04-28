export type RegisterBody = {
  isTeacher: boolean;
  body: UserBody;
};

export type UserBody = {
  name: string;
  email: string;
  password: string;
  universityName: string;
  stream: string;
  admissionYear?: string;
};

export type LoginBody = {
  email: string;
  password: string;
};
