import { NextRequest, NextResponse } from "next/server";

export function GET(_request:NextRequest, params:{userid: any}){
    const {userid} =params;
    return NextResponse.json({userid, params});
}

export function POST(){
    return NextResponse.json({
      message:'user deleted -soft delete'
    })
  }
  
  export function DELETE(){}
  
  export function PUT(){}
  
  export function OPTIONS(){}
  