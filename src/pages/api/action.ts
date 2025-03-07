// app/actions.ts
"use server";


 // 서버 액션 선언 (서버에서 실행됨)

export async function createComment(formData: FormData) {
    console.log("서버 액션 실행됨!");

    const formObject = Object.fromEntries(formData);
    console.log("폼 데이터:", formObject);

    await fetch("http://localhost:9000/api/comment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
    });

    return "댓글이 성공적으로 저장되었습니다!";
}

export async function getComments() {
    console.log("서버 액션 실행됨!");
    try {
        const res = await fetch("http://127.0.0.1:9000/api/comment/list", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store", // 항상 최신 데이터 가져오기
        });

        if (!res.ok) {
            throw new Error(`API 요청 실패: ${res.status}`);
        }

        return await res.json(); // JSON 데이터 반환
    } catch (error) {
        console.error("getComments 오류:", error);
        return []; // 오류 발생 시 빈 배열 반환
    }
}
