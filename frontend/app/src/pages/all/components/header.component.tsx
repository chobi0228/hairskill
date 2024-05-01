import Link from "next/link";
import {urls, generalWordSettings} from "../../../constants/general";
export default function Header() {
    return (
      <>
        <header><Link href={"/"} className="header">{generalWordSettings.aplicaton_title}</Link></header>
      </>
    );
}
