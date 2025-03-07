import Menu from "@/components/Menu";
import { ReactNode } from "react";
interface LayoutProps {
    children: ReactNode;
}

export default function MainLayout({children}:LayoutProps) {
  return (
    <div>
        <Menu/>
        <div>{children}</div>
        <h4>footer</h4>
    </div>
  )
}
