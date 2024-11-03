import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  const id = params.id; // ダイナミックルートの `id` を取得

  // ユーザー情報を取得
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await response.json();

  // IDに対応するユーザーが存在するか確認
  if (!user || !user.name) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // ユーザーの名前をJSONで返す
  return NextResponse.json({ name: user.name });
}
  

  