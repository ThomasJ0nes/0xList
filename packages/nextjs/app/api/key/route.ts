import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
// Convert require to import
import { pinata } from "~~/utils/config";

export const dynamic = "force-dynamic";

export async function GET() {
  // Removed unused req and res
  try {
    const uuid = uuidv4();
    const keyData = await pinata.keys.create({
      keyName: uuid.toString(),
      permissions: {
        endpoints: {
          pinning: {
            pinFileToIPFS: true,
          },
        },
      },
      maxUses: 1,
    });
    return NextResponse.json(keyData, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ text: "Error creating API Key:" }, { status: 500 });
  }
}
