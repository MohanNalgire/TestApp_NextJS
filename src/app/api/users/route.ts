import { NextRequest, NextResponse } from 'next/server';
import users from './users.json';
import User from '@/src/models/users';

export async function GET() {
  const usersArr = users;
  return NextResponse.json(usersArr);
}

export async function POST(request: NextRequest) {
  try {
    const requestData = await request.json();
    const user = new User(requestData);
    const newCretedUser = await user.save();
    console.log(newCretedUser);
    return NextResponse.json(newCretedUser, {
      status: 200,
      statusText: 'ok'
    });
  }
  catch (error) {
    return NextResponse.json({
      statusText: 'Fail to create user'
    });
  }
}


