import { NextRequest, NextResponse } from "next/server";
const shippo = require('shippo');

const shippoClient = shippo(process.env.SHIPPO_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { rateId } = await req.json();

    const transaction = await shippoClient.transaction.create({
      rate: rateId,
      label_file_type: "PDF",
    });

    return NextResponse.json(transaction, { status: 200 });
  } catch (error: any) {
    console.error("Error creating shipping label:", error);
    return NextResponse.json({ error: "Failed to create shipping label" }, { status: 500 });
  }
}