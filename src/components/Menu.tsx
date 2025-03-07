import Link from "next/link"
import styles from "@/styles/Menu.module.css"; // CSS 모듈 불러오기


const Menu = () => {
    return (
        <>
            <div className={styles.menu}>
                <Link className={styles.menuItem} href={"/"} >Home</Link>
                <Link className={styles.menuItem} href={"/comment/write"} >카테고리등록</Link>
                <Link className={styles.menuItem} href={"/comment/list"} >목록보기</Link>
                <Link className={styles.menuItem} href={"/member/loginPage"} >로그인</Link>
            </div>
            <div className={styles.navSpacer}></div>
        </>
    );
};

export default Menu;