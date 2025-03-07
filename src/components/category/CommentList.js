
import { useEffect, useState } from 'react';
import Commnet from './Commnet';
import { getComments } from '@/pages/api/action';
// import Mycomment from "@/type/mytype"
// import { getComments } from '@/pages/api/action';
// getServerSideProps는 Next.js에서 서버 사이드 렌더링
// (SSR, Server-Side Rendering) 을 수행하는 함수입니다.
// 페이지가 요청될 때마다 실행되며, 서버에서 
// 데이터를 가져와 페이지를 동적으로 렌더링 합니다.
// SEO(검색 엔진 최적화) 가 필요하면서, 최신 데이터를 제공해야 할 때 적합합니다.


 function CommentList() {
    const [datalist,setDataList] = useState([])
    console.log(datalist)
    useEffect(()=>{
        //비동기함수
        async function fetchData() {
            const data = await getComments(); //  `getComments()` 함수 호출
            setDataList(data); //  상태 업데이트
        }
        fetchData(); // 비동기 함수 실행
    },[])
    return (
        <div>
            <h1>댓글리스트({datalist.length}개)</h1>
            <div>
                {datalist.map(comment => 
                        <Commnet key={comment.commentNo} {...comment} ></Commnet>
                    )}
            </div>
        </div>
          
    );
};
//속성이 전달되지 않는 경우 기본속성을 정의할 수 있다.
CommentList.defaultProps={
    commnetlist:[]
}
export default CommentList;