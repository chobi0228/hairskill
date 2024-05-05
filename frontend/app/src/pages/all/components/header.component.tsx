import Link from "next/link";
import {urls, general_word_setting} from "../../../constants/general";
export default function Header() {
    return (
      <>
        <header className="header">{general_word_setting.aplicaton_title}</header>
      </>
    );
}
