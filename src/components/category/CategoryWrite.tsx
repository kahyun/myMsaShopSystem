import style from "@/styles/categoryWrite.module.css";
import { createComment } from "@/pages/api/action";
import {FormEvent} from "react";
const CategoryWrite = () => {

    // const [commentState, setCommentState] = useState({
    //     writer: "",
    //     content: "",
    //     rank: "1",
    // });

    // 입력 값 변경 시 상태 업데이트
    // const changeState = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     setCommentState({
    //         ...commentState,
    //         [e.target.name]: e.target.value, //  name 속성을 이용하여 상태 업데이트
    //     });
    // };
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault(); // 기본 동작(페이지 새로고침) 방지

        // FormData 객체 생성 (HTML 폼에서 가져옴)
        const formData = new FormData(event.currentTarget);
        console.log("최초 요청 데이터:", formData);

        // 서버 액션 호출
        const response = await createComment(formData);
        console.log("서버 응답:", response);

        console.log(response); //  응답 메시지 저장

         //  입력 필드 초기화
        //  setCommentState({
        //     writer: "",
        //     content: "",
        //     rank: "1",
        // });
    }

    return (
      //브라우저에서 폼이 제출되면 이제 자동으로 서버측으로 요청이 발송되어

            <form onSubmit={handleSubmit} method="POST">
            <div className={style.categoryEditor}>
                <h2>카테고리</h2>
                <div>
                    <input
                    name="writer"
                    placeholder="카테고리명"
                    type="text"

                    // onChange={""}
                    // onChange={function(e){
                    //     setCommentState({
                    //         writer:e.target.value,
                    //         content:commentState.content
                    //     })
                    // }}
                    />
                </div>
                <div>
                    <textarea

                    // onChange=""
                    name="content"
                    placeholder="비고"

                    />
                </div>
               
                <div>
                    <button type="submit">카테고리등록</button>
                </div>
            </div>
            </form>

    );
};

export default CategoryWrite;