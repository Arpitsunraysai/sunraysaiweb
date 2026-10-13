import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Basic validation
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service are required" },
        { status: 400 }
      );
    }

    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is missing from environment");
      return NextResponse.json(
        { error: "Internal Server Error", details: "Database configuration is missing" },
        { status: 500 }
      );
    }

    const client = await clientPromise;
    const db = client.db("agencyservice"); // You can change this to your preferred DB name

    const result = await db.collection("inquiries").insertOne({
      name,
      email,
      service,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Enquiry saved successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Database Error:", error);
    const message = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: "Internal Server Error", details: message },
      { status: 500 }
    );
  }
}
