import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

async function readVideos() {
  const filePath = path.join(process.cwd(), "data", "videos.json");
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function GET(request) {
  try {
    const videos = await readVideos();
    return NextResponse.json(
      {
        success: true,
        count: videos.length,
        videos,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to retrive videos." },
      { status: 500 }
    );
  }
}
