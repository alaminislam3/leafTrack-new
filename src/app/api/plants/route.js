import dbConnect, { collectionNameObj } from '@/app/lib/dbConnect';
import { NextResponse } from 'next/server';


export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['plantName', 'image', 'category', 'description', 'careLevel', 
                           'wateringFrequency', 'lastWateredDate', 'nextWateringDate', 
                           'healthStatus', 'userEmail', 'userName'];
    
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const plantCollection = dbConnect(collectionNameObj.plantcollection);
    const result = await plantCollection.insertOne(body);

    return NextResponse.json(
      { 
        message: 'Plant added successfully',
        plantId: result.insertedId 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding plant:', error);
    return NextResponse.json(
      { message: 'Failed to add plant', error: error.message },
      { status: 500 }
    );
  }
}