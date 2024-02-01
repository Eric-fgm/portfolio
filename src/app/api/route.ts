import { NextResponse, NextRequest } from "next/server";
import { getResponse } from "@/features/dataGenerator/helpers/utils";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const payload = request.nextUrl.searchParams.get("payload");
  let data: string[] = [];

  try {
    payload && (await getResponse(payload, (value) => (data = value)));
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ data }, { status: 200 });
}
