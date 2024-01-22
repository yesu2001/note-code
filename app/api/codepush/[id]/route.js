import { NextResponse } from "next/server";
import connectMongo from "@/utils/mongodb/conect";
import codeModel from "@/models/codeModel";

export async function POST(request, { params }) {
  const body = await request.json();
  try {
    // connect to database
    await connectMongo();
    // creating a new object
    const newData = new codeModel({
      code_id: body.code_id,
      code_text: body.code_text,
    });
    // save the object data to DB
    const doc = await newData.save();
    return NextResponse.json({ doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}

export async function GET(request, { params }) {
  const { id } = params;
  try {
    await connectMongo();
    const doc = await codeModel.findOne({ code_id: id });
    return NextResponse.json({ doc });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
