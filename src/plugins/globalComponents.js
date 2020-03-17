
import BaseAlert from "../components/BaseAlert";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import Card from "../components/Card";
import Icon from "../components/Icon";

/* Don't load components globally. It loads the compoonent on every
 * page whether it is used or not. The following 5 should are used
 * on nearly every page, so it's negligble. */

export default {
  install(Vue) {
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
