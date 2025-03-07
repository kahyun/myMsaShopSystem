import React, {FormEvent} from 'react';
import style from "@/styles/login.module.css"
import { login} from "@/pages/api/loginaction"
function Login() {
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // 기본 동작(페이지 새로고침) 방지
        // FormData 객체 생성 (HTML 폼에서 가져옴)
        const formData = new FormData(event.currentTarget);
        console.log("최초 요청 데이터:", formData);
        // 서버 액션 호출
        const response = await login(formData);
        console.log(response);
    }
    return (
        <div className="container center-contents">
            <div className="row">
                <form className={style.formSignin} onSubmit={handleSubmit} method="POST">
                    <h1 className="h3 mb-3 font-weight-normal"> 로그인 </h1>
                    <label htmlFor="username" className="sr-only">로그인 아이디</label>
                    <input id="username"
                           name="username"
                           className="form-control"
                           placeholder="아이디를 입력해 주세요."
                           required autoFocus/>
                    <label htmlFor="password" className="sr-only">비밀번호</label>
                    <input type="password"
                           id="password"
                           name="password"
                           className="form-control"
                           placeholder="비밀번호를 입력해 주세요"
                           required/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" name="remember-me"/> 로그인 기억하기
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit"> 로그인</button>
                    <div className="error-message" >
                        <span> 아이디나 패스워드가 올바르지 않습니다. </span>
                    </div>
                </form>

            </div>
        </div>

    );
}

export default Login;