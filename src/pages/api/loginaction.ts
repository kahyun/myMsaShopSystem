"use server"
//서버액션선언(서버에서 실행)

export async function login(formData:FormData){
    console.log("서버 액션 실행됨!");

    const formObject = Object.fromEntries(formData);
    console.log("폼 데이터:", formObject);

    const  res = await fetch("http://localhost:9400/customer/mypage", {
        method: "GET",
        headers: { "Accept":"text/plain","Content-Type": "application/json" },
        cache:"no-store", //항상 최신 데이터를 가져오기 위해서 처리
     });
    console.log(res.text())
}
