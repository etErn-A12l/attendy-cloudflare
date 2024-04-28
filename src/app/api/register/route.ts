import { STUDENTS_KEY, TEACHERS_KEY } from "@/lib/constants/keys";
import { RegisterBody, UserBody } from "@/lib/types/requests";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Handles the POST request to add data to the storage.
 * @param {Request} request - The request object.
 * @returns {Promise<NextResponse>} - The response object.
 */
export const POST = async (request: Request): Promise<NextResponse> => {
  const data: RegisterBody = await request.json();
  const { isTeacher } = data;

  const key = isTeacher ? TEACHERS_KEY : STUDENTS_KEY;

  const myKv = getRequestContext().env.ATTENDY_STORAGE;

  const body = data.body;

  const existingData = await myKv.get(key);

  if (!existingData) {
    const newData = [body];
    console.log(newData);
    await myKv.put(key, JSON.stringify(newData));
    return new NextResponse(
      JSON.stringify({ status: 200, message: "success" }),
      {
        status: 200,
      }
    );
  } else {
    const oldData: [UserBody] = JSON.parse(existingData);
    if (oldData.includes(body)) {
      return new NextResponse(
        JSON.stringify({ status: 400, message: "already exists" }),
        {
          status: 400,
        }
      );
    }
    oldData.push(body);
    console.log(oldData);
    await myKv.put(key, JSON.stringify(oldData));
    return new NextResponse(
      JSON.stringify({ status: 200, message: "success" })
    );
  }
};
