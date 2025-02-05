import { NextRequest, NextResponse } from "next/server";
const shippo = require('shippo');

const shippoClient = shippo(process.env.SHIPPO_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { addressFrom, addressTo, parcel } = await req.json();

    const rates = await shippoClient.shipment.create({
      address_from: addressFrom,
      address_to: addressTo,
      parcels: [parcel],
      carrier_accounts: [process.env.SHIPPO_CARRIER_ACCOUNT_ID!], // Replace with your Shippo carrier ID
      async: false,
    });

    return NextResponse.json(rates.rates, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching shipping rates:", error);
    return NextResponse.json({ error: "Failed to fetch shipping rates" }, { status: 500 });
  }
}