import {urls, generalWordSettings} from "../../constants/general";
import { getSignUpJSON, postSignUpJSON } from "../../services/api"
export default function SignUP() {
    return (
      <>
          <button onClick={postSignUpJSON}>ボタン</button>
      </>
    );
}
