import { STUDENTS_KEY, TEACHERS_KEY } from "@/lib/constants/keys";
import { LoginBody, UserBody } from "@/lib/types/requests";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export const POST = async (request: Request) => {
  const body: LoginBody = await request.json();
  const { email, password } = body;

  const myKv = getRequestContext().env.ATTENDY_STORAGE;

  const studentData = await myKv.get(STUDENTS_KEY);
  const teachersData = await myKv.get(TEACHERS_KEY);

  let notStudent = false;
  let notTeacher = false;

  if (!studentData && !teachersData) {
    return new Response(JSON.stringify({ status: 401, message: "not found" }), {
      status: 401,
    });
  }

  if (studentData) {
    const studentDataArray = JSON.parse(studentData);
    const student = studentDataArray.find(
      (user: UserBody) => user.email === email
    );
    if (!student) {
      notStudent = true;
    }
    if (student.password !== password) {
      return new Response(
        JSON.stringify({ status: 401, message: "invalid password" }),
        {
          status: 401,
        }
      );
    }
    return new Response(JSON.stringify({ status: 200, message: "success" }), {
      status: 200,
    });
  }

  if (teachersData) {
    const teacherDataArray = JSON.parse(teachersData);
    const teacher = teacherDataArray.find(
      (user: UserBody) => user.email === email
    );
    if (!teacher) {
      notTeacher = true;
    }
    if (teacher.password !== password) {
      return new Response(
        JSON.stringify({ status: 401, message: "invalid password" }),
        {
          status: 401,
        }
      );
    }
    return new Response(JSON.stringify({ status: 200, message: "success" }), {
      status: 200,
    });
  }

  if (notStudent && notTeacher) {
    return new Response(JSON.stringify({ status: 401, message: "not found" }), {
      status: 401,
    });
  }
};
