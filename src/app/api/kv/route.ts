import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const myKv = getRequestContext().env.ATTENDY_STORAGE;

  if (!name) {
    return new NextResponse(
      JSON.stringify({ status: 400, error: "Missing name parameter" }),
      { status: 400 }
    );
  }

  try {
    let value = await myKv.get(name);
    if (!value) {
      value = "[]";
      return new NextResponse(value, {
        status: 404,
      });
    }
    return new NextResponse(value, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ status: 500, error }), {
      status: 500,
    });
  }
};

export const PUT = async (request: NextRequest) => {
  const body: { name: string; value: any } = await request.json();
  console.log(body);
  const name = body.name;
  const value = body.value;

  try {
    const myKv = getRequestContext().env.ATTENDY_STORAGE;
    const _data = await myKv.get(name);
    if (!_data) {
      const newData = [value];
      await myKv.put(name, JSON.stringify(newData));
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      const oldData: [any] = JSON.parse(_data);
      const json = JSON.parse(value);
      if (oldData.includes(json)) {
        return new Response(
          JSON.stringify({ message: "value already exists" }),
          { status: 400 }
        );
      }
      oldData.push(json);
      await myKv.put(name, JSON.stringify(oldData));
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const myKv = getRequestContext().env.ATTENDY_STORAGE;

  if (!name) {
    return new Response(
      JSON.stringify({ status: 400, error: "Missing name parameter" }),
      { status: 400 }
    );
  }

  const data = await myKv.get(name);
  if (!data) {
    return new Response(JSON.stringify({ status: 404, error: "Not found" }), {
      status: 404,
    });
  }

  await myKv.delete(name);

  return new Response(JSON.stringify({ status: 200, success: true }), {
    status: 200,
  });
};
