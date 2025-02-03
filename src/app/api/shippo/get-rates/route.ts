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
      carrier_accounts: ["shippo_test_f8a9e08e9299515a7629d210d0df9da7cc2683ad"], // Replace with your Shippo carrier ID
      async: false,
    });

    return NextResponse.json(rates.rates, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching shipping rates:", error);
    return NextResponse.json({ error: "Failed to fetch shipping rates" }, { status: 500 });
  }
}