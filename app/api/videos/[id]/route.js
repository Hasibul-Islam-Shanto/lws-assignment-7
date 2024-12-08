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

async function writeVideos(videos) {
  const filePath = path.join(process.cwd(), "data", "videos.json");
  try {
    await fs.writeFile(filePath, JSON.stringify(videos, null, 2));
    return true;
  } catch (error) {
    return false;
  }
}

export async function GET(request, { params }) {
  try {
    const videos = await readVideos();
    const id = params.id.toString();
    const video = videos.find((video) => video.videoId === id);
    if (!video) {
      return NextResponse.json(
        { success: false, message: `Video with id ${id} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        video,
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
      { success: false, message: "Failed to retrive video." },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const videos = await readVideos();
    const id = params.id.toString();
    const data = await request.json();
    const dataObjectKeys = Object.keys(data);
    const allowedKeys = ["title", "description"];
    const extraKeys = dataObjectKeys.filter(
      (key) => !allowedKeys.includes(key)
    );
    if (extraKeys.length > 0) {
      return NextResponse.json(
        { message: "You can only update title & description", extraKeys },
        { status: 400 }
      );
    }

    const videoIndex = videos.findIndex((video) => video.videoId === id);
    if (videoIndex === -1) {
      return NextResponse.json(
        { message: `Video with id ${id} not found.` },
        { status: 404 }
      );
    }

    videos[videoIndex] = { ...videos[videoIndex], ...data };
    await writeVideos(videos);
    return NextResponse.json(
      {
        success: true,
        message: "Video updated successfully",
        video: videos[videoIndex],
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
      { message: "Unable to update video." },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const videos = await readVideos();
    const id = params.id.toString();
    const videoIndex = videos.findIndex((video) => video.videoId === id);
    if (videoIndex === -1) {
      return NextResponse.json(
        { success: false, message: `Video with id ${id} not found.` },
        { status: 404 }
      );
    }
    const newVideos = videos.filter((video) => video.videoId !== id);
    await writeVideos(newVideos);
    return NextResponse.json(
      {
        success: true,
        message: "Video deleted successfully!",
        count: newVideos.length,
        videos: newVideos,
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
      { message: "Unable to delete video." },
      { status: 400 }
    );
  }
}
