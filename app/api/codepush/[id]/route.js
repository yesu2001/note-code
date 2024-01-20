import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const { code } = body;
  console.log(code);

  return NextResponse.json({ msg: id });
}

export async function GET(request, { params }) {
  const { id } = params;
  return NextResponse.json({ code: `<h1>SNET From Backend</h1>` });
}
