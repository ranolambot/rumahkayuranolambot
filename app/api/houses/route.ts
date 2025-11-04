import { getAllHouses } from "@/lib/sanity-queries";

export async function GET() {
  try {
    const houses = await getAllHouses();
    // Make sure houses is an array
    const housesArray = Array.isArray(houses) ? houses : [houses];
    return Response.json(housesArray);
  } catch (error) {
    console.error("Error fetching houses:", error);
    return Response.json([], { status: 200 });
  }
}
