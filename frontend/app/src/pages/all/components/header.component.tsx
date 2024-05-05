import Link from "next/link";
import {urls, generalWordSetting} from "../../../constants/general";
export default function Header() {
    return (
      <>
        <header className="header">{generalWordSetting.aplicaton_title}</header>
      </>
    );
}
